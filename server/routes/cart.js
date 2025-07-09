const express = require("express")
const Cart = require("../models/Cart")
const Product = require("../models/Product")
const auth = require("../middleware/auth")

const router = express.Router()

// @route   GET /api/cart
// @desc    Get user's cart
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate("items.product", "name price images brand inStock")

    if (!cart) {
      return res.json({
        success: true,
        cart: {
          items: [],
          totalItems: 0,
          totalPrice: 0,
        },
      })
    }

    // Calculate total price
    let totalPrice = 0
    cart.items.forEach((item) => {
      if (item.product) {
        totalPrice += item.product.price * item.quantity
      }
    })

    cart.totalPrice = totalPrice
    await cart.save()

    res.json({
      success: true,
      cart,
    })
  } catch (error) {
    console.error("Get cart error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   POST /api/cart/add
// @desc    Add item to cart
// @access  Private
router.post("/add", auth, async (req, res) => {
  try {
    const { productId, quantity = 1, size, color } = req.body

    // Check if product exists
    const product = await Product.findById(productId)
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      })
    }

    if (!product.inStock) {
      return res.status(400).json({
        success: false,
        message: "Product is out of stock",
      })
    }

    let cart = await Cart.findOne({ user: req.user.id })

    if (!cart) {
      // Create new cart
      cart = new Cart({
        user: req.user.id,
        items: [
          {
            product: productId,
            quantity,
            size,
            color,
          },
        ],
      })
    } else {
      // Check if item already exists in cart
      const existingItemIndex = cart.items.findIndex(
        (item) => item.product.toString() === productId && item.size === size && item.color === color,
      )

      if (existingItemIndex > -1) {
        // Update quantity
        cart.items[existingItemIndex].quantity += quantity
      } else {
        // Add new item
        cart.items.push({
          product: productId,
          quantity,
          size,
          color,
        })
      }
    }

    await cart.save()
    await cart.populate("items.product", "name price images brand")

    res.json({
      success: true,
      message: "Item added to cart",
      cart,
    })
  } catch (error) {
    console.error("Add to cart error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   PUT /api/cart/update/:itemId
// @desc    Update cart item quantity
// @access  Private
router.put("/update/:itemId", auth, async (req, res) => {
  try {
    const { quantity } = req.body

    if (quantity < 1) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be at least 1",
      })
    }

    const cart = await Cart.findOne({ user: req.user.id })
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      })
    }

    const itemIndex = cart.items.findIndex((item) => item._id.toString() === req.params.itemId)

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Item not found in cart",
      })
    }

    cart.items[itemIndex].quantity = quantity
    await cart.save()
    await cart.populate("items.product", "name price images brand")

    res.json({
      success: true,
      message: "Cart updated",
      cart,
    })
  } catch (error) {
    console.error("Update cart error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   DELETE /api/cart/remove/:itemId
// @desc    Remove item from cart
// @access  Private
router.delete("/remove/:itemId", auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id })
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      })
    }

    cart.items = cart.items.filter((item) => item._id.toString() !== req.params.itemId)

    await cart.save()
    await cart.populate("items.product", "name price images brand")

    res.json({
      success: true,
      message: "Item removed from cart",
      cart,
    })
  } catch (error) {
    console.error("Remove from cart error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   DELETE /api/cart/clear
// @desc    Clear cart
// @access  Private
router.delete("/clear", auth, async (req, res) => {
  try {
    await Cart.findOneAndDelete({ user: req.user.id })

    res.json({
      success: true,
      message: "Cart cleared",
    })
  } catch (error) {
    console.error("Clear cart error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

module.exports = router
