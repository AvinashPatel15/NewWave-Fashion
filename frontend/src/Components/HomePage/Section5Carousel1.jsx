import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Section5Carousel1Img1 from "../../Assets/Section5Carousel1Img1.png";
import Section5Carousel1Img2 from "../../Assets/Section5Carousel1Img2.png";

const Section5Carousel1 = () => {
  return (
    <>
      <Box width={{ base: "95%", lg: "90%" }} margin="auto">
        <Box width={"100%"}>
          <Heading
            as={"h2"}
            fontWeight={600}
            fontFamily={"sans-serif"}
            fontSize={"24px"}
            marginTop={{ base: "25px", md: "35px" }}
          >
            In The Spotlight
            <Text
              width={"48px"}
              pt={"4px"}
              borderBottom={"4px solid #7E80E6"}
            ></Text>
          </Heading>
          <Box marginTop={{ base: "15px", md: "20px" }}>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  alt="1"
                  src={Section5Carousel1Img1}
                  width={"100%"}
                  height={"auto"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt="2"
                  src={Section5Carousel1Img2}
                  width={"100%"}
                  height={"auto"}
                />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Section5Carousel1;
