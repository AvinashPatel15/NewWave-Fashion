import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillShopping } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { GiProfit } from "react-icons/gi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersData } from "../../Redux/Admin/AllOrders/AllOrders.action";
import Loader from "../Loader/Loader";
import OrderChart from "./OrderChart";

const AdminDashboard = () => {
  const { allorders, isLoading } = useSelector(
    (store) => store.allOrdersReducerData
  );
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  const getProductsData = async () => {
    let token = JSON.parse(localStorage.getItem("newwave")) || false;
    try {
      let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/products`, {
        headers: {
          authorization: token.token || false,
        },
      });
      let data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUsersData = async () => {
    let token = JSON.parse(localStorage.getItem("newwave")) || false;
    try {
      let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, {
        headers: {
          authorization: token.token || false,
        },
      });
      let data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getAllOrdersData());
    getProductsData();
    getUsersData();
  }, []);

  let AllOrdersProfit = 0;

  for (let i = 0; i < allorders.length; i++) {
    AllOrdersProfit = AllOrdersProfit + allorders[i].productID.price;
  }

  return (
    <>
      <Box padding={5}>
        <Box
          width={"100%"}
          margin={"auto"}
          justifyContent={"center"}
          alignContent={"center"}
          mb={4}
        >
          <Text
            fontSize={35}
            color={"black"}
            fontWeight={600}
            textAlign={"center"}
          >
            Dashboard
          </Text>
        </Box>
        {isLoading ? (
          <>
            {" "}
            <Box width={"100%"} height={"60vh"} margin={"auto"} mt={"50px"}>
              <Loader />
            </Box>{" "}
          </>
        ) : (
          <>
            <Box>
              <Box>
                <Box
                  width={{ base: "80%", md: "50%" }}
                  margin={"auto"}
                  display={"grid"}
                  gridTemplateColumns={{
                    base: "repeat(1,1fr)",
                    md: "repeat(2,1fr)",
                  }}
                  gridTemplateRows={"auto"}
                  gap={10}
                  marginBottom={5}
                >
                  <Box
                    display={"flex"}
                    gap={5}
                    justifyContent={"center"}
                    alignItems={"center"}
                    padding={3}
                    cursor={"pointer"}
                    borderRadius={10}
                    boxShadow={
                      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;"
                    }
                  >
                    <Box>
                      <Text
                        fontSize={20}
                        fontWeight={500}
                        color={"blackAlpha.800"}
                      >
                        Total Users
                      </Text>
                      <Text
                        fontSize={20}
                        fontWeight={500}
                        color={"blackAlpha.700"}
                      >
                        {parseFloat(users.length).toLocaleString()}
                      </Text>
                    </Box>
                    <Box>
                      <FaUserFriends color="#0ec5fb" size={100} />
                    </Box>
                  </Box>

                  <Box
                    display={"flex"}
                    gap={5}
                    justifyContent={"center"}
                    alignItems={"center"}
                    padding={3}
                    cursor={"pointer"}
                    borderRadius={10}
                    boxShadow={
                      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;"
                    }
                  >
                    <Box>
                      <Text
                        fontSize={20}
                        fontWeight={500}
                        color={"blackAlpha.800"}
                      >
                        Total Profit
                      </Text>
                      <Text
                        fontSize={20}
                        fontWeight={500}
                        color={"blackAlpha.700"}
                      >
                        ₹ {parseFloat(AllOrdersProfit).toLocaleString()}.00
                      </Text>
                    </Box>
                    <Box>
                      <GiProfit color="#68d463" size={100} />
                    </Box>
                  </Box>

                  <Box
                    display={"flex"}
                    gap={5}
                    justifyContent={"center"}
                    alignItems={"center"}
                    padding={3}
                    cursor={"pointer"}
                    borderRadius={10}
                    boxShadow={
                      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;"
                    }
                  >
                    <Box>
                      <Text
                        fontSize={20}
                        fontWeight={500}
                        color={"blackAlpha.800"}
                      >
                        Total Orders
                      </Text>
                      <Text
                        fontSize={20}
                        fontWeight={500}
                        color={"blackAlpha.700"}
                      >
                        {parseFloat(allorders.length).toLocaleString()}
                      </Text>
                    </Box>
                    <Box>
                      <AiFillShopping color="#ef95f1" size={100} />
                    </Box>
                  </Box>

                  <Box
                    display={"flex"}
                    gap={5}
                    justifyContent={"center"}
                    alignItems={"center"}
                    padding={3}
                    cursor={"pointer"}
                    borderRadius={10}
                    boxShadow={
                      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;"
                    }
                  >
                    <Box>
                      <Text
                        fontSize={20}
                        fontWeight={500}
                        color={"blackAlpha.800"}
                      >
                        Total Products
                      </Text>
                      <Text
                        fontSize={20}
                        fontWeight={500}
                        color={"blackAlpha.700"}
                      >
                        {parseFloat(products.length).toLocaleString()}
                      </Text>
                    </Box>
                    <Box>
                      <MdProductionQuantityLimits color="#f8c250" size={100} />
                    </Box>
                  </Box>
                </Box>

                <Box
                  width={"100%"}
                  margin={"auto"}
                  justifyContent={"center"}
                  alignContent={"center"}
                  mb={4}
                >
                  <Text
                    fontSize={30}
                    color={"black"}
                    fontWeight={600}
                    textAlign={"center"}
                  >
                    Orders Chart
                  </Text>
                </Box>
                <Box>
                  <OrderChart />
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default AdminDashboard;
