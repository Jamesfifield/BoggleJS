import React, { useState } from "react";
import Boggle from "./boggle";
import Navbar from "./navbar.component";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";

const App = () => {
  const [gameSize, setGameSize] = useState(4);

  const onNavClick = (e) => {
    setGameSize(e.target.value);
  };

  return (
    <>
      <Navbar onClick={onNavClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Boggle boardSize={gameSize} />} />
      </Routes>
    </>
  );
};

export default App;
