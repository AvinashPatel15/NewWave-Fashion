const { ProductModel } = require("../../Models/Product.Model");

const getProducts = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const product = await ProductModel.findById({ _id: id });
      res.send(product);
    } else {
      const product = await ProductModel.find();
      res.send(product);
    }
  } catch (error) {
    res.status(401).send({ message: "Something Went Wrong" });
    console.log(error);
  }
};

module.exports = {
  getProducts,
};
