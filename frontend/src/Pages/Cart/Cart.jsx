import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartPrice from "../../Components/Cart/CartPrice";
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

  let DiscountPrice = 0;
  for (let i = 0; i < carts.length; i++) {
    let CartPrice = 0;
    CartPrice =
      CartPrice +
      (carts[i].productID.price * carts[i].productID.discount) / 100;
    DiscountPrice =
      DiscountPrice +
      Math.abs(carts[i].productID.price - CartPrice) * carts[i].productCOUNT;
  }

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
                    display={"flex"}
                    flexDirection={{ base: "column", lg: "row" }}
                    gap={5}
                  >
                    <Box display={"flex"} flexDirection={"column"} gap={5}>
                      {carts &&
                        carts.map((el) => (
                          <CartProductCard key={el._id} {...el} />
                        ))}
                    </Box>

                    <Box
                      border={"1px solid grey"}
                      borderRadius={10}
                      width={{ base: "100%", lg: "350px" }}
                      position={"sticky"}
                      top={{ md: 20 }}
                    >
                      <CartPrice totalPrice={Math.round(DiscountPrice)} />
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
