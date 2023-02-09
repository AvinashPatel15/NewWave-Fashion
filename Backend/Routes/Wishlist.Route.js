const express = require("express");
const {
  deleteWishlist,
} = require("../Controllers/Wishlist-Controllers/DeleteWishlist.Controller");
const {
  getWishlist,
} = require("../Controllers/Wishlist-Controllers/GetWishlist.Controller");
const {
  postWishlist,
} = require("../Controllers/Wishlist-Controllers/PostWishlist.Controller");
const { UserAuth } = require("../Middlewares/UserAuth.Middleware");

const wishlistRouter = express.Router();

/**
 * ? `/wishlists`
 * This Endpoint Is Use For Getting All The Data Of Cart Of User Who Logged In */

wishlistRouter.get("/", UserAuth, getWishlist);

/** If User Want To Add The Product In The Wishlist Then Use This Endpoint
 * ? `/wishlists/post/${productID}`
 */

wishlistRouter.post("/post/:productID", UserAuth, postWishlist);

/** If User Want To Delete Product From Wishlist Then Use This Endpoint
 * ? `/wishlists/delete/${id}`
 */

wishlistRouter.delete("/delete/:id", UserAuth, deleteWishlist);

module.exports = {
  wishlistRouter,
};
