import React from "react";
import WordList from "../components/WordList";
import { NavLink, useLocation } from "react-router-dom";

const Gameover = () => {
  const list = useLocation().state?.data || [];
  const gameSize = useLocation().state?.gameSize || 4;
  return (
    <div>
      <h1>Game over</h1>
      <span>{`you found ${list.length} words`}</span>
      <WordList list={list} listHeader={"Found Words"} />;
      <NavLink to="/" className="btn">
        Exit
      </NavLink>
      <NavLink to="/game" className="btn" state={{ gameSize }}>
        Play Again
      </NavLink>
    </div>
  );
};

export default Gameover;
