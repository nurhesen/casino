import { Box, Stack, StackDivider } from "@chakra-ui/react";
import * as React from "react";
import { Copyright } from "./Footers/Copyright";
import { LinkGrid } from "./Footers/LinkGrid";
import { Logo } from "./Footers/Logo";
import { SocialMediaLinks } from "./Footers/SocialMediaLinks";
import { SubscribeForm } from "./Footers/SubscribeForm";

export const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{ base: "4", md: "8" }}
  >
    <Stack spacing="10" divider={<StackDivider />}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "10", lg: "28" }}
      >
        <Box flex="1">
          <Logo />
        </Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "10", md: "20" }}
        >
          <LinkGrid spacing={{ base: "10", md: "20", lg: "28" }} flex="1" />
          <SubscribeForm width={{ base: "full", md: "sm" }} />
        </Stack>
      </Stack>
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Copyright />
        <SocialMediaLinks />
      </Stack>
    </Stack>
  </Box>
);
