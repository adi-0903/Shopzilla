const express = require("express")
const Wishlist = require("../models/Wishlist")
const Product = require("../models/Product")
const auth = require("../middleware/auth")

const router = express.Router()

// @route   GET /api/wishlist
// @desc    Get user's wishlist
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user.id }).populate(
      "items.product",
      "name price originalPrice discount images brand rating inStock",
    )

    if (!wishlist) {
      return res.json({
        success: true,
        wishlist: {
          items: [],
        },
      })
    }

    res.json({
      success: true,
      wishlist,
    })
  } catch (error) {
    console.error("Get wishlist error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   POST /api/wishlist/add
// @desc    Add item to wishlist
// @access  Private
router.post("/add", auth, async (req, res) => {
  try {
    const { productId } = req.body

    // Check if product exists
    const product = await Product.findById(productId)
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      })
    }

    let wishlist = await Wishlist.findOne({ user: req.user.id })

    if (!wishlist) {
      // Create new wishlist
      wishlist = new Wishlist({
        user: req.user.id,
        items: [
          {
            product: productId,
          },
        ],
      })
    } else {
      // Check if item already exists in wishlist
      const existingItem = wishlist.items.find((item) => item.product.toString() === productId)

      if (existingItem) {
        return res.status(400).json({
          success: false,
          message: "Product already in wishlist",
        })
      }

      // Add new item
      wishlist.items.push({
        product: productId,
      })
    }

    await wishlist.save()
    await wishlist.populate("items.product", "name price originalPrice discount images brand rating")

    res.json({
      success: true,
      message: "Item added to wishlist",
      wishlist,
    })
  } catch (error) {
    console.error("Add to wishlist error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   DELETE /api/wishlist/remove/:productId
// @desc    Remove item from wishlist
// @access  Private
router.delete("/remove/:productId", auth, async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user.id })
    if (!wishlist) {
      return res.status(404).json({
        success: false,
        message: "Wishlist not found",
      })
    }

    wishlist.items = wishlist.items.filter((item) => item.product.toString() !== req.params.productId)

    await wishlist.save()
    await wishlist.populate("items.product", "name price originalPrice discount images brand rating")

    res.json({
      success: true,
      message: "Item removed from wishlist",
      wishlist,
    })
  } catch (error) {
    console.error("Remove from wishlist error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   DELETE /api/wishlist/clear
// @desc    Clear wishlist
// @access  Private
router.delete("/clear", auth, async (req, res) => {
  try {
    await Wishlist.findOneAndDelete({ user: req.user.id })

    res.json({
      success: true,
      message: "Wishlist cleared",
    })
  } catch (error) {
    console.error("Clear wishlist error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

module.exports = router
