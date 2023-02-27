const { PurchaseHistoryModel } = require("../../Models/PurchaseHistory.Model");

const getAllPurchaseHistory = async (req, res) => {
  try {
    const ph = await PurchaseHistoryModel.find().populate(["productID"]);
    if (ph.length > 0) {
      res.send(ph);
    } else {
      res.send({ message: "No One Have Ordered Yet!" });
    }
  } catch (error) {
    res
      .status(401)
      .send({ message: "Something went wrong in PurchaseHistory", error });
  }
};

module.exports = {
  getAllPurchaseHistory,
};
