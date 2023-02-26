import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Accordion,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AllOrderProductCard from "../../Components/Admin/AllOrderProductCard";
import Loader from "../../Components/Loader/Loader";
import { getAllOrdersData } from "../../Redux/Admin/AllOrders/AllOrders.action";

const AllOrders = () => {
  const { allorders, isLoading } = useSelector(
    (store) => store.allOrdersReducerData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersData());
  }, []);

  return (
    <>
      <Box padding={5}>
        <Box marginBottom={1}>
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
              <Link to={"/admin"}>
                <BreadcrumbLink>Admin</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink textTransform={"capitalize"}>
                All Orders
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>

        <Box
          width={"100%"}
          margin={"auto"}
          justifyContent={"flex-start"}
          alignContent={"center"}
          mb={4}
        >
          <Text fontSize={25} fontWeight={600} color={"black"}>
            All Orders
          </Text>
        </Box>

        <Box width={"100%"} paddingY={2} paddingX={1}>
          {isLoading ? (
            <>
              <Box width={"100%"} height={"60vh"} margin={"auto"} mt={"50px"}>
                <Loader />
              </Box>
            </>
          ) : (
            <>
              {allorders.length === undefined ? (
                <>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    gap={3}
                    justifyContent={"center"}
                    alignItems={"center"}
                    height={"80vh"}
                  >
                    <Image
                      src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/max/no-order.svg"
                      width={"263px"}
                      height={"250px"}
                    />
                    <Text fontSize={25} fontWeight={600}>
                      No Orders Found!!
                    </Text>
                  </Box>
                </>
              ) : (
                <>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    background={"#f7f8f7"}
                    borderRadius={5}
                  >
                    <Box>
                      <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="date"
                      />
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
                            Sort By Status
                          </Button>
                        </MenuButton>
                        <MenuList>
                          <MenuItem fontWeight={600}>Default</MenuItem>
                          <MenuItem>Processing</MenuItem>
                          <MenuItem>Cancel</MenuItem>
                          <MenuItem>Delivered</MenuItem>
                        </MenuList>
                      </Menu>
                    </Box>
                  </Box>

                  <Box
                    width={{ base: "100%", md: "70%" }}
                    margin={"auto"}
                    marginTop={5}
                  >
                    <Accordion
                      allowMultiple
                      display={"flex"}
                      flexDirection={"column"}
                      gap={5}
                      marginBottom={20}
                    >
                      {allorders &&
                        allorders.map((el) => (
                          <AllOrderProductCard key={el._id} {...el} />
                        ))}
                    </Accordion>
                  </Box>
                </>
              )}
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default AllOrders;
