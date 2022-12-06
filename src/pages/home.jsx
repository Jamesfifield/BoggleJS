import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import GameOptions from "../components/GameOptions";

const Home = () => {
  const [gameSize, setGameSize] = useState(4);

  return (
    <div>
      <h1>Welcome to BoggleJS {gameSize}</h1>
      <GameOptions onChange={(e) => setGameSize(e.target.value)} />
      <Link to={"/game"} className="btn" state={{ gameSize }}>
        start
      </Link>
    </div>
  );
};

export default Home;
