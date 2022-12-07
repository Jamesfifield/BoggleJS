import React from "react";
import "./wordlist.css";

const WordList = ({ list, listHeader }) => {
  return (
    <div className="wordList">
      <h3>{listHeader}</h3>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default WordList;
