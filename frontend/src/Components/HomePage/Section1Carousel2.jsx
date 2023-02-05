import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { Box, Image } from "@chakra-ui/react";

const Section1Carousel2 = () => {
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
              src="https://assets.ajio.com/cms/AJIO/WEB/IDBI-1440x128-23.jpg"
              width={"100%"}
              height={"auto"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="2"
              src="https://assets.ajio.com/cms/AJIO/WEB/citi-1440x128-23.jpg"
              width={"100%"}
              height={"auto"}
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default Section1Carousel2;
