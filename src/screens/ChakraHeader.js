import React from "react";

import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  Menu,
  useDisclosure,
  Text,
  Center,
} from "@chakra-ui/react";

import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { TruckIcon, Hamburger } from "../icons/Icons.js";
import LoginModal from "./Auth/LoginModal.js";
import RegisterModal from "./Auth/RegisterModal.js";
import Categories from "./attributes/Categories.js";
import DrawerMenu from "./attributes/DrawerMenu.js";
import { Logo } from "../icons/Logo.js";

export default function ChakraHeader({ setCurrCategory, currCategory }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();

  return (
    <>
      <Box
        w={{ base: "89%", sm: "89%", md: "100%" }}
        position="absolute"
        px={4}
        style={{ zIndex: "99" }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box
            flexGrow="5"
            aria-label={"Open Menu"}
            onClick={
              isOpen
                ? () => {
                    onClose();
                  }
                : () => {
                    onOpen();
                  }
            }
          >
            <Button
              bg="none"
              _hover={{ bg: "none" }}
              _active={{ bg: "none" }}
              _focus={{ bg: "none" }}
              h="fit-content"
              w="fit-content"
              p="0"
            >
              <Hamburger size={"md"} />
            </Button>
          </Box>

          <HStack flexGrow="5" spacing={8} alignItems={"center"}>
            <Box>
              <Logo
                w="6rem"
                h="auto"
                d={{ base: "none", sm: "none", md: "block" }}
                color1="rgb(195, 197, 70)"
                color2="orange"
              />
            </Box>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            ></HStack>
          </HStack>

          <Flex alignItems={"center"} grow="1" ml={{ base: "-100px", sm: "0" }}>
            <Menu>
              <Flex
                w={{
                  base: "48%",
                  sm: "48%",
                  md: "100%",
                }}
                m="11px"
                mr={{
                  base: "0",
                  sm: "0",
                  md: "30px",
                }}
                ml="auto"
                justifyContent="space-between"
                alignItems="center"
              >
                <RegisterModal fontSize="0.8rem" menuOrDrawer="menu" />

                <LoginModal fontSize="0.8rem" menuOrDrawer="menu" />
                <Link _hover="none" _focus="none" href="password/reset">
                  <Button
                    bg="var(--mib)"
                    as={Button}
                    rounded={"full"}
                    cursor={"pointer"}
                    _hover={{ bg: "var(--mibh)" }}
                    _focus="none"
                  >
                    <Flex
                      alignItems="center"
                      w={{ base: "1.8rem", sm: "1.8rem", md: "7.8rem" }}
                      justifyContent="space-between"
                    >
                      <TruckIcon w="32px" h="32px" opacity="80%" />
                      <Text
                        display={{ base: "none", sm: "none", md: "block" }}
                        fontSize="0.8rem"
                      >
                        Reset Password
                      </Text>
                    </Flex>
                  </Button>
                </Link>
              </Flex>
            </Menu>
          </Flex>
        </Flex>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />

          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Center>
                <Logo
                  id="cli"
                  w="6rem"
                  h="auto"
                  d={{ base: "none", sm: "none", md: "block" }}
                  color1="rgb(195, 197, 70)"
                  color2="orange"
                />
              </Center>
            </DrawerHeader>

            <DrawerBody
              w="90%"
              overflowY="auto"
              css={{
                "&::-webkit-scrollbar": {
                  width: "6px",
                },
                "&::-webkit-scrollbar-track": {
                  width: "10px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "var(--dsbc)",
                  borderRadius: "24px",
                },
              }}
            >
              <Box my="0.4rem">
                {Categories.map((category, index) => {
                  return (
                    <DrawerMenu
                      key={index}
                      icon={category.icon}
                      text={category.name}
                    />
                  );
                })}
              </Box>

              <hr />

              <Box my="0.4rem">
                <RegisterModal
                  className="hide-in-sm"
                  fontSize="0.8rem"
                  menuOrDrawer="drawer"
                />

                <LoginModal
                  className="hide-in-sm"
                  fontSize="0.8rem"
                  menuOrDrawer="drawer"
                />
                <Link _hover="none" _focus="none" href="password/reset">
                  <Button
                    id="dlb"
                    w="100%"
                    my="0.5rem"
                    bg="var(--dabc)"
                    _hover={{ bg: "var(--dabch)" }}
                  >
                    <Text>Password Reset</Text>
                  </Button>
                </Link>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}
