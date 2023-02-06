import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Box, Image } from "@chakra-ui/react";
import Section2Carousel2Img1 from "../../Assets/Section2Carousel2Img1.jpg";
import Section2Carousel2Img2 from "../../Assets/Section2Carousel2Img2.jpg";

const Section2Carousel2 = () => {
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
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              alt="1"
              src={Section2Carousel2Img1}
              width={"100%"}
              height={"auto"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="2"
              src={Section2Carousel2Img2}
              width={"100%"}
              height={"auto"}
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default Section2Carousel2;
