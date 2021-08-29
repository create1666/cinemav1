/** @format */

import { PlayArrow } from "@material-ui/icons";
import { imgBg } from "./Assets/img";
import "./ListItem.scss";

export const ListItem = () => {
  const { img } = imgBg;
  return (
    <div className="listItem ">
      <img src={img} alt="" className="listItemImg" />
      <div className="infoIcons">
        <div className="icons">
          <PlayArrow />
        </div>
      </div>
    </div>
  );
};
