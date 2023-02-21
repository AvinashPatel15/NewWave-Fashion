const { CartModel } = require("../../Models/Cart.Model");

const getCart = async (req, res) => {
  const userID = req.userID;
  try {
    const cart = await CartModel.find({ userID }).populate(["productID"]);
    if (cart.length > 0) {
      res.send(cart);
    } else {
      res.send({ message: "No item in the cart" });
    }
  } catch (error) {
    res
      .status(401)
      .send({ message: "Something went wrong in cart Get", error });
  }
};

module.exports = {
  getCart,
};
