import {
  Box,
  Flex,
  GridItem,
  Image,
  Text,
  Icon,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductCard = ({ title, brand, color, price, discount, images }) => {
  let discountPrice = (price * discount) / 100;
  let finalPrice = Math.abs(price - discountPrice);

  return (
    <>
      <GridItem borderRadius={5} backgroundColor={"#F7F8F7"}>
        <Box>
          <Link to={"/detail-page"} target="_blank">
            <Box
              width={"100%"}
              height={"300px"}
              overflow={"hidden"}
              borderRadius={5}
            >
              <Image
                src={images[0].url}
                width={"100%"}
                height={"auto"}
                objectFit={"cover"}
              />
            </Box>
          </Link>

          <Box padding={4}>
            <Link to={"/detail-page"} target="_blank">
              <Text fontSize={15} fontWeight={600} lineHeight={1}>
                {title}
              </Text>
            </Link>

            <Flex mt={3} justifyContent={"space-between"} alignItems={"center"}>
              <Text
                px={1}
                border={"1px solid purple"}
                borderRadius={5}
                fontWeight={600}
                color={"purple.600"}
              >
                {brand}
              </Text>

              <Box>
                <Icon viewBox="0 0 200 200" color={color} fontSize={25}>
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
              </Box>
            </Flex>

            <Flex mt={2} gap={3} alignItems={"baseline"}>
              <Text fontSize={25} fontWeight={700}>
                ₹{finalPrice}
              </Text>
              <Text fontSize={20} fontWeight={600}>
                <strike>₹{price}</strike>
              </Text>
              <Text fontSize={20} fontWeight={700} color={"green.600"}>
                {discount}% off
              </Text>
            </Flex>

            <Flex mt={3} justifyContent={"space-between"} alignItems={"center"}>
              <Button
                colorScheme="purple"
                variant="outline"
                leftIcon={<BsCartPlusFill />}
                fontWeight={700}
              >
                Add To Cart
              </Button>
              <Button
                colorScheme="purple"
                variant="outline"
                leftIcon={<AiFillHeart />}
                fontWeight={700}
              >
                Wishlist
              </Button>
            </Flex>
          </Box>
        </Box>
      </GridItem>
    </>
  );
};

export default ProductCard;
