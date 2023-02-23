const mongoose = require("mongoose");

const PurchaseHistory = mongoose.Schema(
  {
    productID: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    productCOUNT: { type: Number, required: true },
    orderStatus: { type: String, default: "Processing" },
    deliveredAt: { type: Date },
    createdAt: { type: Date, default: Date.now() },
    name: { type: String, required: true },
    number: { type: Number, required: true },
    pincode: { type: Number, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const PurchaseHistoryModel = mongoose.model("PurchaseHistory", PurchaseHistory);

module.exports = {
  PurchaseHistoryModel,
};
