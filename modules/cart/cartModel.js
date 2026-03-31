const mongoose = require("mongoose");

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
          default: 1,
          required: true,
          min: 1
        },

        price: {
          type: Number,
          required: true,
          min: 0
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

cartSchema.methods.calculateTotal = function () {
  return this.items.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
}
module.exports = mongoose.model("Cart", cartSchema);