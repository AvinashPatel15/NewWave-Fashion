import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartProductCard from "../../Components/Cart/CartProductCard";
import DeleteCartItemButton from "../../Components/Cart/DeleteCartItemButton";
import Loader from "../../Components/Loader/Loader";
import Navbar from "../../Components/Navbar/Navbar";
import { getCartData } from "../../Redux/Cart/Cart.actions";

const Cart = () => {
  const { carts, isLoading } = useSelector((store) => store.cartReducerData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartData());
  }, []);

  let cartPrice = 0;
  for (let i = 0; i < carts.length; i++) {
    cartPrice = cartPrice + carts[i].productID.price * carts[i].productCOUNT;
  }

  let cartDiscount = 0;
  for (let i = 0; i < carts.length; i++) {
    cartDiscount =
      cartDiscount + carts[i].productID.discount * carts[i].productCOUNT;
  }

  let cartDiscountPrice = (cartPrice * cartDiscount) / 100;
  let cartFinalPrice = Math.round(cartPrice - cartDiscountPrice);

  return (
    <>
      <Navbar />
      <Box width={{ base: "95%", lg: "70%" }} margin={"auto"}>
        <Box width={"100%"} marginTop={{ base: 7, md: 10 }}>
          {isLoading ? (
            <Box width={"100%"} height={"60vh"} margin={"auto"} mt={"50px"}>
              <Loader />
            </Box>
          ) : (
            <>
              {carts.length === undefined ? (
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={3}
                  justifyContent={"center"}
                  alignItems={"center"}
                  height={"50vh"}
                >
                  <Text fontSize={25} fontWeight={600}>
                    No Items In The Cart
                  </Text>
                  <Link to={"/"}>
                    {/* <Button colorScheme="purple" variant="outline">
                      Back To Home
                    </Button> */}
                    <DeleteCartItemButton value={"Back To Home"} />
                  </Link>
                </Box>
              ) : (
                <>
                  <Box
                    display={"flex"}
                    gap={3}
                    marginBottom={{ base: 2, md: 5 }}
                  >
                    <Text
                      fontSize={23}
                      fontWeight={500}
                      paddingRight={4}
                      borderRight={"3px solid black"}
                    >
                      Cart
                    </Text>

                    <Text fontSize={23} color={"blackAlpha.700"}>
                      {carts.length} Items
                    </Text>
                  </Box>

                  <Box
                    border={"1px solid red"}
                    display={"flex"}
                    flexDirection={{ base: "column", md: "row" }}
                    gap={5}
                  >
                    <Box display={"flex"} flexDirection={"column"} gap={5}>
                      {carts &&
                        carts.map((el) => (
                          <CartProductCard key={el._id} {...el} />
                        ))}
                    </Box>

                    <Box
                      border={"1px solid black"}
                      height={"200px"}
                      width={"400px"}
                      position={"sticky"}
                      top={{ md: 20 }}
                    >
                      {Math.abs(cartFinalPrice)}
                    </Box>
                  </Box>
                </>
              )}
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Cart;
