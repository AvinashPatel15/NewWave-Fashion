import { Accordion, Box, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeleteCartItemButton from "../../Components/Cart/DeleteCartItemButton";
import Footer from "../../Components/Footer/Footer";
import Loader from "../../Components/Loader/Loader";
import Navbar from "../../Components/Navbar/Navbar";
import OrderProductCard from "../../Components/Orders/OrderProductCard";
import { getOrdersData } from "../../Redux/Orders/Orders.action";

const Orders = () => {
  const { orders, isLoading } = useSelector((store) => store.ordersReducerData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersData());
  }, []);

  console.log(orders);
  return (
    <>
      <Navbar />

      <Box width={{ base: "95%", lg: "50%" }} margin={"auto"}>
        <Box width={"100%"} margin={"auto"} marginTop={{ base: 7, md: 10 }}>
          {isLoading ? (
            <Box width={"100%"} height={"60vh"} margin={"auto"} mt={"50px"}>
              <Loader />
            </Box>
          ) : (
            <>
              {orders.length === undefined ? (
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={3}
                  justifyContent={"center"}
                  alignItems={"center"}
                  height={"80vh"}
                >
                  <Image
                    src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/max/no-order.svg"
                    width={"263px"}
                    height={"250px"}
                  />
                  <Text fontSize={25} fontWeight={600}>
                    No Orders Found!!
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
                      My Orders
                    </Text>

                    <Text fontSize={23} color={"blackAlpha.700"}>
                      {orders.length} Items
                    </Text>
                  </Box>

                  <Accordion
                    allowMultiple
                    display={"flex"}
                    flexDirection={"column"}
                    gap={5}
                    marginBottom={20}
                  >
                    {orders &&
                      orders.map((el) => (
                        <OrderProductCard key={el._id} {...el} />
                      ))}
                  </Accordion>
                </>
              )}
            </>
          )}
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Orders;
