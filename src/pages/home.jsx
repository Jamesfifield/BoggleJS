import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  return (
    <div>
      <h1>Welcome to BoggleJS</h1>
      <Link to={"/game"} className="btn">
        start
      </Link>
    </div>
  );
};

export default Home;
