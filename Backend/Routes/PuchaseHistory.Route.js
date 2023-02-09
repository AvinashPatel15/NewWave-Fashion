const express = require("express");
const {
  getPurchaseHistory,
} = require("../Controllers/PurchaseHistory-Controllers/GetPurchaseHistory.Controller");
const {
  postPurchaseHistory,
} = require("../Controllers/PurchaseHistory-Controllers/PostPurchaseHistory.Controller");
const { UserAuth } = require("../Middlewares/UserAuth.Middleware");

const purchaseHistoryRouter = express.Router();

/** For Getting All Orders History Whose User Is Logged In */

purchaseHistoryRouter.get("/", UserAuth, getPurchaseHistory);

/** For Posting Data From Cart User Who Logged In */

purchaseHistoryRouter.post("/post", UserAuth, postPurchaseHistory);

module.exports = {
  purchaseHistoryRouter,
};
