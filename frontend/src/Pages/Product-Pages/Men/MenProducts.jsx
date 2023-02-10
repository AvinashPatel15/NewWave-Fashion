import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";

const MenProducts = () => {
  return (
    <>
      <Navbar />
      <Box width={{ base: "95%", lg: "90%" }} margin="auto"></Box>
      <Footer />
    </>
  );
};

export default MenProducts;
