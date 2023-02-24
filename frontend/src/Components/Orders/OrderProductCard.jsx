import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Image,
  Text,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const OrderProductCard = ({
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
}) => {
  let discountPrice = (productID.price * productID.discount) / 100;
  let finalPrice = Math.round(productID.price - discountPrice);
  return (
    <>
      <AccordionItem>
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
                    ₹ {finalPrice}.00
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
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Box>
            <Box display={"flex"} gap={5}>
              <Text fontSize={17} fontWeight={600} color={"blackAlpha.800"}>
                Quantity: {productCOUNT}
              </Text>
              <Text fontSize={17} fontWeight={600} color={"blackAlpha.800"}>
                Subtotal: ₹{productCOUNT * finalPrice}
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
      </AccordionItem>
    </>
  );
};

export default OrderProductCard;
