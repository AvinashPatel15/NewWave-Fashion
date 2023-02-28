import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Image,
  Text,
  Icon,
  Select,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllOrderProductCard = ({
  productID,
  productCOUNT,
  orderStatus,
  number,
  address,
  pincode,
  city,
  state,
  country,
  createdAt,
  first_name,
  last_name,
  _id,
  flag,
  setFlag,
}) => {
  const [loading, setLoading] = useState(false);

  let discountPrice = (productID.price * productID.discount) / 100;
  let finalPrice = Math.round(productID.price - discountPrice);
  let quntityPrice = finalPrice * productCOUNT;

  const handleUpdateOrderStatus = async (e, _id) => {
    setLoading(true);
    const input = {
      orderStatus: e.target.value,
    };
    let token = JSON.parse(localStorage.getItem("newwave")) || false;
    try {
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/purchasehistory/update/${_id}`,
        {
          method: "PATCH",
          headers: {
            authorization: token.token || false,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(input),
        }
      );
      let result = await res.json();
      console.log(result);
      setFlag(!flag);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AccordionItem>
        <Box
          paddingX={4}
          paddingY={1}
          border={"1px solid black"}
          width={"350px"}
          marginY={5}
        >
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={2}
          >
            <Text fontSize={20} fontWeight={500}>
              Order ID
            </Text>
            <Text fontSize={22} fontWeight={700} marginTop={-1}>
              :
            </Text>
            <Text fontSize={16} fontWeight={400}>
              {_id}
            </Text>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={2}
          >
            <Text fontSize={20} fontWeight={500}>
              User ID
            </Text>
            <Text fontSize={22} fontWeight={700} marginTop={-1}>
              :
            </Text>
            <Text fontSize={16} fontWeight={400}>
              {productID._id}
            </Text>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={2}
          >
            <Text fontSize={20} fontWeight={500}>
              User Name
            </Text>
            <Text fontSize={22} fontWeight={700} marginTop={-1}>
              :
            </Text>
            <Text fontSize={17} fontWeight={500}>
              {first_name + " " + last_name}
            </Text>
          </Box>
        </Box>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            <Box
              display={"flex"}
              gap={8}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <Box width={"100px"} overflow={"hidden"}>
                <Link to={`/detail-page/${productID._id}`}>
                  <Image
                    src={productID.images[0].url}
                    width={"100%"}
                    height={"auto"}
                    objectFit={"cover"}
                    objectPosition={"center"}
                    borderRadius={10}
                    border={"3px solid black"}
                    transition={"0.3s all ease-in-out"}
                    _hover={{
                      transform: "scale(1.05)",
                      transformOrigin: "center",
                    }}
                  />
                </Link>
              </Box>

              <Box>
                <Text fontSize={17} fontWeight={500} color={"blackAlpha.700"}>
                  {productID.brand}
                </Text>

                <Link to={`/detail-page/${productID._id}`}>
                  <Text fontSize={17} fontWeight={500} color={"blackAlpha.700"}>
                    {productID.title.slice(0, 25) + ".."}
                  </Text>
                </Link>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"left"}
                  alignItems={"baseline"}
                >
                  <Text fontSize={20} fontWeight={600} color={"blackAlpha.800"}>
                    ₹ {parseFloat(finalPrice).toLocaleString()}.00
                  </Text>
                  <Box
                    display={"flex"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    gap={2}
                  >
                    <Icon
                      viewBox="0 0 200 200"
                      color={
                        orderStatus === "Delivered" ? "green.500" : "red.500"
                      }
                    >
                      <path
                        fill="currentColor"
                        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                      />
                    </Icon>
                    <Text
                      fontSize={17}
                      fontWeight={600}
                      color={"blackAlpha.800"}
                    >
                      {orderStatus}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <Text fontWeight={500} display={{ base: "none", md: "flex" }}>
              Details
            </Text>
            <AccordionIcon fontSize={35} />
          </Box>
        </AccordionButton>
        <AccordionPanel>
          <Box>
            <Box display={"flex"} gap={5}>
              <Text fontSize={17} fontWeight={600} color={"blackAlpha.800"}>
                Quantity: {productCOUNT}
              </Text>
              <Text fontSize={17} fontWeight={600} color={"blackAlpha.800"}>
                Subtotal: ₹ {parseFloat(quntityPrice).toLocaleString()}.00
              </Text>
            </Box>

            <Box>
              <Text fontSize={17} fontWeight={600} color={"blackAlpha.900"}>
                Shipping Date: {createdAt.slice(0, 10)}
              </Text>
              <Box>
                <Text fontSize={17} fontWeight={600} color={"blackAlpha.900"}>
                  Delivery Address
                </Text>
                <Text
                  fontSize={17}
                  fontWeight={600}
                  color={"blackAlpha.900"}
                  textTransform={"uppercase"}
                >
                  {first_name + " " + last_name}
                </Text>
                <Text fontSize={16} fontWeight={500} color={"blackAlpha.700"}>
                  {address +
                    "," +
                    " " +
                    city +
                    " " +
                    "-" +
                    " " +
                    pincode +
                    "," +
                    " " +
                    state +
                    "," +
                    " " +
                    country +
                    "."}
                </Text>
              </Box>
              <Box
                display={"flex"}
                gap={3}
                justifyContent={"flex-start"}
                alignItems={"baseline"}
              >
                <Text fontSize={17} fontWeight={600} color={"blackAlpha.800"}>
                  Phone Number
                </Text>
                <Text fontSize={17} fontWeight={500} color={"black"}>
                  {number}
                </Text>
              </Box>
            </Box>
          </Box>
        </AccordionPanel>
        <Box paddingX={4} paddingY={1} marginY={5} width={"300px"}>
          {orderStatus === "Processing" ? (
            <>
              {loading ? (
                <Button
                  isLoading
                  loadingText="Shipping..."
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Processing
                </Button>
              ) : (
                <Select onChange={(e) => handleUpdateOrderStatus(e, _id)}>
                  <option value="">Choose Status</option>
                  <option value="Shipped">Shipped</option>
                </Select>
              )}
            </>
          ) : orderStatus === "Shipped" ? (
            <Select onChange={(e) => handleUpdateOrderStatus(e, _id)}>
              <option value="">Choose Status</option>
              <option value="Delivered">Delivered</option>
            </Select>
          ) : (
            <Select disabled onChange={(e) => handleUpdateOrderStatus(e, _id)}>
              <option value="">Choose Status</option>
              <option value="Delivered">Delivered</option>
            </Select>
          )}
        </Box>
      </AccordionItem>
    </>
  );
};

export default AllOrderProductCard;
