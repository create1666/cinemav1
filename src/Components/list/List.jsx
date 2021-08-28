/** @format */

import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import React, { useRef } from "react";
import "./List.scss";
import { ListItem } from "../lisItem/ListItem";

const List = () => {
  const listRef = useRef();

  const handleClick = (paramet) => {
    let distance = listRef.current.getBoundingClientRect().x;

    if (paramet === "left") {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (paramet === "right") {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    console.log("ex=", distance);
  };

  console.log("hzndleclic", handleClick);

  return (
    <div className="list">
      <span className="listTtile">Continue to watch</span>
      <div className="wrapper">
        <div>
          {" "}
          <ArrowBackIosOutlined
            className="slideArrow left"
            onClick={() => handleClick("left")}
          />
        </div>
        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <div>
          {" "}
          <ArrowForwardIosOutlined
            className="slideArrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default List;
