import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import CarouselCover from "./CarouselCover.js";

import ChakraHeader from "./ChakraHeader.js";

import MiddlePage from "./MiddlePage.js";
import { Footer } from "./Footer.js";
import { getGames } from "./actions/Actions.js";

function HomePage({ setGamesList, gamesList }) {
  const [currCategory, setCurrCategory] = useState("all");
  useEffect(() => {
    setGamesList([]);
    getGames(currCategory).then((d) => {
      setGamesList(d.data);
    });
  }, [currCategory]);
  return (
    <>
      <Box>
        <ChakraHeader
          setCurrCategory={setCurrCategory}
          currCategory={currCategory}
        />
        <CarouselCover />
      </Box>
      <MiddlePage
        setCurrCategory={setCurrCategory}
        currCategory={currCategory}
        setGamesList={setGamesList}
        gamesList={gamesList}
      />

      <Footer />
    </>
  );
}

export default HomePage;
