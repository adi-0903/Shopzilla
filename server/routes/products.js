const express = require("express")
const Product = require("../models/Product")
const auth = require("../middleware/auth")
const admin = require("../middleware/admin")

const router = express.Router()

// @route   GET /api/products
// @desc    Get all products with filtering, sorting, and pagination
// @access  Public
router.get("/", async (req, res) => {
  try {
    const {
      category,
      brand,
      minPrice,
      maxPrice,
      search,
      sort = "createdAt",
      order = "desc",
      page = 1,
      limit = 20,
    } = req.query

    // Build query
    const query = { isActive: true }

    if (category) query.category = category
    if (brand) query.brand = new RegExp(brand, "i")
    if (minPrice || maxPrice) {
      query.price = {}
      if (minPrice) query.price.$gte = Number(minPrice)
      if (maxPrice) query.price.$lte = Number(maxPrice)
    }
    if (search) {
      query.$text = { $search: search }
    }

    // Sort options
    const sortOptions = {}
    sortOptions[sort] = order === "desc" ? -1 : 1

    // Execute query with pagination
    const products = await Product.find(query)
      .sort(sortOptions)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select("-__v")

    const total = await Product.countDocuments(query)

    res.json({
      success: true,
      count: products.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: Number(page),
      products,
    })
  } catch (error) {
    console.error("Get products error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   GET /api/products/:id
// @desc    Get single product
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      })
    }

    res.json({
      success: true,
      product,
    })
  } catch (error) {
    console.error("Get product error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   POST /api/products
// @desc    Create product (Admin only)
// @access  Private/Admin
router.post("/", [auth, admin], async (req, res) => {
  try {
    const product = await Product.create({
      ...req.body,
      createdBy: req.user.id,
    })

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    })
  } catch (error) {
    console.error("Create product error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   PUT /api/products/:id
// @desc    Update product (Admin only)
// @access  Private/Admin
router.put("/:id", [auth, admin], async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      })
    }

    res.json({
      success: true,
      message: "Product updated successfully",
      product,
    })
  } catch (error) {
    console.error("Update product error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   DELETE /api/products/:id
// @desc    Delete product (Admin only)
// @access  Private/Admin
router.delete("/:id", [auth, admin], async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      })
    }

    res.json({
      success: true,
      message: "Product deleted successfully",
    })
  } catch (error) {
    console.error("Delete product error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   GET /api/products/category/:category
// @desc    Get products by category
// @access  Public
router.get("/category/:category", async (req, res) => {
  try {
    const { category } = req.params
    const { page = 1, limit = 20, sort = "createdAt" } = req.query

    const products = await Product.find({
      category,
      isActive: true,
    })
      .sort({ [sort]: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)

    const total = await Product.countDocuments({ category, isActive: true })

    res.json({
      success: true,
      count: products.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: Number(page),
      products,
    })
  } catch (error) {
    console.error("Get products by category error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

module.exports = router
