const { ProductModel } = require("../../Models/Product.Model");

const updateProduct = async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await ProductModel.findByIdAndUpdate({ _id: ID }, payload);
    res.send(`Update The Book Data Whose ID Is ${ID}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  updateProduct,
};
