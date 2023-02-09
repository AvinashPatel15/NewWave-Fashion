const { CartModel } = require("../../Models/Cart.Model");
const { PurchaseHistoryModel } = require("../../Models/PurchaseHistory.Model");

const postPurchaseHistory = async (req, res) => {
  const userID = req.userID;
  try {
    const cart = await CartModel.find({ userID });
    if (cart.length === 0) {
      res.status(401).send({ message: "Your Cart Is Empty" });
    } else {
      await PurchaseHistoryModel.insertMany(cart);
      await CartModel.deleteMany({ userID });
      res.send({ message: "Successfully Purchase" });
    }
  } catch (error) {
    res
      .status(401)
      .send({ message: "Something went wrong in cart Get", error });
  }
};

module.exports = {
  postPurchaseHistory,
};
