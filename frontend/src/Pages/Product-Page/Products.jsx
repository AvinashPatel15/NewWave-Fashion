import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Grid,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ProductCard from "../../Components/Products/ProductCard";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import { Link, useParams } from "react-router-dom";

const Products = () => {
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);
  const [ref, setRef] = useState(false);
  const [search, setSearch] = useState("");
  const { gender } = useParams();

  const getData = async (gender, search = "") => {
    setLoading(true);
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/products?q=${search}&gender=${gender}`
      );
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(gender, search);
    window.scrollTo(0, 0);
  }, [ref, gender, search]);

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

  const sortByCategory = (genre) => {
    getData(gender, genre);
  };

  const handleByDiscount = async (discount) => {
    if (discount === 0) {
      setRef(!ref);
      return;
    }
    let newData = Products.filter((ele) => {
      return ele.discount >= discount;
    });
    newData.sort((a, b) => {
      return a.discount - b.discount;
    });
    setProducts(newData);
  };

  return (
    <>
      <Navbar />
      <Box width={{ base: "95%", lg: "90%" }} margin="auto">
        <Breadcrumb
          marginTop={3}
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <Link to={"/"}>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Products</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink textTransform={"capitalize"}>
              {gender}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box
          width={"100%"}
          marginTop={{ base: 3, md: 5 }}
          display={"flex"}
          justifyContent={"left"}
          alignItems={"center"}
        >
          <Heading as={"h3"} size={"xl"} textTransform={"capitalize"}>
            {gender} Products
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
                  <MenuItem fontWeight={600} onClick={() => sortByCategory("")}>
                    Default
                  </MenuItem>
                  <MenuItem onClick={() => sortByCategory("Western Wear")}>
                    Western Wear
                  </MenuItem>
                  <MenuItem onClick={() => sortByCategory("Footwear")}>
                    Footwear
                  </MenuItem>
                  <MenuItem onClick={() => sortByCategory("Accessories")}>
                    Accessories
                  </MenuItem>
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
                  <MenuItem
                    onClick={() => handleByDiscount(0)}
                    fontWeight={600}
                  >
                    Default
                  </MenuItem>
                  <MenuItem onClick={() => handleByDiscount(10)}>
                    10% Or Above
                  </MenuItem>
                  <MenuItem onClick={() => handleByDiscount(20)}>
                    20% Or Above
                  </MenuItem>
                  <MenuItem onClick={() => handleByDiscount(30)}>
                    30% Or Above
                  </MenuItem>
                  <MenuItem onClick={() => handleByDiscount(40)}>
                    40% Or Above
                  </MenuItem>
                  <MenuItem onClick={() => handleByDiscount(50)}>
                    50% Or Above
                  </MenuItem>
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
            <>
              {Products.length === 0 ? (
                <Box width={"100%"} height={"60vh"} margin={"auto"} mt={"50px"}>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    margin={"auto"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Image
                      src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=740&t=st=1677330897~exp=1677331497~hmac=e032e484a1ea2fbeb4a4e1c550a7e9459bfa5b3331cc39b56b2a2a2b3142851c"
                      width={"350px"}
                      height={"350px"}
                    />
                    <Text fontSize={20} fontWeight={500}>No Data Found!</Text>
                  </Box>
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
                    Products.map((ele) => (
                      <ProductCard key={ele._id} {...ele} />
                    ))}
                </Grid>
              )}
            </>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Products;
