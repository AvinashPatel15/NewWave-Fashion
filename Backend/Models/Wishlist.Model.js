const mongoose = require("mongoose");

const WishlistSchema = mongoose.Schema(
  {
    productID: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const WishlistModel = mongoose.model("wishlist", WishlistSchema);

module.exports = {
  WishlistModel,
};
