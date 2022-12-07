import React from "react";
import "./button.css";

const Button = ({ onClick, value }) => {
  return (
    <button className="btn confirm" onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
