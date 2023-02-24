import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Grid,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ProductCard from "../../Components/Products/ProductCard";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";

const Products = () => {
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  let [loader, setLoader] = useState(false);
  let [ref, setRef] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/products`
      );
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [ref]);

  const sortByPrice = (query) => {
    if (query === "asc") {
      Products.sort((a, b) => {
        return a.price - b.price;
      });
      setProducts(Products);
      setLoader(!loader);
    } else if (query === "desc") {
      Products.sort((a, b) => {
        return b.price - a.price;
      });
      setProducts(Products);
      setLoader(!loader);
    } else {
      setRef(!ref);
    }
  };

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
              <Menu>
                <MenuButton>
                  <Button
                    rightIcon={<ChevronDownIcon />}
                    width={"100%"}
                    colorScheme="black"
                    variant="outline"
                    fontSize={"20px"}
                    fontWeight={500}
                  >
                    Categories
                  </Button>
                </MenuButton>
                <MenuList>
                  <MenuItem fontWeight={600}>Default</MenuItem>
                  <MenuItem>Western Wear</MenuItem>
                  <MenuItem>Footwear</MenuItem>
                  <MenuItem>Accessories</MenuItem>
                </MenuList>
              </Menu>
            </Box>

            <Box display={{ base: "none", md: "flex" }}>
              {/* <AllFilters /> */}
              <Menu>
                <MenuButton>
                  <Button
                    rightIcon={<ChevronDownIcon />}
                    width={"100%"}
                    colorScheme="black"
                    variant="outline"
                    fontSize={"20px"}
                    fontWeight={500}
                  >
                    Sort By Discount
                  </Button>
                </MenuButton>
                <MenuList>
                  <MenuItem fontWeight={600}>Default</MenuItem>
                  <MenuItem>10% Or Above</MenuItem>
                  <MenuItem>20% Or Above</MenuItem>
                  <MenuItem>30% Or Above</MenuItem>
                  <MenuItem>40% Or Above</MenuItem>
                  <MenuItem>50% Or Above</MenuItem>
                </MenuList>
              </Menu>
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
                    fontWeight={500}
                  >
                    Sort By Price
                  </Button>
                </MenuButton>
                <MenuList>
                  <MenuItem
                    fontWeight={600}
                    onClick={() => {
                      sortByPrice();
                    }}
                  >
                    Default
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      sortByPrice("asc");
                    }}
                  >
                    Price: Low To High
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      sortByPrice("desc");
                    }}
                  >
                    Price: High To Low
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Box>

        <Box width={"100%"} margin={"auto"}>
          {loading ? (
            <Box width={"100%"} height={"60vh"} margin={"auto"} mt={"50px"}>
              <Loader />
            </Box>
          ) : (
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
              {Products &&
                Products.map((ele) => <ProductCard key={ele._id} {...ele} />)}
            </Grid>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Products;
