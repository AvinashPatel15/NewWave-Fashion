const { UserModel } = require("../../Models/User.Model");

const deleteUser = async (req, res) => {
  const ID = req.params.id;
  try {
    await UserModel.findByIdAndDelete({ _id: ID });
    res.send({ message: `Deleted The Data Whose ID Is ${ID}` });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  deleteUser,
};
