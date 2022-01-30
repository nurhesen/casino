import React from "react";
import { Box, Text, Center } from "@chakra-ui/react";

import { CategoryWrapper, GBrandWrapper } from "./attributes/MiddleAttributes";
import { GBrand } from "../icons/GBrandIcons";
import Categories from "./attributes/Categories";

function SecondMenu({ setCurrCategory, currCategory }) {
  const GBrands = [
    { name: "all", comp: <GBrand name="all" /> },
    { name: "amatic", comp: <GBrand name="amatic" /> },
    { name: "bomba", comp: <GBrand name="bomba" /> },
    { name: "netent", comp: <GBrand name="netent" /> },
    { name: "novomatic", comp: <GBrand name="novomatic" /> },
    { name: "egt", comp: <GBrand name="egt" /> },
    { name: "wazdan", comp: <GBrand name="wazdan" /> },
  ];
  return (
    <>
      <Box position="sticky" top="0" bg="var(--mmsb)">
        <Center
          w="100%"
          py="1.5rem"
          bg="var(--mmsb)"
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "var(--mmibc)",
              borderRadius: "24px",
            },
          }}
          pb="1rem"
          transform="scaleY(-1)"
          justifyContent={{
            base: "flex-start",
            sm: "center",
            md: "center",
          }}
        >
          <Center
            w="fit-content"
            justifyContent={{
              base: "flex-start",
              sm: "center",
              md: "center",
            }}
          >
            {Categories.map((category, index) => {
              return (
                <CategoryWrapper key={index} icon={category.icon}>
                  <Text>{category.name}</Text>
                </CategoryWrapper>
              );
            })}
          </Center>
        </Center>

        <Center w="100%" py="1rem" bg="var(--chakra-colors-gray-800)">
          <Center w="70%" justifyContent="center">
            {GBrands.map((category, index) => {
              return (
                <GBrandWrapper
                  key={index}
                  icon={category.comp}
                  name={category.name}
                  setCurrCategory={setCurrCategory}
                  currCategory={currCategory}
                ></GBrandWrapper>
              );
            })}
          </Center>
        </Center>
      </Box>
    </>
  );
}

export default SecondMenu;
