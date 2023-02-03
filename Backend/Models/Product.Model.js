const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    brand: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    images: [{ url: { type: String, required: true } }],
    subtitle: { type: String, required: true },
    genre: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ProductModel = mongoose.model("product", productSchema);

module.exports = {
  ProductModel,
};
