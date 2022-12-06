import React, { useEffect, useState, useRef } from "react";
import Dice from "./dice.component";
import Countdown, { CountdownApi } from "react-countdown";
import { useLocation, useNavigate } from "react-router-dom";

import gameUtils from "../utils/gameUtils";
import GridView from "../layouts/GridView";

import { useDictionary } from "../hooks/useDictionary";

import "./boggle.style.css";
import Timer from "./Timer";
import WordList from "./WordList";
import Button from "./Button";
import DisplayUserInput from "./DisplayUserInput";
import Navbar from "./navbar.component";

const config = {
  defaultSize: 4,
  timerInSeconds: 90,
};

const Boggle = () => {
  const boardSize = useLocation().state?.gameSize || config.defaultSize;

  const initGame = () => {
    clearSelected();
    setList([]);
    setGameModel(gameUtils.get2DArray(boardSize));
  };

  const clearSelected = () => {
    prevDice.current = null;
    setSelectedDice([]);
  };

  //2. Create word
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

    //Have to remove dice in order or by clearing all. At this stage do nothing.ddsd
  };

  const checkWordValid = () => {
    setList([...list], selectedWord);
    clearSelected();
  };

  const [gameModel, setGameModel] = useState([[]]);
  const [selectedDice, setSelectedDice] = useState([]);
  const navigate = useNavigate();
  const [list, setList] = useDictionary([]); //data struction that will only store valid words and non duplicates.

  const selectedWord = selectedDice.map((e) => e.innerHTML).join("");
  const prevDice = useRef(null);

  //Runs after component has been rendered or when props have been updated.
  useEffect(() => {
    initGame();
  }, [boardSize]);

  return (
    <div className="container text-center boggle">
      <Navbar onClick={() => ""} />
      <DisplayUserInput input={selectedWord} />
      <GridView grid={gameModel}>
        <Dice selectedDice={selectedDice} onClick={onDiceSelect} />
      </GridView>

      <Button onClick={checkWordValid} value={"Check"} />
      <Button onClick={clearSelected} value={"Clear"} />
      <WordList list={list} listHeader={"Correct Words"} />
      <Timer
        countdown={config.timerInSeconds}
        onComplete={() =>
          navigate("/gameover", { state: { data: list, gameSize: boardSize } })
        }
      />
    </div>
  );
};

export default Boggle;
