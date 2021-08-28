import {
  ArrowDropDown,
  NotificationsRounded,
  Search,
} from "@material-ui/icons";
import React, { useEffect } from "react";
import { useState } from "react";
import "./NavBar.scss";
import classNames from "classnames/bind";

const NavBar = () => {
  const [isScrollled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setScrolled(window.pageYOffset === 0 ? false : true);
    };
  }, []);

  return (
    <div className={classNames("Navbar", { " Navbar Scrolled": isScrollled })}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg"
            alt=""
            className="navbarImg"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Kids</span>
          <NotificationsRounded className="icon" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg"
            alt=""
            className="rightImg"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Login</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
