/** @format */

import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import React, { useRef, useState } from "react";
import "./List.scss";
import { ListItem } from "../lisItem/ListItem";
import { imgBg } from "../lisItem/Assets/img";

const List = () => {
  const listRef = useRef();
  let [sliderNumber, setSliderNumber] = useState(0);
  let [isTranslate, setTranslate] = useState(false);

  const handleClick = (paramet) => {
    setTranslate(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (paramet === "left" && sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (paramet === "right" && sliderNumber < 5) {
      setSliderNumber(sliderNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    console.log("ex=", distance);
  };

  return (
    <div className="list">
      <span className="listTtile">Continue to watch</span>
      <div className="wrapper">
        <div>
          {" "}
          <ArrowBackIosOutlined
            className="slideArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !isTranslate && `none` }}
          />
        </div>
        <div className="container" ref={listRef}>
          <ListItem {...imgBg} />
          <ListItem {...imgBg} />
          <ListItem {...imgBg} />
          <ListItem {...imgBg} />
          <ListItem {...imgBg} />
          <ListItem {...imgBg} />
          <ListItem {...imgBg} />
          <ListItem {...imgBg} />
          <ListItem {...imgBg} />
          <ListItem {...imgBg} />
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
