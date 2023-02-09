const express = require("express");
const {
  deleteCart,
} = require("../Controllers/Cart-Controllers/DeleteCart.Controller");
const {
  getCart,
} = require("../Controllers/Cart-Controllers/GetCart.Controller");
const {
  postCart,
} = require("../Controllers/Cart-Controllers/PostCart.Controller");
const {
  updateCart,
} = require("../Controllers/Cart-Controllers/UpdateCart.Controller");
const { UserAuth } = require("../Middlewares/UserAuth.Middleware");

const cartRouter = express.Router();

/**
 * ? `/carts`
 * This Endpoint Is Use For Getting All The Data Of Cart Of User Who Logged In */

cartRouter.get("/", UserAuth, getCart);

/** If User Want To Increase The Count Of Item In The Cart Then Use This Endpoint
 * ? `/carts/post/${productID}`
 * And If The Product Count Is Zero Then Item Will Added To The Cart
 */

cartRouter.post("/post/:productID", UserAuth, postCart);

/** If User Want To Decrease The Count Of The Item In The Cart Then Use This Endpoint
 * ? `/carts/remove/${id}`
 * And If The Count Is One Then Item Was Removed From Cart
 */

cartRouter.patch("/remove/:id", UserAuth, updateCart);

/** If User Want To Delete Item From Cart Then Use This Endpoint
 * ? `/carts/delete/${id}`
 */

cartRouter.delete("/delete/:id", UserAuth, deleteCart);

module.exports = {
  cartRouter,
};
