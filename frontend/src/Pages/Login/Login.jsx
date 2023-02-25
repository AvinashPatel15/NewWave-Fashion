import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Image,
  useToast,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import nwlogo2 from "../../Assets/nwlogo2.png";
import signupbackground from "../../Assets/signupbackground.jpg";

const initState = {
  email: "",
  password: "",
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initState);
  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let res = await fetch(
        "https://new-wave-fashion-server.cyclic.app/users/login",
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
        localStorage.setItem(
          "newwave",
          JSON.stringify({
            token: resData.token,
            firstName: resData.first_name,
            lastName: resData.last_name,
            email: resData.email,
            admin: resData.admin,
          })
        );
        navigate("/");
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
    <Box
      backgroundImage={signupbackground}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      blur={"4px"}
    >
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign In</Heading>
            <Link to="/">
              <Image
                src={nwlogo2}
                width={"20%"}
                margin={"auto"}
                height={"auto"}
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
              <form action="">
                <FormControl id="email">
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
                <FormControl id="password">
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
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Text cursor={"pointer"} color={"blue.400"}>
                      Forgot password?
                    </Text>
                  </Stack>
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
                      Sign in
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Sign in
                    </Button>
                  )}
                </Stack>
              </form>
            </Stack>
            <Stack pt={3} display={"flex"}>
              <Text
                align={"center"}
                display={"flex"}
                justifyContent={"center"}
                gap={"4px"}
                alignItems={"center"}
              >
                New User?
                <Link to="/sign-up">
                  <Text color={"#138CF1"} textDecoration={"underline"}>
                    Register
                  </Text>
                </Link>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Login;
