import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLoadertotheCart } from "../../Redux/Cart/Cart.actionTypes";
import CheckoutFormCancelButton from "./CheckoutFormCancelButton";

const initState = {
  first_name: "",
  last_name: "",
  number: "",
  address: "",
  pincode: "",
  city: "",
  state: "",
  country: "",
};

const CheckoutShippingForm = () => {
  const [formData, setFormData] = useState(initState);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getPincodeData = async (e) => {
    if (e.target.value.length === 6) {
      const resp = await fetch(
        `https://api.postalpincode.in/pincode/${e.target.value}`
      );
      const pinData = await resp.json();

      if (pinData[0].Status === "Success") {
        setFormData({
          ...formData,
          state: pinData[0].PostOffice[0].State,
          city: pinData[0].PostOffice[0].District,
          country: pinData[0].PostOffice[0].Country,
          pincode: e.target.value,
        });
      } else if (pinData[0].Status !== "Success") {
        toast({
          position: "top",
          description: "Enter Correct Pincode!",
          status: "error",
          duration: 3000,
          isClosable: false,
        });
        setFormData({
          ...formData,
          state: "",
          city: "",
          pincode: "",
          country: "",
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    let token = JSON.parse(localStorage.getItem("newwave")) || false;
    e.preventDefault();
    setLoading(true);
    try {
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/purchasehistory/post`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-type": "application/json",
            authorization: token.token || false,
          },
        }
      );

      let resData = await res.json();
      setLoading(false);
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
        dispatch({ type: getLoadertotheCart });
        navigate("/payment-success");
      }
    } catch (error) {
      setLoading(false);
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
      <Box display={"flex"} flexDirection={"column"} gap={10}>
        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box display={"flex"} gap={{ base: 5, md: 10 }}>
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                placeholder="Enter First Name"
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                placeholder="Enter Last Name"
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </FormControl>
          </Box>

          <Box display={"flex"} gap={{ base: 5, md: 10 }}>
            <FormControl isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input
                placeholder="Enter Number"
                type="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Address</FormLabel>
              <Input
                placeholder="Enter Address"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </FormControl>
          </Box>

          <Box display={"flex"} gap={{ base: 5, md: 10 }}>
            <FormControl isRequired>
              <FormLabel>Pincode</FormLabel>
              <Input
                placeholder="Enter Pincode"
                type="number"
                name="pincode"
                onChange={getPincodeData}
                required
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>City</FormLabel>
              <Input
                placeholder="Waiting for Pincode"
                type="text"
                name="city"
                value={formData.city}
                required
              />
            </FormControl>
          </Box>

          <Box display={"flex"} gap={{ base: 5, md: 10 }}>
            <FormControl isRequired>
              <FormLabel>State</FormLabel>
              <Input
                placeholder="Waiting for Pincode"
                type="text"
                name="state"
                value={formData.state}
                required
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Country</FormLabel>
              <Input
                placeholder="Waiting for Pincode"
                type="text"
                name="country"
                value={formData.country}
                required
              />
            </FormControl>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            alignContent={"center"}
            gap={5}
            marginTop={5}
          >
            <CheckoutFormCancelButton onClick={() => navigate("/")} />

            <Button colorScheme="purple" variant="outline" onClick={onOpen}>
              Save And Payment
            </Button>
          </Box>
        </form>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enter your payment details</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleSubmit}>
              <ModalBody>
                <FormControl as="fieldset">
                  <FormLabel as="legend">Select Card</FormLabel>
                  <RadioGroup defaultValue="Itachi">
                    <HStack spacing="24px">
                      <Radio value="Sasuke">Credit Card</Radio>
                      <Radio value="Nagato">Debit Card</Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>

                <FormControl isRequired mt={4}>
                  <FormLabel>Card Number</FormLabel>
                  <Input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    bg="gray.100"
                    _hover={{ bg: "gray.200" }}
                    _active={{ bg: "gray.300" }}
                    required
                  />
                </FormControl>

                <FormControl mt={4} isRequired>
                  <FormLabel>Expiry Date</FormLabel>
                  <Input
                    type="text"
                    placeholder="MM/YY"
                    bg="gray.100"
                    _hover={{ bg: "gray.200" }}
                    _active={{ bg: "gray.300" }}
                    required
                  />
                </FormControl>

                <FormControl mt={4} isRequired>
                  <FormLabel>CVV</FormLabel>
                  <Input
                    type="password"
                    placeholder="***"
                    bg="gray.100"
                    _hover={{ bg: "gray.200" }}
                    _active={{ bg: "gray.300" }}
                    required
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter borderTopWidth={"1px"}>
                <Button
                  type="submit"
                  colorScheme="red"
                  variant="outline"
                  mr={3}
                  _hover={{ bg: "red.700", color: "white" }}
                  _active={{ bg: "red.800" }}
                  onClick={onClose}
                >
                  Cancel
                </Button>
                {loading ? (
                  <Button
                    isLoading
                    loadingText="Submitting"
                    colorScheme="purple"
                    variant="outline"
                    mr={3}
                    _hover={{ bg: "purple.700", color: "white" }}
                    _active={{ bg: "purple.800" }}
                  >
                    Complete Order
                  </Button>
                ) : (
                  <Button
                    //   onClick={handleSubmit}
                    type="submit"
                    loadingText="Submitting"
                    colorScheme="purple"
                    variant="outline"
                    mr={3}
                    _hover={{ bg: "purple.700", color: "white" }}
                    _active={{ bg: "purple.800" }}
                  >
                    Complete Order
                  </Button>
                )}
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default CheckoutShippingForm;
