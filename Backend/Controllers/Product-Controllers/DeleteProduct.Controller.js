const { ProductModel } = require("../../Models/Product.Model");

const deleteProduct = async (req, res) => {
  const ID = req.params.id;
  try {
    await ProductModel.findByIdAndDelete({ _id: ID });
    res.send(`Delete The Product Data Whose ID Is ${ID}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  deleteProduct,
};
