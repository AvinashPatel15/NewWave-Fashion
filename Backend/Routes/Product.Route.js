const express = require("express");
const { ProductModel } = require("../Models/Product.Model");
require("dotenv").config();

const productRouter = express.Router();

/** For Getting All The Products Data */

productRouter.get("/", async (req, res) => {
  try {
    const product = await ProductModel.find();
    res.send(product);
  } catch (error) {
    res.status(401).send({ message: "Something Went Wrong" });
    console.log(error);
  }
});

/** For Post A Product */

productRouter.post("/post", async (req, res) => {
  const data = req.body;
  data.userID = req.userID;
  try {
    const book = await ProductModel(data);
    await book.save();
    res.send(book);
  } catch (error) {
    console.log(error);
  }
});

/** For Update A Product Using ID*/

productRouter.patch("/update/:id", async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await ProductModel.findByIdAndUpdate({ _id: ID }, payload);
    res.send(`Update The Book Data Whose ID Is ${ID}`);
  } catch (error) {
    console.log(error);
  }
});

/** For Delete A Product Using ID*/

productRouter.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    await ProductModel.findByIdAndDelete({ _id: ID });
    res.send(`Delete The Book Data Whose ID Is ${ID}`);
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  productRouter,
};
