import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import GameOptions from "../components/GameOptions";
import "./home.css";
const Home = () => {
  const [gameSize, setGameSize] = useState(4);

  return (
    <div className="center-content">
      <h1>Welcome to Boggle</h1>
      <h3>Select a game size</h3>
      <div class="gamesize-options">
        <GameOptions onChange={(e) => setGameSize(e.target.value)} />
      </div>
      <Link to={"/game"} className="btn confirm" state={{ gameSize }}>
        start
      </Link>
    </div>
  );
};

export default Home;
