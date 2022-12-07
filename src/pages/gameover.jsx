import React from "react";
import WordList from "../components/WordList";
import { NavLink, useLocation } from "react-router-dom";

const Gameover = () => {
  const list = useLocation().state?.data || [];
  const gameSize = useLocation().state?.gameSize || 4;
  return (
    <div className="center-content">
      <h1>Game Over</h1>
      <h3>Thanks for playing!</h3>

      <NavLink to="/" className="btn warning">
        Exit
      </NavLink>
      <NavLink to="/game" className="btn confirm" state={{ gameSize }}>
        Play Again
      </NavLink>
      <br />
      <span>{`Words Found: ${list.length}`}</span>
      <br />
      <WordList list={list} listHeader={"Found Words"} />
    </div>
  );
};

export default Gameover;
