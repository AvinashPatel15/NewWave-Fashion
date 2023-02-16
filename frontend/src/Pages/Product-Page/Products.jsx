import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import AllFilters from "../../Components/Products/AllFilters";
import ProductsItems from "./ProductsItems";

const Products = () => {
  return (
    <>
      <Navbar />
      <Box width={{ base: "95%", lg: "90%" }} margin="auto">
        <Box
          width={"100%"}
          marginTop={{ base: 3, md: 5 }}
          display={"flex"}
          justifyContent={"left"}
          alignItems={"center"}
        >
          <Heading as={"h3"} size={"xl"}>
            Men's
          </Heading>
        </Box>
        <Box
          width={"100%"}
          marginTop={{ base: 3, md: 5 }}
          paddingBottom={5}
          borderBottom={"1px solid black"}
        >
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
              <Menu>
                <MenuButton>
                  <Button
                    rightIcon={<ChevronDownIcon />}
                    width={"100%"}
                    colorScheme="black"
                    variant="outline"
                    fontSize={"20px"}
                    fontWeight={700}
                  >
                    Sort By
                  </Button>
                </MenuButton>
                <MenuList>
                  <MenuItem>Price: Low To High</MenuItem>
                  <MenuItem>Price: High To Low</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Box>

        <Box width={"100%"} margin={"auto"}>
          <Grid
            marginTop={{ base: 5, md: 10 }}
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
              xl: "repeat(4,1fr)",
            }}
            gridTemplateRows={"auto"}
            gap={10}
          >
            {ProductsItems &&
              ProductsItems.map(
                ({ id, title, brand, color, price, discount, images }) => (
                  <GridItem
                    key={id}
                    borderRadius={5}
                    backgroundColor={"#F7F8F7"}
                  >
                    <Box>
                      <Box
                        width={"100%"}
                        height={"300px"}
                        overflow={"hidden"}
                        borderRadius={5}
                      >
                        <Image
                          src={images[0].url}
                          width={"100%"}
                          height={"auto"}
                          objectFit={"cover"}
                        />
                      </Box>
                      <Text>{title}</Text>
                    </Box>
                  </GridItem>
                )
              )}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Products;
