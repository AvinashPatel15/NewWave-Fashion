const { CartModel } = require("../../Models/Cart.Model");

const deleteCart = async (req, res) => {
  const id = req.params.id;
  try {
    await CartModel.findByIdAndDelete({ _id: id });
    res.send({ message: "Item Deleted From The Cart Successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Something Went Wrong In The Cart Delete", error });
  }
};

module.exports = {
  deleteCart,
};
