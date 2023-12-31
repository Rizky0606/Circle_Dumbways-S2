// import React from "react";
import { AUTH_LOGOUT } from "@/store/RootReducer";
import {
  SimpleGrid,
  Box,
  Text,
  Button,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiHomeAlt, BiSearchAlt2 } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { PiSignOutBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";

const SideLeft = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    dispatch(AUTH_LOGOUT());
    navigate("/auth/login");
  };

  return (
    <Box position={"fixed"} top="0">
      <SimpleGrid p={5}>
        <Box>
          <Link to="/">
            <Text color="green" fontSize="6xl" fontWeight="bold">
              Circle
            </Text>
          </Link>
        </Box>
        <Box>
          <UnorderedList style={{ listStyle: "none" }}>
            <Link to="/">
              {location.pathname === "/" ? (
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  py="20px"
                  px="10px"
                  bg="#262626"
                  color="white"
                  borderRadius={"10px"}
                  cursor="pointer"
                >
                  <BiHomeAlt size="20px" fontWeight={"bold"} />
                  <ListItem style={{ marginLeft: "10px" }}>
                    <Text size="xl" fontWeight={"bold"}>
                      Home
                    </Text>
                  </ListItem>
                </Box>
              ) : (
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  py="20px"
                  px="10px"
                  _hover={{
                    bg: "#262626",
                    color: "white",
                    borderRadius: "10px",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <BiHomeAlt size="20px" />
                  <ListItem style={{ marginLeft: "10px" }}>
                    <Text size="xl" fontWeight={"semibold"}>
                      Home
                    </Text>
                  </ListItem>
                </Box>
              )}
            </Link>

            <Link to="/search">
              {location.pathname === "/search" ? (
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  py="20px"
                  px="10px"
                  bg="#262626"
                  color="white"
                  cursor={"pointer"}
                  borderRadius={"10px"}
                >
                  <BiSearchAlt2 size="20px" />
                  <ListItem style={{ marginLeft: "10px" }}>
                    <Text fontWeight={"bold"}>Search</Text>
                  </ListItem>
                </Box>
              ) : (
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  py="20px"
                  px="10px"
                  _hover={{
                    bg: "#262626",
                    color: "white",
                    borderRadius: "10px",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <BiSearchAlt2 size="20px" />
                  <ListItem style={{ marginLeft: "10px" }}>
                    <Text fontWeight={"semibold"}>Search</Text>
                  </ListItem>
                </Box>
              )}
            </Link>

            <Link to="/follow">
              {location.pathname === "/follow" ? (
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  py="20px"
                  px="10px"
                  bg="#262626"
                  color="white"
                  borderRadius={"10px"}
                  cursor="pointer"
                >
                  <AiOutlineHeart size="20px" />
                  <ListItem style={{ marginLeft: "10px" }}>
                    <Text fontWeight={"bold"}>Follow</Text>
                  </ListItem>
                </Box>
              ) : (
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  py="20px"
                  px="10px"
                  _hover={{
                    bg: "#262626",
                    color: "white",
                    borderRadius: "10px",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <AiOutlineHeart size="20px" />
                  <ListItem style={{ marginLeft: "10px" }}>
                    <Text fontWeight={"semibold"}>Follow</Text>
                  </ListItem>
                </Box>
              )}
            </Link>

            <Link to="/profile">
              {location.pathname === "/profile" ? (
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  py="20px"
                  px="10px"
                  bg="#262626"
                  color="white"
                  borderRadius={"10px"}
                  cursor="pointer"
                >
                  <CgProfile size="20px" />
                  <ListItem style={{ marginLeft: "10px" }}>
                    <Text fontWeight={"bold"}>Profile</Text>
                  </ListItem>
                </Box>
              ) : (
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  py="20px"
                  px="10px"
                  _hover={{
                    bg: "#262626",
                    color: "white",
                    borderRadius: "10px",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <CgProfile size="20px" />
                  <ListItem style={{ marginLeft: "10px" }}>
                    <Text fontWeight={"semibold"}>Profile</Text>
                  </ListItem>
                </Box>
              )}
            </Link>
          </UnorderedList>
        </Box>
        <Button colorScheme={"green"} m="10px" p="10px" borderRadius={"15px"}>
          Create Post
        </Button>

        <UnorderedList mt="60px">
          <Box
            display={"flex"}
            alignItems={"center"}
            py="20px"
            px="10px"
            _hover={{
              bg: "red",
              color: "white",
              borderRadius: "10px",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => handleLogout()}
          >
            <PiSignOutBold size="20px" />
            <ListItem style={{ marginLeft: "10px" }}>
              <Text fontWeight={"semibold"}>Logout</Text>
            </ListItem>
          </Box>
        </UnorderedList>
      </SimpleGrid>
    </Box>
  );
};

export default SideLeft;
