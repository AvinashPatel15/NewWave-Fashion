const { PurchaseHistoryModel } = require("../../Models/PurchaseHistory.Model");

const updatePurchaseHistory = async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await PurchaseHistoryModel.findByIdAndUpdate({ _id: ID }, payload);
    res.send(`Update The Order Data Whose ID Is ${ID}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  updatePurchaseHistory,
};
