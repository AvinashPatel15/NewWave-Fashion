import { Box, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import homepage1 from "../../Assets/homepage1.jpg";
import Section1Carousel1 from "../../Components/HomePage/Section1Carousel1";
import Section1Carousel2 from "../../Components/HomePage/Section1Carousel2";
import Section2Carousel1 from "../../Components/HomePage/Section2Carousel1";
import Section2Carousel2 from "../../Components/HomePage/Section2Carousel2";
import Section3 from "../../Components/HomePage/Section3";
import Section4 from "../../Components/HomePage/Section4";
import Section5Carousel1 from "../../Components/HomePage/Section5Carousel1";
import Section6 from "../../Components/HomePage/Section6";
import Section7 from "../../Components/HomePage/Section7";
import Section8 from "../../Components/HomePage/Section8";
import Section9 from "../../Components/HomePage/Section9";
import TopSection from "../../Components/HomePage/TopSection";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../../Redux/Cart/Cart.actions";

const Home = () => {
  // const { carts, isLoading } = useSelector((store) => store.cartReducerData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartData());
  }, []);
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Top Section */}
      <Box width={"100%"} marginTop={{ base: 3, md: 5 }}>
        <TopSection />
      </Box>
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
      {/* Section 3 */}
      <Box width={"100%"} marginTop={{ base: 5, md: 10 }}>
        <Section3 />
      </Box>
      {/* Section 4 */}
      <Box width={"100%"} marginTop={{ base: 5, md: 10 }}>
        <Section4 />
      </Box>
      {/* Section 5 Carousel 1 */}
      <Box width={"100%"} marginTop={{ base: 5, md: 10 }}>
        <Section5Carousel1 />
      </Box>
      {/* Section 6 */}
      <Box width={"100%"} marginTop={{ base: 5, md: 10 }}>
        <Section6 />
      </Box>
      {/* Section 7 */}
      <Box width={"100%"} marginTop={{ base: 5, md: 10 }}>
        <Section7 />
      </Box>
      {/* Section 8 */}
      <Box width={"100%"} marginTop={{ base: 5, md: 10 }}>
        <Section8 />
      </Box>
      {/* Section 9 */}
      <Box width={"100%"} marginTop={{ base: 5, md: 10 }}>
        <Section9 />
      </Box>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
