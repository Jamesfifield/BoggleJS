import React from "react";
import "./styles/wordlist.css";

const WordList = ({ list, listHeader }) => {
  return (
    <div className="wordList" data-testid="testid">
      <h3>{listHeader}</h3>
      {list.map((item, index) => (
        <div role="listItem" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default WordList;
