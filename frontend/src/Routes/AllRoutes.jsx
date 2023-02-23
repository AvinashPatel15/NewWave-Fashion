import React from "react";
import { Route, Routes } from "react-router-dom";
import EmailVerify from "../Pages/Email-Verify/EmailVerify";
import Home from "../Pages/HomePage/Home";
import Register from "../Pages/Sign-up/Register";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Product-Page/Products";
import DetailPage from "../Pages/Product-Page/DetailPage";
import Cart from "../Pages/Cart/Cart";
import Error404main from "../Components/404-Error/Error404main";
import PrivateRoute from "./PrivateRoute";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Orders from "../Pages/Orders/Orders";
import Checkout from "../Pages/Checkout-Page/Checkout";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="/detail-Page/:id" element={<DetailPage />} />

      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />

      <Route
        path="/wishlist"
        element={
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        }
      />

      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Error404main />} />
    </Routes>
  );
};

export default AllRoutes;
