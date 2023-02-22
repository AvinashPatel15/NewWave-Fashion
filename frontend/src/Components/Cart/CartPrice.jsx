import { Box, Text } from "@chakra-ui/react";
import React from "react";

const CartPrice = ({ totalPrice }) => {
  return (
    <>
      <Box width={"100%"} padding={3}>
        <Box>
          <Text fontSize={19} fontWeight={500}>
            Price Details
          </Text>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            paddingY={{ base: 2, md: 3 }}
            borderBottom={"1px solid black"}
          >
            <Text fontSize={17} fontWeight={500} color={"blackAlpha.800"}>
              Total Product Price
            </Text>

            <Text fontSize={17} fontWeight={500} color={"blackAlpha.800"}>
              ₹ {totalPrice}.00
            </Text>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            paddingY={{ base: 2, md: 3 }}
            borderBottom={"1px solid black"}
          >
            <Text fontSize={17} fontWeight={500} color={"blackAlpha.800"}>
              Shipping
            </Text>

            <Text fontSize={17} fontWeight={500} color={"blackAlpha.800"}>
              ₹ 100.00
            </Text>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            paddingY={{ base: 2, md: 3 }}
            borderBottom={"1px solid black"}
          >
            <Text fontSize={17} fontWeight={500} color={"blackAlpha.800"}>
              Tax
            </Text>

            <Text fontSize={17} fontWeight={500} color={"blackAlpha.800"}>
              ₹ 250.00
            </Text>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            paddingY={{ base: 2, md: 3 }}
          >
            <Text fontSize={17} fontWeight={500}>
              Order Total
            </Text>

            <Text fontSize={17} fontWeight={500}>
              ₹ {totalPrice + 250 + 250}.00
            </Text>
          </Box>

          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            textAlign={"center"}
            paddingY={{ base: 2, md: 3 }}
          >
            <Text
              fontSize={13.5}
              fontWeight={500}
              textAlign={"center"}
              backgroundColor={"#f7f8f7"}
              paddingY={1}
              paddingX={3}
            >
              Clicking on ‘Continue’ will not deduct any money
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CartPrice;
