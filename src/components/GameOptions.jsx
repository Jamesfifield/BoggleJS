import React from "react";
import { useState } from "react";

export const GameOptions = ({ onChange }) => {
  const [value, setValue] = useState(4);
  return (
    <form>
      <div className="radio">
        <label>
          <input
            type="radio"
            name="gameOption"
            value={4}
            onChange={(e) => {
              onChange(e);
              setValue(4);
            }}
            checked={value === 4}
          />
          4x4
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            name="gameOption"
            value={5}
            onChange={(e) => {
              onChange(e);
              setValue(5);
            }}
            checked={value === 5}
          />
          5x5
        </label>
      </div>
    </form>
  );
};

export default GameOptions;
