/** @format */

import React from "react";
import Featured from "../Components/Featured/Featured";
import List from "../Components/list/List";
import NavBar from "../Components/NavBar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      {" "}
      <NavBar />
      <Featured type />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
