import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  InputGroup,
  InputRightElement,
  Input,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import nwlogo2 from "../../Assets/nwlogo2.png";
import { useEffect, useState } from "react";
import Logout from "./Logout";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../../Redux/Cart/Cart.actions";

const Navbar = () => {
  const {carts, loader} = useSelector((store) => store.cartReducerData)
  const { isOpen, onToggle } = useDisclosure();
  const [refresh, setRefresh] = useState(true);
  const dispatch = useDispatch()

  let tokenData = JSON.parse(localStorage.getItem("newwave")) || false;
  let firstName = tokenData.firstName || null;
  let lastName = tokenData.lastName || null;
  let name = firstName + " " + lastName;
  let email = tokenData.email || null;

  const logout = () => {
    localStorage.clear("localmart");
    setRefresh(!refresh);
  };

  useEffect(() =>{
    dispatch(getCartData())
  }, [loader])


  return (
    <>
      <Box
        width={"100%"}
        position={"sticky"}
        top={0}
        left={0}
        zIndex={100}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"#F7F8F7"}
        backgroundColor={"#F7F8F7"}
      >
        <Flex
          width={{ md: "95%", lg: "90%" }}
          margin={"auto"}
          minH={"60px"}
          color={useColorModeValue("gray.600", "white")}
          px={{ base: 2 }}
          py={{ base: 2 }}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            flex={{ base: 7 }}
            justify={{ base: "start", md: "start" }}
            alignItems={"center"}
          >
            <Link to="/">
              <Box w={"80px"} justify={"center"}>
                <Image
                  src={nwlogo2}
                  width={{ base: "60%", md: "75%" }}
                  height={"auto"}
                />
              </Box>
            </Link>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            justify={"end"}
            flexDirection={"row"}
            alignItems={"center"}
            textAlign={"center"}
          >
            <InputGroup
              size={{ base: "sm", md: "md" }}
              marginRight={{ base: 2, sm: 4, md: 5 }}
              marginTop={1.5}
              border={"1px solid grey"}
              borderRadius={5}
            >
              <Input
                variant="unstyled"
                width={{ base: 160, md: 250 }}
                placeholder="Search"
              />
              <InputRightElement width={{ base: "4.rem", md: "4.rem" }}>
                <Button h="1.75rem" size={{ base: "sm", md: "md" }}>
                  <GoSearch />
                </Button>
              </InputRightElement>
            </InputGroup>

            <Box display={{ base: "none", lg: "flex" }} gap={4}>
              <Link to="/wishlist">
                <Box>
                  <AiOutlineHeart size={35} />
                </Box>
              </Link>
              <Link to="/cart">
                <Box
                  marginRight={{ base: 1, sm: 2, md: 5 }}
                  position={"relative"}
                >
                  <AiOutlineShoppingCart size={35} />
                  <Text
                    position={"absolute"}
                    top={-1}
                    right={1}
                    fontSize={"12px"}
                    fontWeight={"bold"}
                    backgroundColor={"purple.200"}
                    borderRadius={"full"}
                    px={"2px"}
                  >
                    {carts.length}
                  </Text>
                </Box>
              </Link>
            </Box>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                pr={"10px"}
              >
                <Avatar
                  size={{ base: "sm", md: "md" }}
                  src={"https://bit.ly/broken-link"}
                  bg={"gray.500"}
                />
              </MenuButton>
              <MenuList>
                {tokenData && (
                  <>
                    <MenuItem>{name}</MenuItem>
                    <MenuItem>{email}</MenuItem>
                    <MenuItem>Orders</MenuItem>
                  </>
                )}
                <Link to={"/wishlist"}>
                  <MenuItem
                    display={{ base: "flex", lg: "none" }}
                    icon={<AiOutlineHeart size={20} />}
                  >
                    Wishlist
                  </MenuItem>
                </Link>

                <Link to={"/cart"}>
                  <MenuItem
                    display={{ base: "flex", lg: "none" }}
                    icon={<AiOutlineShoppingCart size={20} />}
                  >
                    Cart
                  </MenuItem>
                </Link>
                {tokenData ? (
                  <>
                    <MenuDivider />
                    <MenuItem color={"red.500"} fontWeight={"bold"}>
                      <Logout onClick={logout} />
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuDivider display={{ base: "flex", lg: "none" }} />
                    <Link to="/sign-up">
                      <MenuItem>Sign Up</MenuItem>
                    </Link>
                    <Link to="/login">
                      <MenuItem>Login</MenuItem>
                    </Link>
                  </>
                )}
              </MenuList>
            </Menu>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
};

export default Navbar;

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link to={navItem.href}>
                <Text
                  p={2}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Text>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href }) => {
  return (
    <Link to={href}>
      <Text
        href={href}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("purple.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "purple.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"purple.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Text>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={0} onClick={children && onToggle}>
      <Flex
        py={2}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Link to={href}>
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
        </Link>

        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} to={child.href}>
                <Text py={1}>{child.label}</Text>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Men",
    href: "/products",
    children: [
      {
        label: "Western Wear",
        href: "#",
      },
      {
        label: "Footwear",
        href: "#",
      },
      {
        label: "Accessories",
        href: "#",
      },
    ],
  },
  {
    label: "Women",
    href: "/products",
    children: [
      {
        label: "Western Wear",
        href: "#",
      },
      {
        label: "Ethnic Wear",
        href: "#",
      },
      {
        label: "Footwear",
        href: "#",
      },
      {
        label: "Accessories",
        href: "#",
      },
    ],
  },
  // {
  //   label: "Girls",
  //   href: "/products",
  // },
  // {
  //   label: "Boys",
  //   href: "/products",
  // },
];
