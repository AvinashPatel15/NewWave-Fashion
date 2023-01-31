const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../Models/User.Model");
const { UserAuth } = require("../Middlewares/UserAuth.Middleware");
const { body, validationResult } = require("express-validator");

const userRouter = express.Router();

/* For New User */

userRouter.post(
  "/register",
  [
    body("first_name", "Please Enter Your First Name").not().isEmpty(),
    body("last_name", "Please Enter Your Last Name").not().isEmpty(),
    body("age", "Please Enter Your Age").not().isEmpty(),
    body("gender", "Please Verify Your Gender").not().isEmpty(),
    body("phone", "Please Enter Valid Phone Number").isLength({
      min: 10,
      max: 10,
    }),
    body("pincode", "Enter Correct City Pincode").isLength({
      min: 6,
      max: 6,
    }),
    body("address", "Please Enter Your Address").not().isEmpty(),
    body("city", "Please Enter Your City Name").not().isEmpty(),
    body("state", "Please Enter Your State Name").not().isEmpty(),
    body("email", "Please Enter A Valid Email Address").isEmail(),
    body("password", "Password Must Be 8 Characters").isLength({ min: 8 }),
  ],
  async (req, res) => {
    try {
      /* Checking All The Fields Are Validate Or Not */
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).json({ message: errors.array()[0].msg });
      }
      const {
        first_name,
        last_name,
        age,
        gender,
        phone,
        pincode,
        address,
        city,
        state,
        email,
        password,
        isUser,
        isAdmin,
        isVerified,
      } = req.body;

      /* Validate User */
      let ValidatorUser = await UserModel.findOne({ email: email });
      if (ValidatorUser) {
        res.status(401).send({
          message: "Please Enter Another Email This Email Is Already Exist!",
        });
      } else {
        /* Protect The User Password With The Help Of Bcrypt It Convert Your Password To Hash Password Which Is Stored In Our DataBase */
        bcrypt.hash(password, 8, async (err, hash_password) => {
          if (err) {
            console.log(err);
          } else {
            const user = new UserModel({
              first_name,
              last_name,
              age,
              gender,
              phone,
              pincode,
              address,
              city,
              state,
              email,
              password: hash_password,
              isUser,
              isAdmin,
              isVerified,
            });
            ValidatorUser = await user.save();
            res.send({ meassage: "User Register Successfully!" });
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
);

/** For Login */

userRouter.post(
  "/login",
  /* Checking Required Fields */
  [
    body("email", "Enter A Valid Email").isEmail().not(),
    body("password", "Enter A Correct Password").not().isEmpty(),
  ],
  async (req, res) => {
    const { email, password } = req.body;
    try {
      /* Checking Required Fields */
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send({ message: errors.array()[0].msg });
      }
      /* We Are Checking Your Mail Is In DataBase Or Not */
      const user = await UserModel.findOne({ email });
      if (user) {
        /* Compare My Hash Password With The Help Of Bcrypt.compare */
        bcrypt.compare(password, user.password, async (err, result) => {
          if (result) {
            /** Generate The Token With Help Of JWT It Gives You One Token When Ever User Is Login */
            const token = jwt.sign({ userID: user._id }, process.env.JWTKey);

            res.send({
              message: "Login Successfully!",
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email,
              token: token,
              isUser: user.isUser,
              isAdmin: user.isAdmin,
            });
          } else {
            res
              .status(401)
              .send({ message: "Your Email And Password Is Wrong", err });
          }
        });
      } else {
        res.status(401).send({ message: "Email Not Found" });
      }
    } catch (error) {
      console.log(error);
    }
  }
);

/** For Getting The User Data And This Route Is Only Work For Admin Other People's Can't Use This Route */

userRouter.get("/", UserAuth, async (req, res) => {
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
});

/* For Deleting The User Data And This Route Is Only Work For Admin Other People's Can't Use This Route */

userRouter.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    await UserModel.findByIdAndDelete({ _id: ID });
    res.send({ message: `Deleted The Data Whose ID Is ${ID}` });
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  userRouter,
};
