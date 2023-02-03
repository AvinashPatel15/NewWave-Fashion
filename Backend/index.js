const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./Configs/db");
const { userRouter } = require("./Routes/User.Route");
const { productRouter } = require("./Routes/Product.Route");
const { cartRouter } = require("./Routes/Cart.Route");
const { purchaseHistoryRouter } = require("./Routes/PuchaseHistory.Route");
const { wishlistRouter } = require("./Routes/Wishlist.Route");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

/** Welcome Page */
app.get("/", (req, res) => {
  res.send("Welcome To NewWave Fashion Server");
});

/** User Router */
app.use("/users", userRouter);

/** Product Router */
app.use("/products", productRouter);

/** Cart Router */
app.use("/carts", cartRouter);

/** PurchaseHistory Router */
app.use("/purchasehistory", purchaseHistoryRouter);

/** PurchaseHistory Router */
app.use("/wishlists", wishlistRouter);

/** For Listening Port */
app.listen(port, async () => {
  connection();
  console.log(`Server listening on ${port}`);
});
