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
import { AddUserIcon } from "../../icons/Icons";

function RegisterModal({ fontSize, menuOrDrawer }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  return (
    <>
      {menuOrDrawer === "menu" ? (
        <Button
          onClick={onOpen}
          as={Button}
          rounded={"full"}
          cursor={"pointer"}
          bg="var(--mib)"
          _hover={{ bg: "var(--mibh)" }}
          _focus="none"
        >
          <Flex alignItems="center" w="5.2rem" justifyContent="space-between">
            <AddUserIcon w="22px" h="22px" opacity="80%" />
            <Box
              display={{ base: "none", sm: "none", md: "block" }}
              fontSize={fontSize}
            >
              Register
            </Box>
          </Flex>
        </Button>
      ) : (
        <Button
          w="100%"
          my="0.5rem"
          bg="var(--dabc)"
          _hover={{ bg: "var(--dabch)" }}
          onClick={onOpen}
          as={Button}
        >
          <Text>Register</Text>
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
          <ModalHeader>Register</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="Last name" />
            </FormControl>
            <FormControl>
              <Input ref={initialRef} placeholder="Email" />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="Password" type="password" />
            </FormControl>
            <FormControl>
              <Input
                ref={initialRef}
                type="password"
                placeholder="Retype Password"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Register
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default RegisterModal;
