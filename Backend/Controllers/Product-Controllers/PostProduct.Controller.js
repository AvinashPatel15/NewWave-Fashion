const { ProductModel } = require("../../Models/Product.Model");

const postProduct = async (req, res) => {
  const data = req.body;
  data.userID = req.userID;
  try {
    const book = await ProductModel(data);
    await book.save();
    res.send(book);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postProduct,
};
