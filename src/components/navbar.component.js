import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ onClick }) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Boggle
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
