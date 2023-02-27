const express = require("express");
const {
  getAllPurchaseHistory,
} = require("../Controllers/PurchaseHistory-Controllers/GetAllPurchaseHistory.Controller");
const {
  getPurchaseHistory,
} = require("../Controllers/PurchaseHistory-Controllers/GetPurchaseHistory.Controller");
const {
  postPurchaseHistory,
} = require("../Controllers/PurchaseHistory-Controllers/PostPurchaseHistory.Controller");
const {
  updatePurchaseHistory,
} = require("../Controllers/PurchaseHistory-Controllers/UpdatePurchaseHistory");
const { AdminAuth } = require("../Middlewares/AdminAuth.Middleware");
const { UserAuth } = require("../Middlewares/UserAuth.Middleware");

const purchaseHistoryRouter = express.Router();

/** For Getting All Orders History Whose User Is Logged In */

purchaseHistoryRouter.get("/", UserAuth, getPurchaseHistory);

/** For Posting Data From Cart User Who Logged In */

purchaseHistoryRouter.post("/post", UserAuth, postPurchaseHistory);

/** For Getting All Orders History And This Is Only Work For Admin */

purchaseHistoryRouter.get("/all-orders", AdminAuth, getAllPurchaseHistory);

/** For Update The Orders Of Customer And This Is Only Work For Admin */

purchaseHistoryRouter.put("update/:id", AdminAuth, updatePurchaseHistory);

module.exports = {
  purchaseHistoryRouter,
};
