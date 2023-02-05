import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import homepage1 from "../../Assets/homepage1.jpg";
import Section1Carousel1 from "../../Components/HomePage/Section1Carousel1";
import Section1Carousel2 from "../../Components/HomePage/Section1Carousel2";
import Section2Carousel1 from "../../Components/HomePage/Section2Carousel1";
import Section2Carousel2 from "../../Components/HomePage/Section2Carousel2";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Section 1 Carousel 1 */}
      <Box width={"100%"} marginTop={{ base: 5, md: 10 }}>
        <Section1Carousel1 />
      </Box>
      {/* Section 1 Carousel 2 */}
      <Box width={"100%"} marginTop={{ base: 5, md: 10 }}>
        <Section1Carousel2 />
      </Box>
      {/* Section 2 Image */}
      <Box width={"100%"} marginTop={{ base: 5, md: 10 }}>
        <Image src={homepage1} width={"100%"} height={"auto"} />
      </Box>
      {/* Section 2 Carousel 1 */}
      <Box width={"100%"} marginTop={{ base: 5, md: 10 }}>
        <Section2Carousel1 />
      </Box>
      {/* Section 2 Carousel 2 */}
      <Box width={"100%"} marginTop={{ base: 5, md: 10 }}>
        <Section2Carousel2 />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
