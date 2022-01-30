import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function Swiperc() {
  const [bgPics, setBgPics] = useState([]);
  const [currPic, setCurrPic] = useState(0);

  useEffect(() => {
    setBgPics([
      "https://palmtreasures.net/assets/images/slides/7.jpg",
      "https://palmtreasures.net/assets/images/slides/6.jpg",
      "https://palmtreasures.net/assets/images/slides/1.jpg",
      "https://palmtreasures.net/assets/images/slides/8.jpg",
      "https://palmtreasures.net/assets/images/slides/2.jpg",
    ]);
  }, []);

  const changeBgnd = () => {
    if (bgPics.length > 0) {
      if (currPic < bgPics.length - 1) {
        const news = currPic + 1;
        setCurrPic(news);
      } else if (currPic === bgPics.length - 1) {
        setCurrPic(0);
      }
    }
  };

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      changeBgnd();
    }, 4000);
    return () => window.clearTimeout(timeoutID);
  }, [bgPics, currPic]);

  return (
    <>
      <Box
        backgroundImage={`url(${bgPics[currPic]})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        h={{
          base: "350px",
          md: "450px",
        }}
        bgSize="cover"
      >
        <Flex
          h={{
            base: "350px",
            md: "450px",
          }}
          w="95%"
          justifyContent="space-between"
          mx="auto"
        >
          <Box my="auto">
            <ChevronLeftIcon w="3rem" h="3rem" cursor="pointer" />
          </Box>
          <Box my="auto">
            <ChevronRightIcon w="3rem" h="3rem" cursor="pointer" />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Swiperc;
