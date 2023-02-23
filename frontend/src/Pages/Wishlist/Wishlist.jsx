import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import Navbar from "../../Components/Navbar/Navbar";
import Loader from "../../Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistData } from "../../Redux/Wishlist/Wishlist.action";
import DeleteCartItemButton from "../../Components/Cart/DeleteCartItemButton";
import { Link } from "react-router-dom";
import WishlistProductCard from "../../Components/Wishlist/WishlistProductCard";

const Wishlist = () => {
  const { wishlists, isLoading } = useSelector(
    (store) => store.wishlistReducerData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWishlistData());
  }, []);

  console.log(wishlists);

  return (
    <>
      <Navbar />
      <Box width={{ base: "95%", lg: "50%" }} margin={"auto"}>
        <Box width={"100%"} margin={"auto"} marginTop={{ base: 7, md: 10 }}>
          {isLoading ? (
            <Box width={"100%"} height={"60vh"} margin={"auto"} mt={"50px"}>
              <Loader />
            </Box>
          ) : (
            <>
              {wishlists.length === undefined ? (
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={3}
                  justifyContent={"center"}
                  alignItems={"center"}
                  height={"50vh"}
                >
                  <Text fontSize={25} fontWeight={600}>
                    Your Wishlist is empty!!
                  </Text>

                  <Link to={"/"}>
                    <DeleteCartItemButton value={"Back To Home"} />
                  </Link>
                </Box>
              ) : (
                <>
                  <Box
                    display={"flex"}
                    gap={3}
                    marginBottom={{ base: 2, md: 5 }}
                  >
                    <Text
                      fontSize={23}
                      fontWeight={500}
                      paddingRight={4}
                      borderRight={"3px solid black"}
                    >
                      My Wishlist
                    </Text>

                    <Text fontSize={23} color={"blackAlpha.700"}>
                      {wishlists.length} Items
                    </Text>
                  </Box>

                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    gap={5}
                    marginBottom={20}
                  >
                    {wishlists &&
                      wishlists.map((el) => (
                        <WishlistProductCard key={el._id} {...el} />
                      ))}
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

export default Wishlist;
