import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { GameWrapper } from "./attributes/MiddleAttributes";
function GameList({ setGamesList, gamesList }) {
  if (GameList) {
    return (
      <>
        <Flex>
          <Flex wrap="wrap" justifyContent="center" w="93%" mx="auto">
            {gamesList.map((game, index) => {
              return (
                <Box key={index} bg="var(--mmsb)" mx="2%" my="0.4rem">
                  <GameWrapper picture={game.image} text={game.name} />
                </Box>
              );
            })}
          </Flex>
        </Flex>
      </>
    );
  }
}

export default GameList;
