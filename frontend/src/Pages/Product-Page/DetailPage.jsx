import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";

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
  }, []);

  console.log(Products);

  return (
    <>
      <Navbar />
      <Box width={{ base: "95%", lg: "90%" }} margin="auto">
        <Box width={"100%"} marginTop={{ base: 3, md: 5 }}>
          Single Product Page
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default DetailPage;
