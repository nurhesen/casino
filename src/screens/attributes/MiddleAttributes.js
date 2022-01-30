import React, { useState, useRef } from "react";

import {
  Box,
  Flex,
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
  Text,
  Center,
  Image,
} from "@chakra-ui/react";

function CategoryWrapper(props) {
  const [color, setColor] = useState("white");

  return (
    <>
      <Flex
        w="90px"
        h="90px"
        border="0.1rem solid var(--mmibc)"
        borderRadius="50%"
        mx="2%"
        transform="scaleY(-1)"
        onMouseOver={() => setColor("var(--chc)")}
        onMouseLeave={() => setColor("white")}
        cursor="pointer"
      >
        <Center flexDirection="column" m="auto" w="120px">
          <Box>{props.icon(color)}</Box>

          <Box color={color} fontSize="0.8rem">
            {props.children}
          </Box>
        </Center>
      </Flex>
    </>
  );
}
function GBrandWrapper({
  setCurrCategory,
  currCategory,
  icon,
  children,
  name,
}) {
  return (
    <>
      <Flex
        w="90px"
        h="55px"
        border={
          currCategory === name
            ? "0.1rem solid var(--chc)"
            : "0.1rem solid var(--mmibc)"
        }
        borderRadius="0.7rem"
        bg="var(--mmsb)"
        mx="1%"
        cursor="pointer"
        _hover={{ border: "0.1rem solid var(--chc)" }}
        onClick={() => setCurrCategory(name)}
      >
        <Center flexDirection="column" m="auto">
          <Box>{icon}</Box>
          <Box>{children}</Box>
        </Center>
      </Flex>
    </>
  );
}

function GameWrapper({ picture, text }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  return (
    <>
      <Box
        _hover={{ bg: "var(--gbbch)" }}
        onClick={onOpen}
        w="fit-content"
        h="fit-content"
        cursor="pointer"
      >
        <Image
          boxSize="204px"
          h="121px"
          objectFit="cover"
          src={picture}
          alt={text}
          p="0.3rem"
          loading="lazy"
        />
        <Text w="fit-content" mx="auto" p="0.3rem">
          {text}
        </Text>
      </Box>

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
export { CategoryWrapper, GBrandWrapper, GameWrapper };
