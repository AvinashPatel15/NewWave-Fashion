const mongoose = require("mongoose");

const PurchaseHistory = mongoose.Schema(
  {
    productID: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    productCOUNT: { type: Number, required: true },
    // adminID: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
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
