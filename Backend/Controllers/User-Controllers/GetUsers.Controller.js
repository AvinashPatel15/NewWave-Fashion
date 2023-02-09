const { UserModel } = require("../../Models/User.Model");

const getUsers = async (req, res) => {
  try {
    let { q } = req.query;
    let user;
    if (q) {
      user = await UserModel.find({
        $or: [
          { first_name: { $regex: q, $options: "i" } },
          { email: { $regex: q, $options: "i" } },
        ],
      });
    } else {
      user = await UserModel.find();
    }

    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
};
