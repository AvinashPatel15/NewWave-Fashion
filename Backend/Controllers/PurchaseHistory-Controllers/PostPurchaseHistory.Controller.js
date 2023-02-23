const { CartModel } = require("../../Models/Cart.Model");
const { PurchaseHistoryModel } = require("../../Models/PurchaseHistory.Model");

const postPurchaseHistory = async (req, res) => {
  const {
    first_name,
    last_name,
    number,
    address,
    pincode,
    city,
    state,
    country,
  } = req.body;
  const userID = req.userID;
  try {
    const cart = await CartModel.find({ userID });
    if (cart.length === 0) {
      res.status(401).send({ message: "Your Cart Is Empty" });
    } else {
      for (let i = 0; i < cart.length; i++) {
        await PurchaseHistoryModel.insertMany({
          userID: cart[i].userID,
          productID: cart[i].productID,
          productCOUNT: cart[i].productCOUNT,
          first_name,
          last_name,
          number,
          address,
          pincode,
          city,
          state,
          country,
        });
      }
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
