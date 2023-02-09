const { TokenModel } = require("../../Models/Token.Model");
const { UserModel } = require("../../Models/User.Model");

const verifyEmail = async (req, res) => {
  try {
    const user = await UserModel.findOne({ _id: req.params.id });
    if (!user) return res.status(401).send({ message: "Invalid Link" });

    const token = await TokenModel.findOne({
      userID: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(401).send({ message: "Invalid Link" });

    await UserModel.findByIdAndUpdate({ _id: user._id }, { isVerified: true });
    await TokenModel.remove();

    res.send({ message: "Email Verified Successfully" });
  } catch (error) {
    console.log({ message: "Internal Server Error", error });
  }
};

module.exports = {
  verifyEmail,
};
