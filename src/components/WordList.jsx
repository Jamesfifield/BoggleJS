import React from "react";

const WordList = ({ list, listHeader }) => {
  return (
    <div>
      <h3>{listHeader}</h3>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default WordList;
