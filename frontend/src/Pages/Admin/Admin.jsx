import {
  Avatar,
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { AiFillShopping } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import {
  MdDashboardCustomize,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import nwlogo2 from "../../Assets/nwlogo2.png";
import AdminDashboard from "../../Components/Admin/AdminDashboard";
import AllOrders from "../../Components/Admin/AllOrders";
import Logout from "../../Components/Navbar/Logout";

const Admin = () => {
  const [refresh, setRefresh] = useState(true);
  const navigate = useNavigate();

  let tokenData = JSON.parse(localStorage.getItem("newwave")) || false;
  let firstName = tokenData.firstName || null;
  let lastName = tokenData.lastName || null;
  let name = firstName + " " + lastName;
  let email = tokenData.email || null;
  let admin = tokenData.admin || null;

  const logout = () => {
    localStorage.clear("localmart");
    window.location.reload(false);
    setRefresh(!refresh);
  };

  useEffect(() => {
    if (!admin) {
      navigate("/");
    }
  }, []);

  return (
    <Box width={"100%"}>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={3}
        position={"sticky"}
        top={0}
        left={0}
        zIndex={100}
        background={"#f7f8f7"}
        backdropFilter={"blur(10px)"}
      >
        <Box width={"80px"}>
          <Link to={"/"}>
            <Image
              src={nwlogo2}
              width={{ base: "60%", md: "75%" }}
              height={"auto"}
            />
          </Link>
        </Box>

        <Box display={{ base: "none", md: "flex" }} cursor={"pointer"}>
          <Text fontSize={30} fontWeight={600}>
            Admin
          </Text>
        </Box>

        <Box>
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
                </>
              )}
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
                  <Link to="/login">
                    <MenuItem>Login</MenuItem>
                  </Link>
                </>
              )}
            </MenuList>
          </Menu>
        </Box>
      </Box>

      {/* For Big Screen */}

      <Tabs
        width={"100%"}
        margin={"auto"}
        display={{ base: "none", md: "flex" }}
        isFitted
        variant="soft-rounded"
        mb={5}
      >
        <Box width={"100%"} margin={"auto"}>
          <TabList
            position={"sticky"}
            top={20}
            zIndex={50}
            borderBottom={"2px solid black"}
            paddingY={2}
            background={"transparent"}
            backdropFilter={"blur(10px)"}
          >
            <Tab color={"black"}>Dashboard</Tab>
            <Tab color={"black"}>Orders</Tab>
            <Tab color={"black"}>Users</Tab>
            <Tab color={"black"}>Products</Tab>
          </TabList>

          <TabPanels width={"100%"}>
            <TabPanel>
              <AdminDashboard />
            </TabPanel>
            <TabPanel>
              <AllOrders />
            </TabPanel>
            <TabPanel>Users</TabPanel>
            <TabPanel>Products</TabPanel>
          </TabPanels>
        </Box>
      </Tabs>

      {/* For Mobile Screen */}

      <Tabs
        width={"100%"}
        margin={"auto"}
        display={{ base: "flex", md: "none" }}
        paddingY={3}
        isFitted
        variant="soft-rounded"
        mb={5}
      >
        <Box width={"100%"} gap={5}>
          <Box
            position={"sticky"}
            zIndex={50}
            top={{base:14,md:20}}
            borderBottom={"2px solid black"}
            paddingY={3}
            background={"transparent"}
            backdropFilter={"blur(10px)"}
          >
            <TabList
              width={"100%"}
              display={"flex"}
              gap={10}
              justifyContent={"space-between"}
              background={"transparent"}
              backdropFilter={"blur(10px)"}
            >
              <Tab color={"black"}>
                <MdDashboardCustomize size={25} />
              </Tab>
              <Tab color={"black"}>
                <AiFillShopping size={25} />
              </Tab>
              <Tab color={"black"}>
                <FaUserFriends size={25} />
              </Tab>
              <Tab color={"black"}>
                <MdProductionQuantityLimits size={25} />
              </Tab>
            </TabList>
          </Box>

          <TabPanels width={"100%"}>
            <TabPanel>
              <AdminDashboard />
            </TabPanel>
            <TabPanel>
              <AllOrders />
            </TabPanel>
            <TabPanel>Users</TabPanel>
            <TabPanel>Products</TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
    </Box>
  );
};

export default Admin;
