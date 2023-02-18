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
import AllFilters from "../../Components/Products/AllFilters";
import ProductCard from "../../Components/Products/ProductCard";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";

const Products = () => {
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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
  }, []);

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
