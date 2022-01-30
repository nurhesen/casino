import React from "react";
import { Box } from "@chakra-ui/react";
import SecondMenu from "./SecondMenu.js";
import GameList from "./GameList.js";
function MiddlePage({
  setGamesList,
  gamesList,
  setCurrCategory,
  currCategory,
}) {
  return (
    <Box>
      <SecondMenu
        setCurrCategory={setCurrCategory}
        currCategory={currCategory}
      />
      <GameList setGamesList={setGamesList} gamesList={gamesList} />
    </Box>
  );
}

export default MiddlePage;
