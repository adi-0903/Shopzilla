const express = require("express")
const Order = require("../models/Order")
const Cart = require("../models/Cart")
const Product = require("../models/Product")
const auth = require("../middleware/auth")
const admin = require("../middleware/admin")

const router = express.Router()

// @route   POST /api/orders
// @desc    Create new order
// @access  Private
router.post("/", auth, async (req, res) => {
  try {
    const { items, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice, couponCode } =
      req.body

    if (!items || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No order items",
      })
    }

    // Verify all products exist and are in stock
    for (const item of items) {
      const product = await Product.findById(item.product)
      if (!product) {
        return res.status(404).json({
          success: false,
          message: `Product not found: ${item.name}`,
        })
      }
      if (!product.inStock || product.stock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Insufficient stock for: ${product.name}`,
        })
      }
    }

    const order = new Order({
      user: req.user.id,
      items,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      couponCode,
    })

    const createdOrder = await order.save()

    // Update product stock
    for (const item of items) {
      await Product.findByIdAndUpdate(item.product, { $inc: { stock: -item.quantity } })
    }

    // Clear user's cart
    await Cart.findOneAndDelete({ user: req.user.id })

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order: createdOrder,
    })
  } catch (error) {
    console.error("Create order error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   GET /api/orders
// @desc    Get user's orders
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query

    const orders = await Order.find({ user: req.user.id })
      .populate("items.product", "name images")
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)

    const total = await Order.countDocuments({ user: req.user.id })

    res.json({
      success: true,
      count: orders.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: Number(page),
      orders,
    })
  } catch (error) {
    console.error("Get orders error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   GET /api/orders/:id
// @desc    Get order by ID
// @access  Private
router.get("/:id", auth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user", "name email")
      .populate("items.product", "name images brand")

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      })
    }

    // Check if user owns this order or is admin
    if (order.user._id.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Not authorized to view this order",
      })
    }

    res.json({
      success: true,
      order,
    })
  } catch (error) {
    console.error("Get order error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   PUT /api/orders/:id/pay
// @desc    Update order to paid
// @access  Private
router.put("/:id/pay", auth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      })
    }

    if (order.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Not authorized",
      })
    }

    order.isPaid = true
    order.paidAt = Date.now()
    order.status = "confirmed"
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    }

    const updatedOrder = await order.save()

    res.json({
      success: true,
      message: "Order payment updated",
      order: updatedOrder,
    })
  } catch (error) {
    console.error("Update order payment error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   PUT /api/orders/:id/status
// @desc    Update order status (Admin only)
// @access  Private/Admin
router.put("/:id/status", [auth, admin], async (req, res) => {
  try {
    const { status, trackingNumber } = req.body

    const order = await Order.findById(req.params.id)

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      })
    }

    order.status = status
    if (trackingNumber) order.trackingNumber = trackingNumber
    if (status === "delivered") {
      order.isDelivered = true
      order.deliveredAt = Date.now()
    }

    const updatedOrder = await order.save()

    res.json({
      success: true,
      message: "Order status updated",
      order: updatedOrder,
    })
  } catch (error) {
    console.error("Update order status error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   GET /api/orders/admin/all
// @desc    Get all orders (Admin only)
// @access  Private/Admin
router.get("/admin/all", [auth, admin], async (req, res) => {
  try {
    const { page = 1, limit = 20, status } = req.query

    const query = {}
    if (status) query.status = status

    const orders = await Order.find(query)
      .populate("user", "name email")
      .populate("items.product", "name images")
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)

    const total = await Order.countDocuments(query)

    res.json({
      success: true,
      count: orders.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: Number(page),
      orders,
    })
  } catch (error) {
    console.error("Get all orders error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

module.exports = router
