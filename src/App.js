import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./screens/HomePage";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetPage from "./screens/Auth/ResetPage";
import { useState } from "react";

function App() {
  const [gamesList, setGamesList] = useState([]);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage setGamesList={setGamesList} gamesList={gamesList} />
            }
          />
          <Route path="/password/reset" element={<ResetPage />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
