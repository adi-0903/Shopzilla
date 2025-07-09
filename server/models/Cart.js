const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
          default: 1,
        },
        size: String,
        color: String,
        addedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    totalItems: {
      type: Number,
      default: 0,
    },
    totalPrice: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
)

// Calculate totals before saving
cartSchema.pre("save", function (next) {
  this.totalItems = this.items.reduce((total, item) => total + item.quantity, 0)
  next()
})

module.exports = mongoose.model("Cart", cartSchema)
