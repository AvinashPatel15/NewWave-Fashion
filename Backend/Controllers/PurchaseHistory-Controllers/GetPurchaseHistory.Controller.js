const { PurchaseHistoryModel } = require("../../Models/PurchaseHistory.Model");

const getPurchaseHistory = async (req, res) => {
  const userID = req.userID;
  try {
    const ph = await PurchaseHistoryModel.find({ userID }).populate([
      "productID",
    ]);
    if (ph.length > 0) {
      res.send(ph);
    } else {
      res.send({ message: "You Have Not Purchase Yet" });
    }
  } catch (error) {
    res
      .status(401)
      .send({ message: "Something went wrong in PurchaseHistory", error });
  }
};

module.exports = {
  getPurchaseHistory,
};
