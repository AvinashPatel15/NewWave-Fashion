import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Select,
  Image,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import nwlogo2 from "../../Assets/nwlogo2.png";
import signupbackground from "../../Assets/signupbackground.jpg";

const initState = {
  first_name: "",
  last_name: "",
  age: "",
  gender: "",
  // phone: "",
  // pincode: "",
  // address: "",
  // city: "",
  // state: "",
  email: "",
  password: "",
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initState);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/users/register`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-type": "application/json",
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
        navigate("/login");
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

  // const getPincodeData = async (e) => {
  //   if (e.target.value.length === 6) {
  //     const resp = await fetch(
  //       `https://api.postalpincode.in/pincode/${e.target.value}`
  //     );
  //     const pinData = await resp.json();

  //     if (pinData[0].Status === "Success") {
  //       setFormData({
  //         ...formData,
  //         state: pinData[0].PostOffice[0].State,
  //         city: pinData[0].PostOffice[0].District,
  //         pincode: e.target.value,
  //       });
  //     } else if (pinData[0].Status !== "Success") {
  //       alert("Enter Correct PinCode");
  //       setFormData({ ...formData, state: "", city: "", pincode: "" });
  //     }
  //   }
  // };

  return (
    <Box
      backgroundImage={signupbackground}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      blur={"4px"}
    >
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} pt={2} pb={8} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Link to="/">
              <Image
                src={nwlogo2}
                width={"20%"}
                height={"auto"}
                margin={"auto"}
              />
            </Link>
          </Stack>
          <Box
            rounded={"lg"}
            bg={"rgba(255, 148, 24, 0.3)"}
            boxShadow={
              "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
            }
            p={8}
            position={"relative"}
            right={{ base: 0, lg: 300 }}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter First Name"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter Last Name"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>
                </Box>
              </HStack>
              <HStack>
                <Box>
                  <FormControl id="age" isRequired>
                    <FormLabel>Age</FormLabel>
                    <Input
                      type="number"
                      placeholder="Enter Your Age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="gender" isRequired>
                    <FormLabel>Gender</FormLabel>
                    <Select
                      placeholder="Select Gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="Other">Other</option>
                    </Select>
                  </FormControl>
                </Box>
              </HStack>
              {/* <HStack>
                <Box>
                  <FormControl id="Phone" isRequired>
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      type="number"
                      name="phone"
                      placeholder="Enter Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="pincode" isRequired>
                    <FormLabel>Pincode / ZIP</FormLabel>
                    <Input
                      type="text"
                      name="pincode"
                      placeholder="Enter Pincode"
                      onChange={getPincodeData}
                      required
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="addess" isRequired>
                <FormLabel>Address</FormLabel>
                <Input
                  type="text"
                  name="address"
                  placeholder="Enter Your Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <HStack>
                <Box>
                  <FormControl id="city" isRequired isReadOnly>
                    <FormLabel>City</FormLabel>
                    <Input
                      type="text"
                      name="city"
                      placeholder="Waiting For Pincode"
                      value={formData.city}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="state" isRequired isReadOnly>
                    <FormLabel>State</FormLabel>
                    <Input
                      type="text"
                      name="state"
                      placeholder="Waiting For Pincode"
                      value={formData.state}
                    />
                  </FormControl>
                </Box>
              </HStack> */}
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter 8 Digit Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                {loading ? (
                  <Button
                    isLoading
                    loadingText="Submitting"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign up
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign up
                  </Button>
                )}
              </Stack>
              <Stack pt={3} display={"flex"}>
                <Text
                  align={"center"}
                  display={"flex"}
                  justifyContent={"center"}
                  gap={"4px"}
                  alignItems={"center"}
                >
                  Already a user?
                  <Link to="/login">
                    <Text color={"#138CF1"} textDecoration={"underline"}>
                      Login
                    </Text>
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Register;
