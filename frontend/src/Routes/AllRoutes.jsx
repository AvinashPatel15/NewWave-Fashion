import React from "react";
import { Route, Routes } from "react-router-dom";
import EmailVerify from "../Pages/Email-Verify/EmailVerify";
import Home from "../Pages/HomePage/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
    </Routes>
  );
};

export default AllRoutes;
