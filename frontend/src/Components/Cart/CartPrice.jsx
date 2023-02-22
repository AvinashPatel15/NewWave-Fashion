import React from "react";
import { Flex, Box, Input, Button, Text, Spacer } from "@chakra-ui/react";

const Navbar2 = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="teal.500"
      color="white"
    >
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          My Store
        </Text>
      </Box>

      <Box display={{ base: "block", md: "none" }} onClick={() => {}}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path
            d="M0,3h20v2H0V3z M0,9h20v2H0V9z M0,15h20v2H0V15z"
            fill="currentColor"
          />
        </svg>
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <Text mr={6}>Home</Text>
        <Text mr={6}>Mens</Text>
        <Text mr={6}>Womens</Text>
        <Text mr={6}>Kids</Text>
      </Box>

      <Box width={{ base: "full", md: "auto" }} textAlign="right">
        <Input placeholder="Search" variant="filled" size="sm" mr={2} />
        <Button colorScheme="teal" variant="solid" size="sm" mr={2}>
          Login
        </Button>
        <Button colorScheme="teal" variant="outline" size="sm">
          Sign up
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar2;
