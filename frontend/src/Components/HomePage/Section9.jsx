import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Section9 = () => {
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
            Style Must-haves
            <Text
              width={"48px"}
              pt={"4px"}
              borderBottom={"4px solid #7E80E6"}
            ></Text>
          </Heading>
          <Box
            display={"grid"}
            gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }}
            gap={"10px"}
            marginTop={{ base: "15px", md: "20px" }}
          >
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-UberHP-STYLEMUSTHAVESONE-Desk-Banner1-30JAN23.png"
              width={"100%"}
              height={"auto"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-UberHP-STYLEMUSTHAVESTWO-Desk-Banner2-30JAN23.png"
              width={"100%"}
              height={"auto"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-UberHP-STYLEMUSTHAVESTHREE-Desk-Banner3-30JAN23.png"
              width={"100%"}
              height={"auto"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-UberHP-STYLEMUSTHAVESFOUR-Desk-Banner4-30JAN23.png"
              width={"100%"}
              height={"auto"}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Section9;
