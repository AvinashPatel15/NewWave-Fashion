import React from "react";
import { Route, Routes } from "react-router-dom";
import EmailVerify from "../Pages/Email-Verify/EmailVerify";
import Home from "../Pages/HomePage/Home";
import Register from "../Pages/Sign-up/Register";
import Login from "../Pages/Login/Login";
import MenProducts from "../Pages/Product-Pages/Men/MenProducts";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/men-products" element={<MenProducts />} />
    </Routes>
  );
};

export default AllRoutes;
