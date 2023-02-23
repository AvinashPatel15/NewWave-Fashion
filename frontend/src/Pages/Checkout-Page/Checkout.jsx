import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Loader from "../../Components/Loader/Loader";
import DeleteCartItemButton from "../../Components/Cart/DeleteCartItemButton";
import { Link } from "react-router-dom";
import CheckoutCartCard from "../../Components/Checkout/CheckoutCartCard";
import CheckoutShippingForm from "../../Components/Checkout/CheckoutShippingForm";
import { FiEdit } from "react-icons/fi";

const Checkout = () => {
  const { carts, isLoading } = useSelector((store) => store.cartReducerData);

  let DiscountPrice = 0;
  for (let i = 0; i < carts.length; i++) {
    let CartPrice = 0;
    CartPrice =
      CartPrice +
      (carts[i].productID.price * carts[i].productID.discount) / 100;
    DiscountPrice =
      DiscountPrice +
      Math.abs(carts[i].productID.price - CartPrice) * carts[i].productCOUNT;
  }
  return (
    <>
      <Navbar />
      <Box width={"100%"} marginTop={{ base: 3, md: 5 }}>
        <Box width={{ base: "95%", lg: "60%" }} margin="auto">
          {isLoading ? (
            <>
              <Box width={"100%"} height={"60vh"} margin={"auto"} mt={"50px"}>
                <Loader />
              </Box>
            </>
          ) : (
            <>
              {carts.length === undefined ? (
                <>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    gap={3}
                    justifyContent={"center"}
                    alignItems={"center"}
                    height={"50vh"}
                  >
                    <Image
                      src="https://images.meesho.com/images/pow/empty-cart.png"
                      width={"263px"}
                      height={"250px"}
                    />
                    <Text fontSize={25} fontWeight={600}>
                      No Items In The Cart
                    </Text>
                    <Link to={"/"}>
                      <DeleteCartItemButton value={"Back To Home"} />
                    </Link>
                  </Box>
                </>
              ) : (
                <>
                  <Box
                    display={"flex"}
                    flexDirection={{ base: "column", lg: "row" }}
                    gap={{ base: 5, md: 10 }}
                  >
                    <Box
                      border={"1px solid grey"}
                      borderRadius={10}
                      padding={5}
                      height={"390px"}
                    >
                      <Box
                        display={"flex"}
                        gap={3}
                        marginBottom={{ base: 2, md: 5 }}
                        paddingBottom={0}
                        borderBottom={"3px solid black"}
                      >
                        <Text
                          fontSize={20}
                          fontWeight={500}
                          paddingRight={4}
                          borderRight={"3px solid black"}
                        >
                          Cart
                        </Text>

                        <Text fontSize={20} color={"blackAlpha.700"}>
                          {carts.length} Items
                        </Text>
                      </Box>

                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        gap={5}
                        paddingBottom={5}
                        borderBottom={"3px solid black"}
                        overflowY={"auto"}
                        height={"121px"}
                      >
                        {carts &&
                          carts.map((el) => (
                            <CheckoutCartCard key={el._id} {...el} />
                          ))}
                      </Box>

                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        borderBottom={"1px solid black"}
                      >
                        <Text
                          fontSize={17}
                          fontWeight={500}
                          color={"blackAlpha.800"}
                        >
                          Total Discount
                        </Text>

                        <Text
                          fontSize={17}
                          fontWeight={500}
                          color={"blackAlpha.800"}
                        >
                          ₹ -50.00
                        </Text>
                      </Box>

                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        borderBottom={"1px solid black"}
                      >
                        <Text
                          fontSize={17}
                          fontWeight={500}
                          color={"blackAlpha.800"}
                        >
                          Shipping
                        </Text>

                        <Text
                          fontSize={17}
                          fontWeight={500}
                          color={"blackAlpha.800"}
                        >
                          ₹ 100.00
                        </Text>
                      </Box>

                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        borderBottom={"1px solid black"}
                      >
                        <Text
                          fontSize={17}
                          fontWeight={500}
                          color={"blackAlpha.800"}
                        >
                          Tax
                        </Text>

                        <Text
                          fontSize={17}
                          fontWeight={500}
                          color={"blackAlpha.800"}
                        >
                          ₹ 250.00
                        </Text>
                      </Box>

                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Text fontSize={17} fontWeight={500}>
                          Order Total
                        </Text>

                        <Text fontSize={17} fontWeight={500}>
                          ₹ {Math.round(DiscountPrice) - 50 + 100 + 250}.00
                        </Text>
                      </Box>

                      <Box marginTop={{ base: 3, md: 5 }}>
                        <Link to={"/cart"}>
                          <Button
                            rightIcon={<FiEdit />}
                            colorScheme="purple"
                            variant="outline"
                            width={"100%"}
                          >
                            Edit Cart
                          </Button>
                        </Link>
                      </Box>
                    </Box>

                    <Box
                      border={"1px solid grey"}
                      borderRadius={10}
                      padding={5}
                    >
                      <Box
                        display={"flex"}
                        gap={3}
                        marginBottom={{ base: 2, md: 5 }}
                        paddingBottom={0}
                        borderBottom={"3px solid black"}
                      >
                        <Text fontSize={20} fontWeight={500} paddingRight={4}>
                          Shipping Details
                        </Text>
                      </Box>

                      <CheckoutShippingForm />
                    </Box>
                  </Box>
                </>
              )}
            </>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Checkout;
