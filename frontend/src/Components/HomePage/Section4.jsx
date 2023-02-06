import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Section4 = () => {
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
            Our Benefits
            <Text
              width={"48px"}
              pt={"4px"}
              borderBottom={"4px solid #7E80E6"}
            ></Text>
          </Heading>
          <Box
            display={"grid"}
            gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
            gap={"10px"}
            marginTop={{ base: "15px", md: "20px" }}
          >
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit1-02Dec2022.jpg"
              width={"100%"}
              height={"auto"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit2-13Oct2022.jpg"
              width={"100%"}
              height={"auto"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit3-13Oct2022.jpg"
              width={"100%"}
              height={"auto"}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Section4;
