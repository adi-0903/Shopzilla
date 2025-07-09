const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    title: {
      type: String,
      required: true,
      maxlength: [100, "Review title cannot exceed 100 characters"],
    },
    comment: {
      type: String,
      required: true,
      maxlength: [1000, "Review comment cannot exceed 1000 characters"],
    },
    images: [
      {
        public_id: String,
        url: String,
      },
    ],
    isVerified: {
      type: Boolean,
      default: false,
    },
    helpfulVotes: {
      type: Number,
      default: 0,
    },
    votedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  },
)

// Ensure one review per user per product
reviewSchema.index({ user: 1, product: 1 }, { unique: true })

module.exports = mongoose.model("Review", reviewSchema)
