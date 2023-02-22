import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import ProductsImg from "../../Components/Product-Detail-Page/ProductsImg";
import Loader from "../../Components/Loader/Loader";
import { BsCartPlusFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { getLoadertotheCart } from "../../Redux/Cart/Cart.actionTypes";

const DetailPage = () => {
  const { id } = useParams();
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState("");
  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch();

  const toast = useToast();

  const sizeButton = ["S", "M", "L", "XL"];

  let discountPrice = (Products.price * Products.discount) / 100;
  let finalPrice = Math.round(Products.price - discountPrice);

  const buttonInput = (event) => {
    setSize(event.target.value);
    setFlag(true);
  };
  const clearSizeHandler = () => {
    setFlag(false);
    setSize(0);
  };

  const getData = async () => {
    setLoading(true);
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/products/${id}`
      );
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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

  return (
    <>
      <Navbar />
      <Box width={{ base: "95%", lg: "90%" }} margin="auto">
        <Box width={"100%"} marginTop={{ base: 3, md: 5 }}>
          {loading ? (
            <Box
              width={"100%"}
              height={"70vh"}
              margin={"auto"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mt={"50px"}
            >
              <Loader />
            </Box>
          ) : (
            <>
              <Box
                display={"grid"}
                gridTemplateColumns={{
                  base: "repeat(1,1fr)",
                  md: "repeat(2,1fr)",
                }}
                gap={5}
              >
                <Box
                  display={"grid"}
                  gridTemplateColumns={"repeat(1,1fr)"}
                  gridTemplateRows={"auto"}
                  gap={10}
                >
                  <ProductsImg images={Products.images} />
                </Box>

                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={{ base: 1, md: 5 }}
                >
                  <Box>
                    <Button borderRadius={30} fontSize={"xl"}>
                      {Products.subtitle}'s {Products.category}
                    </Button>
                  </Box>

                  <Box
                    border={"1px solid gray"}
                    borderRadius={10}
                    padding={4}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={{ base: 1, md: 2 }}
                  >
                    <Heading as={"h3"} fontWeight={500} fontSize={"xl"}>
                      {Products.title}
                    </Heading>

                    <Text
                      fontSize={"xl"}
                      fontWeight={600}
                      color={"blackAlpha.700"}
                    >
                      {Products.brand}
                    </Text>

                    <Box
                      display={"flex"}
                      justifyContent={"flex-start"}
                      alignItems={"baseline"}
                      gap={3}
                    >
                      <Text fontSize={30} fontWeight={600}>
                        ₹{finalPrice}
                      </Text>
                      <Box fontSize={25} fontWeight={500} color={"red"}>
                        <del> ₹{Products.price}</del>
                      </Box>
                      <Text fontSize={25} fontWeight={600} color={"green"}>
                        {Products.discount}% Off
                      </Text>
                    </Box>

                    <Box>
                      <Badge>Free Delivery</Badge>
                    </Box>
                  </Box>

                  <Box
                    border={"1px solid gray"}
                    borderRadius={10}
                    padding={4}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={{ base: 1, md: 2 }}
                  >
                    <Box
                      display={"flex"}
                      justifyContent={"flex-start"}
                      alignItems={"baseline"}
                      gap={2}
                    >
                      <Text
                        fontSize={"xl"}
                        fontWeight={600}
                        color={"blackAlpha.700"}
                      >
                        Color :
                      </Text>
                      <Text
                        fontSize={"xl"}
                        fontWeight={500}
                        color={Products.color}
                      >
                        {Products.color}
                      </Text>
                    </Box>

                    <Box>
                      <Box>
                        <Heading
                          as={"h3"}
                          fontWeight={600}
                          fontSize={"xl"}
                          mb={2}
                        >
                          Select Size
                        </Heading>

                        <ButtonGroup onClick={buttonInput}>
                          {sizeButton.map((el) => (
                            <Button
                              value={el}
                              padding="5px 10px"
                              border={"1px solid gray"}
                              borderRadius={"50%"}
                              variant="outline"
                            >
                              {el}
                            </Button>
                          ))}
                        </ButtonGroup>
                      </Box>

                      <Box mt={3} fontSize={"small"}>
                        {flag ? (
                          <Box
                            display={"flex"}
                            flexDirection={"column"}
                            gap={1}
                          >
                            <Text fontSize={20}>
                              You Have selected size {size}
                            </Text>
                            <Box>
                              <Badge
                                fontSize={16}
                                borderRadius={10}
                                fontWeight={500}
                                onClick={clearSizeHandler}
                                cursor={"pointer"}
                              >
                                Clear
                              </Badge>
                            </Box>
                          </Box>
                        ) : (
                          <Text fontSize={20}>Please Select Prefered Size</Text>
                        )}
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    display={"flex"}
                    flexDirection={{ base: "column", md: "row" }}
                    gap={5}
                    mt={4}
                    justifyContent={"center"}
                  >
                    <Button
                      colorScheme="purple"
                      variant="outline"
                      leftIcon={<BsCartPlusFill />}
                      fontWeight={700}
                      fontSize={20}
                      padding={5}
                      onClick={() => handleAddToCart(Products._id)}
                    >
                      Add To Cart
                    </Button>
                    <Button
                      colorScheme="purple"
                      variant="outline"
                      leftIcon={<AiFillHeart />}
                      fontWeight={700}
                      fontSize={20}
                      padding={5}
                      onClick={() => handleAddToWishlist(Products._id)}
                    >
                      Wishlist
                    </Button>
                  </Box>

                  <Text
                    fontSize={20}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    2-3 business days delivery
                  </Text>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default DetailPage;
