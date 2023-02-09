const { CartModel } = require("../../Models/Cart.Model");

const updateCart = async (req, res) => {
  const id = req.params.id;
  try {
    let isProduct = await CartModel.findOne({ _id: id });
    if (isProduct.productCOUNT > 1) {
      await CartModel.findByIdAndUpdate(
        { _id: isProduct._id },
        { productCOUNT: isProduct.productCOUNT - 1 }
      );
      res.send({ message: "Item Count Updated! -1" });
    } else {
      await CartModel.findByIdAndDelete({ _id: id });
      res.send({ message: "Item Deleted From The Cart Successfully" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Something Went Wrong In The Cart Delete", error });
  }
};

module.exports = {
  updateCart,
};
