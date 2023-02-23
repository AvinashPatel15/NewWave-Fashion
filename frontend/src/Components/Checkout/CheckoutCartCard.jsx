import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CheckoutCartCard = ({ productID, productCOUNT }) => {
  let discountPrice = (productID.price * productID.discount) / 100;
  let finalPrice = Math.round(productID.price - discountPrice);
  return (
    <>
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Box width={"80px"} overflow={"hidden"}>
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
          <Link to={`/detail-page/${productID._id}`}>
            <Text fontSize={15} fontWeight={500} color={"blackAlpha.800"}>
              {productID.title.slice(0, 25) + "..."}
            </Text>
          </Link>
          <Text fontSize={15} fontWeight={600} color={"blackAlpha.700"}>
            Price: ₹{finalPrice}
          </Text>
          <Text fontSize={15} fontWeight={600} color={"blackAlpha.700"}>
            Quantity: {productCOUNT}
          </Text>
          <Text fontSize={15} fontWeight={600} color={"blackAlpha.700"}>
            SubTotal : ₹{finalPrice * productCOUNT}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default CheckoutCartCard;
