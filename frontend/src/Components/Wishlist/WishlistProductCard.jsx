import { Box, Button, Image, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { BsCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  deleteWishlistItem,
  getWishlistData,
} from "../../Redux/Wishlist/Wishlist.action";
import { useDispatch } from "react-redux";
import { getLoadertotheCart } from "../../Redux/Cart/Cart.actionTypes";

const WishlistProductCard = ({ productID, _id }) => {
  let discountPrice = (productID.price * productID.discount) / 100;
  let finalPrice = Math.round(productID.price - discountPrice);

  const dispatch = useDispatch();
  const toast = useToast();

  const handleDeleteItem = async (id) => {
    await dispatch(deleteWishlistItem(id));
    dispatch(getWishlistData());
  };

  const handleAddToCart = async (id) => {
    let token = JSON.parse(localStorage.getItem("newwave")) || false;
    try {
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/carts/post/${id}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            authorization: token.token || false,
          },
        }
      );
      let resData = await res.json();
      if (res.status >= 400) {
        toast({
          position: "top",
          description: resData.message,
          status: "error",
          duration: 2000,
          isClosable: false,
        });
      } else {
        toast({
          position: "top",
          description: resData.message,
          status: "success",
          duration: 2000,
          isClosable: false,
        });
      }
      dispatch({ type: getLoadertotheCart });
    } catch (error) {
      console.log(error);
      toast({
        position: "top",
        description: error.message,
        status: "error",
        duration: 2000,
        isClosable: false,
      });
    }
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
              <Box
                display={"flex"}
                justifyContent={"left"}
                alignItems={"baseline"}
                gap={2}
              >
                <Text fontSize={20} fontWeight={600} color={"blackAlpha.800"}>
                  ₹{finalPrice}
                </Text>
                <del fontSize={17} fontWeight={600} color={"blackAlpha.800"}>
                  ₹{productID.price}
                </del>
                <Text fontSize={20} fontWeight={600} color={"red"}>
                  ₹{productID.discount}% Off
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
            <Box display={"flex"}>
              <Button
                leftIcon={<BsCartPlusFill />}
                colorScheme="purple"
                variant="outline"
                onClick={() => handleAddToCart(_id)}
              >
                Add To Cart
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

export default WishlistProductCard;
