import React from "react";

import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { Footer } from "../Footer";
import { Logo } from "../../icons/Logo";
export default function ResetPage() {
  return (
    <>
      <Link style={{ boxShadow: "none" }} href="/">
        <Logo
          w="6rem"
          h="auto"
          color1="rgb(195, 197, 70)"
          color2="orange"
          m="1rem"
        />
      </Link>
      <Flex
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Forgot your password?
          </Heading>
          <Text
            fontSize={{ base: "sm", sm: "md" }}
            color={useColorModeValue("gray.800", "gray.400")}
          >
            You&apos;ll get an email with a reset link
          </Text>
          <FormControl id="email">
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg="var(--pasb)"
              color={"white"}
              _hover={{
                bg: "var(--pasbh)",
              }}
            >
              Request Reset
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
}
