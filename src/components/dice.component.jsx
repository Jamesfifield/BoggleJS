import React, { useEffect, useState, useRef } from "react";
import { RandomLetter, config } from "../hooks/useRandomLetter";
import "./dice.style.css";

const Dice = ({ onClick, selectedDice, position }) => {
  //console.log(position);
  const element = useRef();
  const value = useRef(RandomLetter("ABCDEFGHIKLMNOPRSTU"));

  let selected = selectedDice.includes(element.current);

  return (
    <div
      ref={element}
      className={`dice ${selected ? "selected" : ""}`}
      onClick={(e) => onClick(e, position)}
    >
      {value.current}
    </div>
  );
};

export default Dice;
