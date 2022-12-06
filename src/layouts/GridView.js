import React from "react";

const GridView = ({ grid, children }) => {
  return grid.map((row, rowIndex) => (
    <div className="row" key={rowIndex}>
      {row.map((bucket, colIndex) => (
        <div className="col" key={colIndex}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                position: { row: rowIndex, col: colIndex },
              });
            }

            return child;
          })}
        </div>
      ))}
    </div>
  ));
};

export default GridView;

{
  /* <Dice
  selectedDice={selectedDice}
  key={colIndex}
  onClick={onDiceSelect}
  position={{ row: rowIndex, col: colIndex }}
/>; */
}
