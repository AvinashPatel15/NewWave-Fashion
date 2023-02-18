import { Box, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import ProductsImg from "../../Components/Product-Detail-Page/ProductsImg";
import Loader from "../../Components/Loader/Loader";

const DetailPage = () => {
  const { id } = useParams();
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/products/${id}`
      );
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <>
      <Navbar />
      <Box width={{ base: "95%", lg: "90%" }} margin="auto">
        <Box width={"100%"} marginTop={{ base: 3, md: 5 }}>
          {loading ? (
            <Box
              width={"100%"}
              height={"70vh"}
              margin={"auto"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mt={"50px"}
            >
              <Loader />
            </Box>
          ) : (
            <>
              <Box
                display={"grid"}
                gridTemplateColumns={{
                  base: "repeat(1,1fr)",
                  md: "repeat(2,1fr)",
                }}
                gap={5}
                border={"1px solid black"}
              >
                <Box
                  height={"600px"}
                  border={"1px solid red"}
                  display={"grid"}
                  gridTemplateColumns={"repeat(1,1fr)"}
                  gridTemplateRows={"auto"}
                  gap={10}
                >
                  <Box>
                    <Image
                      src={Products.images}
                      width={"100%"}
                      height={"auto"}
                    />
                  </Box>
                  <Box
                    width={"100%"}
                    display={"grid"}
                    gridTemplateColumns={"repeat(4,1fr)"}
                    gridTemplateRows={"auto"}
                    gap={3}
                  >
                    {Products.images &&
                      Products.images.map((el) => (
                        <Box overflow={"hidden"} key={el._id}>
                          <Image src={el.url} width={"100%"} height={"auto"} />
                        </Box>
                      ))}
                  </Box>
                </Box>
                <Box height={"600px"} border={"1px solid red"}></Box>
              </Box>
            </>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default DetailPage;
