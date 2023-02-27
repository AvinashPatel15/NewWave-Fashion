const { ProductModel } = require("../../Models/Product.Model");

const getProducts = async (req, res) => {
  const { id } = req.params;
  const { q, gender } = req.query;
  try {
    if (id) {
      const product = await ProductModel.findById({ _id: id });
      res.send(product);
    } else if (q) {
      const product = await ProductModel.find().or([
        { title: { $regex: q, $options: "i" } },
        { brand: { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } },
        { genre: { $regex: q, $options: "i" } },
      ]);
      res.send(product);
    } else if (gender) {
      if (gender === "men") {
        const product = await ProductModel.find({ subtitle: "Men" });
        res.send(product);
      } else if (gender === "women") {
        const product = await ProductModel.find({ subtitle: "Women" });
        res.send(product);
      } else {
        const product = await ProductModel.find();
        res.send(product);
      }
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
