const express = require("express");
const {
  deleteProduct,
} = require("../Controllers/Product-Controllers/DeleteProduct.Controller");
const {
  getProducts,
} = require("../Controllers/Product-Controllers/GetProduct.Controller");
const {
  postProduct,
} = require("../Controllers/Product-Controllers/PostProduct.Controller");
const {
  updateProduct,
} = require("../Controllers/Product-Controllers/UpdateProduct.Controller");
const { AdminAuth } = require("../Middlewares/AdminAuth.Middleware");
require("dotenv").config();

const productRouter = express.Router();

/** For Getting All The Products Data */

productRouter.get("/", getProducts);

/** For Post A Product */

productRouter.post("/post", AdminAuth, postProduct);

/** For Update A Product Using ID*/

productRouter.patch("/update/:id", AdminAuth, updateProduct);

/** For Delete A Product Using ID*/

productRouter.delete("/delete/:id", AdminAuth, deleteProduct);

module.exports = {
  productRouter,
};
