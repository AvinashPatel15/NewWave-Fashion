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

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

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
              <Box w={"50px"} justify={"center"}>
                <Image src={nwlogo2} width={"100%"} height={"auto"} />
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
              marginRight={{ base: 1, sm: 2, md: 5 }}
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

            <Box display={{ base: "none", lg: "flex" }} gap={2}>
              <Link to="/wishlist">
                <Box>
                  <AiOutlineHeart size={30} />
                </Box>
              </Link>
              <Link to="/cart">
                <Box marginRight={{ base: 1, sm: 2, md: 3 }}>
                  <AiOutlineShoppingCart size={30} />
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
              >
                <Avatar
                  size={{ base: "sm", md: "md" }}
                  src={"https://bit.ly/broken-link"}
                  bg={"gray.500"}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Name</MenuItem>
                <MenuItem>Email</MenuItem>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Orders</MenuItem>
                <MenuItem
                  display={{ base: "flex", lg: "none" }}
                  icon={<AiOutlineHeart size={20} />}
                >
                  Wishlist
                </MenuItem>
                <MenuItem
                  display={{ base: "flex", lg: "none" }}
                  icon={<AiOutlineShoppingCart size={20} />}
                >
                  Cart
                </MenuItem>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
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
      <Link to={href}>
        <Flex
          py={2}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>

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
      </Link>

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
    href: "/men",
    children: [
      {
        label: "Western Wear",
        href: "/men-western-wear",
      },
      {
        label: "Footwear",
        href: "/men-footwear",
      },
      {
        label: "Accessories",
        href: "/men-accessories",
      },
    ],
  },
  {
    label: "Women",
    href: "/women",
    children: [
      {
        label: "Western Wear",
        href: "/women-western-wear",
      },
      {
        label: "Ethnic Wear",
        href: "/women-ethnic-wear",
      },
      {
        label: "Footwear",
        href: "/women-footwear",
      },
      {
        label: "Accessories",
        href: "/women-accessories",
      },
    ],
  },
  {
    label: "Girls",
    href: "/girls",
  },
  {
    label: "Boys",
    href: "/boys",
  },
];
