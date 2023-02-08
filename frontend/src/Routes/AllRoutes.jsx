import React from "react";
import { Route, Routes } from "react-router-dom";
import EmailVerify from "../Pages/Email-Verify/EmailVerify";
import Home from "../Pages/HomePage/Home";
import Register from "../Pages/Sign-up/Register";
import Login from "../Pages/Login/Login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
