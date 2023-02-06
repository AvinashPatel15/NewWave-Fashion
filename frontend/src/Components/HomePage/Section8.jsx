import {
  Box,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Section8 = () => {
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
            The Premium Edit
            <Text
              width={"48px"}
              pt={"4px"}
              borderBottom={"4px solid #7E80E6"}
            ></Text>
          </Heading>

          <Tabs
            variant="soft-rounded"
            colorScheme="gray"
            marginTop={{ base: "15px", md: "20px" }}
          >
            <TabList>
              <Tab>Women</Tab>
              <Tab>Men</Tab>
              <Tab>Girls</Tab>
              <Tab>Boys</Tab>
            </TabList>

            <TabPanels>
              <TabPanel
                display={"grid"}
                gridTemplateColumns={"repeat(2,1fr)"}
                gridTemplateRows={"auto"}
                gap={"15px"}
              >
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-UberHp-Top-Deals-Desk-Women-Banner1-30JAN23.png"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-UberHp-Top-Deals-Desk-Women-Banner2-30JAN23.png"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-UberHp-Top-Deals-Desk-Women-Banner3-30JAN23.png"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-UberHp-Top-Deals-Desk-Women-Banner4-30JAN23.png"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
              </TabPanel>

              <TabPanel
                display={"grid"}
                gridTemplateColumns={"repeat(2,1fr)"}
                gridTemplateRows={"auto"}
                gap={"15px"}
              >
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-UberHp-Top-Deals-Desk-Men-Banner1-30JAN23.png"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-UberHp-Top-Deals-Desk-Men-Banner2-30JAN23.png"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-UberHp-Top-Deals-Desk-Men-Banner3-30JAN23.png"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-UberHp-Top-Deals-Desk-Men-Banner4-30JAN23.png"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
              </TabPanel>

              <TabPanel
                display={"grid"}
                gridTemplateColumns={"repeat(2,1fr)"}
                gridTemplateRows={"auto"}
                gap={"15px"}
              >
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-UberHp-Top-Deals-Desk-Girls-Banner1-30JAN23.png"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-UberHp-Top-Deals-Desk-Girls-Banner2-30JAN23.png"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-UberHp-Top-Deals-Desk-Girls-Banner3-30JAN23.png"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-UberHp-Top-Deals-Desk-Girls-Banner4-30JAN23.png"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
              </TabPanel>

              <TabPanel
                display={"grid"}
                gridTemplateColumns={"repeat(2,1fr)"}
                gridTemplateRows={"auto"}
                gap={"15px"}
              >
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-UberHp-Top-Deals-Desk-Boys-Banner1-30JAN23.png"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-UberHp-Top-Deals-Desk-Boys-Banner2-30JAN23.png"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-UberHp-Top-Deals-Desk-Boys-Banner3-30JAN23.png"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-UberHp-Top-Deals-Desk-Boys-Banner4-30JAN23.png"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

export default Section8;
