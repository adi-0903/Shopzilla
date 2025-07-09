const express = require("express")
const Review = require("../models/Review")
const Product = require("../models/Product")
const auth = require("../middleware/auth")
const { body, validationResult } = require("express-validator")
const mongoose = require("mongoose") // Import mongoose

const router = express.Router()

// @route   GET /api/reviews/product/:productId
// @desc    Get reviews for a product
// @access  Public
router.get("/product/:productId", async (req, res) => {
  try {
    const { page = 1, limit = 10, sort = "createdAt" } = req.query

    const reviews = await Review.find({ product: req.params.productId })
      .populate("user", "name avatar")
      .sort({ [sort]: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)

    const total = await Review.countDocuments({ product: req.params.productId })

    // Calculate rating statistics
    const ratingStats = await Review.aggregate([
      { $match: { product: mongoose.Types.ObjectId(req.params.productId) } },
      {
        $group: {
          _id: "$rating",
          count: { $sum: 1 },
        },
      },
    ])

    res.json({
      success: true,
      count: reviews.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: Number(page),
      reviews,
      ratingStats,
    })
  } catch (error) {
    console.error("Get reviews error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   POST /api/reviews
// @desc    Create a review
// @access  Private
router.post(
  "/",
  [
    auth,
    body("product").isMongoId().withMessage("Valid product ID is required"),
    body("rating").isInt({ min: 1, max: 5 }).withMessage("Rating must be between 1 and 5"),
    body("title").trim().isLength({ min: 1, max: 100 }).withMessage("Title must be 1-100 characters"),
    body("comment").trim().isLength({ min: 1, max: 1000 }).withMessage("Comment must be 1-1000 characters"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: errors.array(),
        })
      }

      const { product, rating, title, comment } = req.body

      // Check if product exists
      const productExists = await Product.findById(product)
      if (!productExists) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        })
      }

      // Check if user already reviewed this product
      const existingReview = await Review.findOne({
        user: req.user.id,
        product,
      })

      if (existingReview) {
        return res.status(400).json({
          success: false,
          message: "You have already reviewed this product",
        })
      }

      const review = await Review.create({
        user: req.user.id,
        product,
        rating,
        title,
        comment,
      })

      // Update product rating
      const reviews = await Review.find({ product })
      const avgRating = reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length

      await Product.findByIdAndUpdate(product, {
        rating: avgRating,
        numReviews: reviews.length,
      })

      await review.populate("user", "name avatar")

      res.status(201).json({
        success: true,
        message: "Review created successfully",
        review,
      })
    } catch (error) {
      console.error("Create review error:", error)
      res.status(500).json({
        success: false,
        message: "Server error",
      })
    }
  },
)

// @route   PUT /api/reviews/:id
// @desc    Update a review
// @access  Private
router.put(
  "/:id",
  [
    auth,
    body("rating").optional().isInt({ min: 1, max: 5 }).withMessage("Rating must be between 1 and 5"),
    body("title").optional().trim().isLength({ min: 1, max: 100 }).withMessage("Title must be 1-100 characters"),
    body("comment").optional().trim().isLength({ min: 1, max: 1000 }).withMessage("Comment must be 1-1000 characters"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: errors.array(),
        })
      }

      const review = await Review.findById(req.params.id)

      if (!review) {
        return res.status(404).json({
          success: false,
          message: "Review not found",
        })
      }

      // Check if user owns this review
      if (review.user.toString() !== req.user.id) {
        return res.status(403).json({
          success: false,
          message: "Not authorized to update this review",
        })
      }

      const { rating, title, comment } = req.body

      review.rating = rating || review.rating
      review.title = title || review.title
      review.comment = comment || review.comment

      await review.save()

      // Update product rating if rating changed
      if (rating) {
        const reviews = await Review.find({ product: review.product })
        const avgRating = reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length

        await Product.findByIdAndUpdate(review.product, {
          rating: avgRating,
        })
      }

      await review.populate("user", "name avatar")

      res.json({
        success: true,
        message: "Review updated successfully",
        review,
      })
    } catch (error) {
      console.error("Update review error:", error)
      res.status(500).json({
        success: false,
        message: "Server error",
      })
    }
  },
)

// @route   DELETE /api/reviews/:id
// @desc    Delete a review
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      })
    }

    // Check if user owns this review or is admin
    if (review.user.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this review",
      })
    }

    const productId = review.product

    await Review.findByIdAndDelete(req.params.id)

    // Update product rating
    const reviews = await Review.find({ product: productId })
    const avgRating = reviews.length > 0 ? reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length : 0

    await Product.findByIdAndUpdate(productId, {
      rating: avgRating,
      numReviews: reviews.length,
    })

    res.json({
      success: true,
      message: "Review deleted successfully",
    })
  } catch (error) {
    console.error("Delete review error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   PUT /api/reviews/:id/helpful
// @desc    Mark review as helpful
// @access  Private
router.put("/:id/helpful", auth, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      })
    }

    // Check if user already voted
    if (review.votedBy.includes(req.user.id)) {
      return res.status(400).json({
        success: false,
        message: "You have already voted for this review",
      })
    }

    review.helpfulVotes += 1
    review.votedBy.push(req.user.id)

    await review.save()

    res.json({
      success: true,
      message: "Vote recorded successfully",
      helpfulVotes: review.helpfulVotes,
    })
  } catch (error) {
    console.error("Vote review error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

module.exports = router
