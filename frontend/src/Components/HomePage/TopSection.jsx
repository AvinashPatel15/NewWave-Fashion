import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import styles from "./TopSection.module.css";
import { Link } from "react-router-dom";

const TopSection = () => {
  return (
    <>
      <Box
        width={{ base: "95%", lg: "90%" }}
        margin="auto"
        backgroundColor={"purple.200"}
      >
        <Box
          width={"100%"}
          display={"grid"}
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
          gridTemplateRows={"auto"}
          gap={5}
          padding={5}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box textAlign={"left"}>
            <Box>
              <Text
                color={"white"}
                fontSize={{ base: "5xl", md: "8xl" }}
                fontWeight={"bold"}
                marginBottom={-5}
              >
                Welcome To :
              </Text>
              <Text
                color={"white"}
                fontSize={{ base: "5xl", md: "8xl" }}
                fontWeight={"bold"}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip={"text"}
              >
                New Wave
              </Text>
              <Text
                color={"white"}
                fontSize={{ base: "5xl", md: "8xl" }}
                fontWeight={"bold"}
                marginTop={{ base: -6, md: -10 }}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip={"text"}
              >
                Fashion
              </Text>
            </Box>
            <Box display={"flex"} gap={5} marginTop={3}>
              <Link to="/sign-up">
                <button className={styles.button}>Sign Up</button>
              </Link>
              <Link to="/login">
                <button className={styles.button}>Sign In</button>
              </Link>
            </Box>
          </Box>
          <Box>
            <Image
              src="https://res.cloudinary.com/drlbtp3dt/image/upload/v1675976238/samples/Untitled_design_odjetn.png"
              width={"100%"}
              height={"auto"}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TopSection;
