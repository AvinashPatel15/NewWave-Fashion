const jwt = require("jsonwebtoken");
const { UserModel } = require("../Models/User.Model");
require("dotenv").config();

const AdminAuth = (req, res, next) => {
  const token = req.headers.authorization || null;
  /** Checking Token Is There Or Not */
  if (token) {
    /** Verify Our Token With The Help Of jwt.verify */
    jwt.verify(token, process.env.JWTKey, async (err, decoded) => {
      if (err) {
        res.status(401).send({ message: "Please Login First", err });
      } else {
        const userID = decoded.userID;
        let isAdmin = await UserModel.findOne({ _id: userID });
        if (isAdmin.isAdmin) {
          req.userID = userID;
          next();
        } else {
          res.status(401).send({ message: "Only Admin Can Access" });
        }
      }
    });
  } else {
    res.status(401).send({ message: "Please Login First" });
  }
};

module.exports = {
  AdminAuth,
};
