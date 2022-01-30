import React, { useRef } from "react";

import {
  Box,
  Flex,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Input,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { LoginIcon } from "../../icons/Icons";

function LoginModal({ fontSize, menuOrDrawer }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  return (
    <>
      {menuOrDrawer === "menu" ? (
        <Button
          bg="var(--mib)"
          onClick={onOpen}
          as={Button}
          rounded={"full"}
          cursor={"pointer"}
          _hover={{ bg: "var(--mibh)" }}
          _focus="none"
        >
          <Flex alignItems="center" w="3.8rem" justifyContent="space-between">
            <LoginIcon w="22px" h="22px" opacity="80%" />
            <Box
              display={{ base: "none", sm: "none", md: "block" }}
              fontSize={fontSize}
            >
              Login
            </Box>
          </Flex>
        </Button>
      ) : (
        <Button
          id="drb"
          w="100%"
          my="0.5rem"
          bg="var(--dabc)"
          _hover={{ bg: "var(--dabch)" }}
          onClick={onOpen}
          as={Button}
        >
          <Text>Login</Text>
        </Button>
      )}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>

          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Login
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginModal;
