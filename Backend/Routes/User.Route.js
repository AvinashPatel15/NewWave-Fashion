const express = require("express");
require("dotenv").config();
const { body } = require("express-validator");
const { AdminAuth } = require("../Middlewares/AdminAuth.Middleware");
const {
  registerUser,
} = require("../Controllers/User-Controllers/RegisterUser.Controller");
const {
  verifyEmail,
} = require("../Controllers/User-Controllers/VerifyEmail.Controller");
const {
  loginUser,
} = require("../Controllers/User-Controllers/LoginUser.Controller");
const {
  getUsers,
} = require("../Controllers/User-Controllers/GetUsers.Controller");
const {
  deleteUser,
} = require("../Controllers/User-Controllers/DeleteUser.Controller");

const userRouter = express.Router();

/** For New User */

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
  registerUser
);

/** For Verify Email With The Link */

userRouter.get("/:id/verify/:token", verifyEmail);

/** For Login */

userRouter.post(
  "/login",
  /** Checking Required Fields */
  [
    body("email", "Enter A Valid Email").isEmail().not(),
    body("password", "Enter A Correct Password").not().isEmpty(),
  ],
  loginUser
);

/** For Getting The User Data And This Route Is Only Work For Admin Other People's Can't Use This Route */

userRouter.get("/", AdminAuth, getUsers);

/** For Deleting The User Data And This Route Is Only Work For Admin Other People's Can't Use This Route */

userRouter.delete("/delete/:id", AdminAuth, deleteUser);

module.exports = {
  userRouter,
};
