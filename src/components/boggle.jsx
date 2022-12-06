import React, { useEffect, useState, useRef } from "react";
import Dice from "./dice.component";

import gameUtils from "../utils/gameUtils";
import GridView from "../layouts/GridView";

import { useDictionary } from "../hooks/useDictionary";

import "./boggle.style.css";

const Boggle = ({ boardSize }) => {
  const initGame = () => {
    clearSelected();
    setList([]);
    setGameModel(gameUtils.get2DArray(boardSize));
  };

  const clearSelected = () => {
    prevDice.current = null;
    setSelectedDice([]);
  };

  //2. Allow user to create a word using the values of each dice
  const onDiceSelect = ({ target }, position) => {
    //returns true if previous array index is next to new array index.
    if (!gameUtils.hasConnectedPath(prevDice.current, position)) {
      clearSelected();
      return;
    }

    prevDice.current = position;
    //has the letter already been selected?
    const selectedIndex = selectedDice.indexOf(target);

    //if the dice hasn't been selected yet
    if (selectedIndex === -1) {
      setSelectedDice([...selectedDice, target]);
      return;
    }

    //The dice can only be removed in the order it was placed (push, pop etc)
    if (selectedIndex === selectedDice.length - 1) {
      setSelectedDice([...selectedDice].slice(0, -1));
    }

    //Have to remove dice in order or by clearing all. At this stage do nothing.
  };

  const checkWordValid = () => {
    setList([...list], selectedWord);
    clearSelected();
  };

  const [gameModel, setGameModel] = useState([[]]);
  const [selectedDice, setSelectedDice] = useState([]);
  const [list, setList] = useDictionary([]); //data struction that will only store valid words and non duplicates.

  const selectedWord = selectedDice.map((e) => e.innerHTML).join("");
  const prevDice = useRef(null);

  //Runs after component has been rendered or when props have been updated.
  useEffect(() => {
    initGame();
  }, [boardSize]);

  return (
    <div className="container text-center boggle">
      <GridView grid={gameModel}>
        <Dice selectedDice={selectedDice} onClick={onDiceSelect} />
      </GridView>

      <div>selected: {selectedWord}</div>
      <button className="btn" onClick={checkWordValid}>
        Check
      </button>
      <button className="btn" onClick={clearSelected}>
        Clear
      </button>
      <div>
        <h3>Words</h3>
        {list.map((word, index) => (
          <div key={index}>{word}</div>
        ))}
      </div>
    </div>
  );
};

export default Boggle;
