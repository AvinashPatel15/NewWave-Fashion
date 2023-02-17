import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const DetailPage = () => {
  return (
    <>
      <Navbar />
      <Box width={{ base: "95%", lg: "90%" }} margin="auto">
        <Box width={"100%"} marginTop={{ base: 3, md: 5 }}>
          Single Product Page
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default DetailPage;
