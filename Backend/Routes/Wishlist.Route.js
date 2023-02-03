const express = require("express");
const { UserAuth } = require("../Middlewares/UserAuth.Middleware");
const { WishlistModel } = require("../Models/Wishlist.Model");

const wishlistRouter = express.Router();

/**
 * ? `/wishlists`
 * This Endpoint Is Use For Getting All The Data Of Cart Of User Who Logged In */

wishlistRouter.get("/", UserAuth, async (req, res) => {
  const userID = req.userID;
  try {
    const wishlist = await WishlistModel.find({ userID }).populate([
      "productID",
    ]);
    if (wishlist.length > 0) {
      res.send(wishlist);
    } else {
      res.status(401).send({ message: "No item added to the wishlist" });
    }
  } catch (error) {
    res
      .status(401)
      .send({ message: "Something went wrong in wishlist", error });
  }
});

/** If User Want To Add The Product In The Wishlist Then Use This Endpoint
 * ? `/wishlists/post/${productID}`
 */

wishlistRouter.post("/post/:productID", UserAuth, async (req, res) => {
  const userID = req.userID;
  const productID = req.params.productID;
  try {
    let isProduct = await WishlistModel.findOne({ productID, userID });
    if (isProduct) {
      res.status(401).send({ message: "This Item Is Already In Wishlist!" });
    } else {
      await WishlistModel.create({ productID, userID });
      res.send({ message: "Item Added To The Wishlist Successfully" });
    }
  } catch (error) {
    res
      .status(401)
      .send({ message: "Something Went Wrong In The Wishlist", error });
  }
});

/** If User Want To Delete Product From Wishlist Then Use This Endpoint
 * ? `/wishlists/delete/${id}`
 */

wishlistRouter.delete("/delete/:id", UserAuth, async (req, res) => {
  const id = req.params.id;
  try {
    await WishlistModel.findByIdAndDelete({ _id: id });
    res.send({ message: "Product Removed From The Wishlist Successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Something Went Wrong In The Cart Remove", error });
  }
});

module.exports = {
  wishlistRouter,
};
