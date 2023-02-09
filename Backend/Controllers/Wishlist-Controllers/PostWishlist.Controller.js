const { WishlistModel } = require("../../Models/Wishlist.Model");

const postWishlist = async (req, res) => {
  const userID = req.userID;
  const productID = req.params.productID;
  try {
    let isProduct = await WishlistModel.findOne({ productID, userID });
    if (isProduct) {
      res.status(401).send({ message: "This Item Is Already In Wishlist!" });
    } else {
      await WishlistModel.create({ productID, userID });
      res.send({ message: "Item Added To The Wishlist Successfully" });
    }
  } catch (error) {
    res
      .status(401)
      .send({ message: "Something Went Wrong In The Wishlist", error });
  }
};

module.exports = {
  postWishlist,
};
