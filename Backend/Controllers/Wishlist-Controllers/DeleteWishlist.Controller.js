const { WishlistModel } = require("../../Models/Wishlist.Model");

const deleteWishlist = async (req, res) => {
  const id = req.params.id;
  try {
    await WishlistModel.findByIdAndDelete({ _id: id });
    res.send({ message: "Product Removed From The Wishlist Successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Something Went Wrong In The Cart Remove", error });
  }
};

module.exports = {
  deleteWishlist,
};
