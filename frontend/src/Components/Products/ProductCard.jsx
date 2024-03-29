import {
  Box,
  Flex,
  GridItem,
  Image,
  Text,
  Icon,
  Button,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getLoadertotheCart } from "../../Redux/Cart/Cart.actionTypes";

const ProductCard = ({ _id, title, brand, color, price, discount, images }) => {
  let discountPrice = (price * discount) / 100;
  let finalPrice = Math.round(price - discountPrice);
  const dispatch = useDispatch();

  const toast = useToast();

  const handleAddToCart = async (id) => {
    let token = JSON.parse(localStorage.getItem("newwave")) || false;
    try {
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/carts/post/${id}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            authorization: token.token || false,
          },
        }
      );
      let resData = await res.json();
      if (res.status >= 400) {
        toast({
          position: "top",
          description: resData.message,
          status: "error",
          duration: 2000,
          isClosable: false,
        });
      } else {
        toast({
          position: "top",
          description: resData.message,
          status: "success",
          duration: 2000,
          isClosable: false,
        });
      }
      dispatch({ type: getLoadertotheCart });
    } catch (error) {
      console.log(error);
      toast({
        position: "top",
        description: error.message,
        status: "error",
        duration: 2000,
        isClosable: false,
      });
    }
  };

  const handleAddToWishlist = async (id) => {
    let token = JSON.parse(localStorage.getItem("newwave")) || false;
    try {
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/wishlists/post/${id}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            authorization: token.token || false,
          },
        }
      );
      let resData = await res.json();
      if (res.status >= 400) {
        toast({
          position: "top",
          description: resData.message,
          status: "error",
          duration: 2000,
          isClosable: false,
        });
      } else {
        toast({
          position: "top",
          description: resData.message,
          status: "success",
          duration: 2000,
          isClosable: false,
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        position: "top",
        description: error.message,
        status: "error",
        duration: 2000,
        isClosable: false,
      });
    }
  };

  return (
    <>
      <GridItem
        borderRadius={5}
        backgroundColor={"#F7F8F7"}
        border={"1px solid black"}
        _hover={{
          boxShadow:
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 3px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
        }}
        transition={"all 0.5s"}
      >
        <Box>
          <Link to={`/detail-page/${_id}`}>
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
            <Link to={`/detail-page/${_id}`}>
              <Text fontSize={15} fontWeight={600} lineHeight={1}>
                {title.slice(0, 35) + "..."}
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
              <Box fontSize={20} fontWeight={600}>
                <del>₹{price}</del>
              </Box>
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
                onClick={() => handleAddToCart(_id)}
              >
                Add To Cart
              </Button>
              <Button
                colorScheme="purple"
                variant="outline"
                leftIcon={<AiFillHeart />}
                fontWeight={700}
                onClick={() => handleAddToWishlist(_id)}
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
