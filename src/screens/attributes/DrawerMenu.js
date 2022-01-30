import React, { useState } from "react";
import { Flex, Text, Center } from "@chakra-ui/react";

export default function DrawerMenu(props) {
  const [color, setColor] = useState("white");
  const [bcolor, setBColor] = useState("none");

  return (
    <>
      <Flex
        bg={bcolor}
        justifyContent="space-evenly"
        py="0.5rem"
        onMouseOver={() => {
          setColor("black");
          setBColor("var(--dhbc)");
        }}
        onMouseLeave={() => {
          setColor("white");
          setBColor("none");
        }}
        cursor="pointer"
      >
        <Center>{props.icon(color)}</Center>
        <Flex justifyContent="flex-start" w="50%">
          <Text color={color}>{props.text}</Text>
        </Flex>
      </Flex>
    </>
  );
}
