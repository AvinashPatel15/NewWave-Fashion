import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { Box, Image } from "@chakra-ui/react";
import Section2Carousel1Img from "../../Assets/Section2Carousel1Img.jpg";
import Section2Carousel2Img from "../../Assets/Section2Carousel2Img.jpg";
import Section2Carousel3Img from "../../Assets/Section2Carousel3Img.jpg";
import Section2Carousel4Img from "../../Assets/Section2Carousel4Img.jpg";

const Section2Carousel1 = () => {
  return (
    <>
      <Box width={{ base: "95%", lg: "90%" }} margin="auto">
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
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              alt="1"
              src={Section2Carousel1Img}
              width={"100%"}
              height={"auto"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="2"
              src={Section2Carousel2Img}
              width={"100%"}
              height={"auto"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="3"
              src={Section2Carousel3Img}
              width={"100%"}
              height={"auto"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="4"
              src={Section2Carousel4Img}
              width={"100%"}
              height={"auto"}
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default Section2Carousel1;
