import React, { useState } from "react";
import { Box, Image } from "@chakra-ui/react";

const ProductsImg = ({ images }) => {
  let photo = images && images[0].url;

  const [Picture, setPicture] = useState(photo);

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={{ base: "column-reverse", md: "row" }}
        gap={5}
      >
        <Box
          width={{ base: "100%", md: "20.5%" }}
          display={"grid"}
          gridTemplateColumns={{ base: "repeat(4,1fr)", md: "repeat(1,1fr)" }}
          gridTemplateRows={"auto"}
          gap={2}
        >
          {images &&
            images.map((el) => (
              <Box
                overflow={"hidden"}
                cursor={"pointer"}
                borderRadius={5}
                key={el._id}
              >
                <Image
                  onMouseOver={() => setPicture(el.url)}
                  src={el.url}
                  width={"100%"}
                  height={"auto"}
                  objectFit={"contain"}
                  borderRadius={5}
                  transition={"0.3s all ease-in-out"}
                  _hover={{
                    transform: "scale(1.05)",
                    transformOrigin: "center",
                  }}
                />
              </Box>
            ))}
        </Box>
        <Box
          width={{ base: "100%", md: "85%" }}
          overflow={"hidden"}
          borderRadius={5}
        >
          <Image
            src={Picture}
            width={"100%"}
            height={"auto"}
            objectFit={"contain"}
            borderRadius={5}
            transition={"0.3s all ease-in-out"}
            _hover={{
              transform: "scale(1.05)",
              transformOrigin: "center",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default ProductsImg;
