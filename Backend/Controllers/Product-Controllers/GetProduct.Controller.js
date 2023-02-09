const { ProductModel } = require("../../Models/Product.Model");

const getProducts = async (req, res) => {
  const { q } = req.body;
  try {
    const product = await ProductModel.find(
      q
        ? {
            $or: [{ title: { $regex: "^" + q } }],
          }
        : null
    );
    res.send(product);
  } catch (error) {
    res.status(401).send({ message: "Something Went Wrong" });
    console.log(error);
  }
};

module.exports = {
  getProducts,
};
