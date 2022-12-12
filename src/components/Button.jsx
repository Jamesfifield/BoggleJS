import React from "react";
import "./styles/button.css";

const Button = ({ onClick, value }) => {
  return (
    <button className="btn confirm" onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
