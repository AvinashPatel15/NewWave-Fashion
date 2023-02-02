import React from "react";
import { Route, Routes } from "react-router-dom";
import EmailVerify from "../Components/Email-Verify/EmailVerify";
import Home from "../Components/HomePage/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
    </Routes>
  );
};

export default AllRoutes;
