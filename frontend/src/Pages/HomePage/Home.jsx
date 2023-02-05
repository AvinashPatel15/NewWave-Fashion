import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../../Components/Footer/Footer";
import Section1Carousel from "../../Components/HomePage/Section1Carousel";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box width={"100%"} marginTop={{ base: 5, lg: 10 }}>
        <Section1Carousel />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
