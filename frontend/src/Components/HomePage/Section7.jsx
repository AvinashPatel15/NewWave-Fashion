import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Section7 = () => {
  return (
    <>
      <Box width={{ base: "95%", lg: "90%" }} margin="auto">
        <Box width={"100%"}>
          <Heading
            as={"h2"}
            fontWeight={600}
            fontFamily={"sans-serif"}
            fontSize={"24px"}
            marginTop={{ base: "25px", md: "35px" }}
          >
            Scratch The Card
            <Text
              width={"48px"}
              pt={"4px"}
              borderBottom={"4px solid #7E80E6"}
            ></Text>
          </Heading>
          <Box marginTop={{ base: "15px", md: "20px" }}>
            <Image
              src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Gamezone-Tile.gif"
              width={"100%"}
              height={"auto"}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Section7;
