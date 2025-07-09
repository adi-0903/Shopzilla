const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      maxlength: [200, "Product name cannot exceed 200 characters"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      maxlength: [2000, "Description cannot exceed 2000 characters"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price cannot be negative"],
    },
    originalPrice: {
      type: Number,
      min: [0, "Original price cannot be negative"],
    },
    discount: {
      type: Number,
      min: [0, "Discount cannot be negative"],
      max: [100, "Discount cannot exceed 100%"],
    },
    brand: {
      type: String,
      required: [true, "Brand is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: ["men", "women", "kids", "home-living", "beauty", "electronics", "studio"],
    },
    subcategory: {
      type: String,
      trim: true,
    },
    images: [
      {
        public_id: String,
        url: {
          type: String,
          required: true,
        },
      },
    ],
    colors: [String],
    sizes: [String],
    stock: {
      type: Number,
      required: [true, "Stock quantity is required"],
      min: [0, "Stock cannot be negative"],
      default: 0,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    rating: {
      type: Number,
      default: 0,
      min: [0, "Rating cannot be negative"],
      max: [5, "Rating cannot exceed 5"],
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    features: [String],
    specifications: [
      {
        key: String,
        value: String,
      },
    ],
    tags: [String],
    isActive: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
)

// Index for search
productSchema.index({
  name: "text",
  description: "text",
  brand: "text",
  category: "text",
})

module.exports = mongoose.model("Product", productSchema)
