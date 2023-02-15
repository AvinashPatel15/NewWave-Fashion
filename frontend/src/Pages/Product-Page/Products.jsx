import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import AllFilters from "../../Components/Products/AllFilters";

const Products = () => {
  return (
    <>
      <Navbar />
      <Box width={{ base: "95%", lg: "90%" }} margin="auto">
        <Box
          width={"100%"}
          marginTop={{ base: 3, md: 5 }}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <AllFilters />
          </Box>
          <Box>
            <Heading>Men's</Heading>
          </Box>
          <Box>
            <Flex align={"center"} gap={1}>
              <Text fontWeight={500}>Sort By :</Text>
              <select
                style={{ fontWeight: "bold", p: "0.5rem", cursor: "pointer" }}
                placeholder="Select option"
              >
                <option value="option1">Featured </option>
                <option value="option2">Price, low to high</option>
                <option value="option3">Price, high to low</option>
              </select>
            </Flex>
          </Box>
        </Box>

        <Box width={"100%"} margin={"auto"}></Box>
      </Box>
      <Footer />
    </>
  );
};

export default Products;
