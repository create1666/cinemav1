/** @format */

import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./featured.scss";
const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="crime">Crime</option>
            <option value="comedy">Comedy</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="historical">Historical</option>
            <option value="scii-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="romance">Romance</option>
            <option value="documentary">Doumentary</option>
          </select>
        </div>
      )}
      <img
        src="https://i.pinimg.com/originals/39/60/10/396010118a7b68e3d3494ce026d6f416.jpg"
        alt=""
        className="featuredImg"
      />

      <div className="info">
        <img
          src="https://images.unsplash.com/photo-1580852300584-70e7b758608b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGZpbG18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="info__img"
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          ullam hic ratione quibusdam quaerat eaque facere eius labore tempore
          voluptates iure quisquam, quas voluptate molestiae corporis? Eos
          repudiandae eligendi saepe?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
