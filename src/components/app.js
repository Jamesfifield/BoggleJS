import React, { useState } from "react";
import Boggle from "./boggle";
import Navbar from "./navbar.component";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Gameover from "../pages/Gameover";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Boggle boardSize={4} />} />
        <Route path="/gameover" element={<Gameover />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};

export default App;
