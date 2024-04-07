import React, { useContext } from "react";
import classes from "./index.module.css";
import cx from "classnames";
import {
  FaSlash,
  FaPaintBrush,
} from "react-icons/fa";
import boardContext from "../../Store/board-context";
import { TOOL_ITEMS } from "../../constants";

const Toolbar = () => {
  const { activeToolItem, handleToolItem } = useContext(boardContext);

  return (
    <>
      <div className={classes.container}>
        <div
          className={cx(classes.toolItem, {
            [classes.active]: activeToolItem === TOOL_ITEMS.BRUSH,
          })}
          onClick={() => handleToolItem(TOOL_ITEMS.BRUSH)}
        >
          <FaPaintBrush />
        </div>

        <div
          className={cx(classes.toolItem, {
            [classes.active]: activeToolItem === TOOL_ITEMS.LINE,
          })}
          onClick={() => handleToolItem(TOOL_ITEMS.LINE)}
        >
          <FaSlash />
        </div>
      </div>
    </>
  );
};

export default Toolbar;
