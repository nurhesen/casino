import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import {
  TruckIcon,
  LoginIcon,
  AddUserIcon,
  Hamburger,
} from "../icons/Icons.js";

function Header() {
  return (
    <>
      <Box className="menutop" w="100%" position="absolute">
        <Flex
          opacity="75%"
          alignItems="center"
          position="relative"
          w="96%"
          mx="auto"
        >
          <Hamburger m="1rem" w="37px" h="37px" />
          <Flex
            w="28%"
            m="11px"
            mr="30px"
            ml="auto"
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex alignItems="center" w="5.5rem" justifyContent="space-between">
              <AddUserIcon w="30px" h="30px" opacity="80%" />
              <Text className="hide-in-sm" fontSize="0.8rem">
                Add User
              </Text>
            </Flex>

            <Flex alignItems="center" w="3.8rem" justifyContent="space-between">
              <LoginIcon w="22px" h="22px" opacity="80%" />
              <Text className="hide-in-sm" fontSize="0.8rem">
                Login
              </Text>
            </Flex>

            <Flex alignItems="center" w="7.8rem" justifyContent="space-between">
              <TruckIcon w="32px" h="32px" opacity="80%" />
              <Text className="hide-in-sm" fontSize="0.8rem">
                Reset Password
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Header;
