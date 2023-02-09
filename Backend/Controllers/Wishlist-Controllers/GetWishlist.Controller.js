const { WishlistModel } = require("../../Models/Wishlist.Model");

const getWishlist = async (req, res) => {
  const userID = req.userID;
  try {
    const wishlist = await WishlistModel.find({ userID }).populate([
      "productID",
    ]);
    if (wishlist.length > 0) {
      res.send(wishlist);
    } else {
      res.status(401).send({ message: "No item added to the wishlist" });
    }
  } catch (error) {
    res
      .status(401)
      .send({ message: "Something went wrong in wishlist", error });
  }
};

module.exports = {
  getWishlist,
};
