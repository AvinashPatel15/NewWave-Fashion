import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decCartQuantity,
  deleteCartItem,
  getCartData,
} from "../../Redux/Cart/Cart.actions";
import { MdDeleteForever } from "react-icons/md";

const CartProductCard = ({ productID, productCOUNT, _id }) => {
  let discountPrice = (productID.price * productID.discount) / 100;
  let finalPrice = Math.round(productID.price - discountPrice);

  const dispatch = useDispatch();

  const handleQuantityINC = async (id) => {
    await dispatch(addToCart(id));
    dispatch(getCartData());
  };

  const handleQuantityDEC = async (id) => {
    await dispatch(decCartQuantity(id));
    dispatch(getCartData());
  };

  const handleDeleteItem = async (id) => {
    await dispatch(deleteCartItem(id));
    dispatch(getCartData());
  };

  return (
    <>
      <Box
        border={"1px solid grey"}
        borderRadius={10}
        padding={5}
        width={"100%"}
      >
        <Box
          display={"grid"}
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
          gap={{ base: 5, md: 0 }}
        >
          <Box
            display={"flex"}
            gap={3}
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
                  {productID.title.slice(0, 20) + "..."}
                </Text>
              </Link>
              <Box>
                <Text fontSize={20} fontWeight={600} color={"blackAlpha.800"}>
                  ₹{finalPrice}
                </Text>
                <Text fontSize={17} fontWeight={600} color={"blackAlpha.800"}>
                  SubTotal : ₹{finalPrice * productCOUNT}
                </Text>
              </Box>
            </Box>
          </Box>

          <Box
            display={"flex"}
            justifyContent={{ base: "flex-start", md: "flex-end" }}
            alignItems={"center"}
            gap={7}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Button
                colorScheme="purple"
                variant="outline"
                fontWeight={600}
                onClick={() => handleQuantityDEC(_id)}
              >
                -
              </Button>
              <Text padding={4}>{productCOUNT}</Text>
              <Button
                colorScheme="purple"
                variant="outline"
                fontWeight={600}
                onClick={() => handleQuantityINC(productID._id)}
              >
                +
              </Button>
            </Box>

            <Box display={"flex"}>
              <Button
                leftIcon={<MdDeleteForever />}
                colorScheme="purple"
                variant="outline"
                onClick={() => handleDeleteItem(_id)}
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CartProductCard;
