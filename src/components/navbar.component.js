import React from "react";
import { NavLink } from "react-router-dom";

import "./styles/navbar.css";

const Navbar = ({ onClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <NavLink className="navbar-brand" to="/">
          Boggle
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
