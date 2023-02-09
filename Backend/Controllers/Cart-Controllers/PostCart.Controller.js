const { CartModel } = require("../../Models/Cart.Model");

const postCart = async (req, res) => {
  const userID = req.userID;
  const productID = req.params.productID;
  try {
    let isProduct = await CartModel.findOne({ productID, userID });
    if (isProduct) {
      await CartModel.findByIdAndUpdate(
        { _id: isProduct._id },
        { productCOUNT: isProduct.productCOUNT + 1 }
      );
      res.send({ message: "Item Count Updated! +1" });
    } else {
      await CartModel.create({ productID, userID });
      res.send({ message: "Item Added To The Cart Successfully" });
    }
    // res.send({ message: "Item Updated In Cart Successfully" });
  } catch (error) {
    res
      .status(401)
      .send({ message: "Something Went Wrong In The Cart Section", error });
  }
};

module.exports = {
  postCart,
};
