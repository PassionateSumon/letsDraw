import React, { useContext } from "react";
import classes from "./index.module.css";
import cx from "classnames";
import {
  FaPaintBrush,
  FaPencilAlt,
  FaSlash,
  FaRegCircle,
  FaArrowRight,
  FaEraser,
  FaUndoAlt,
  FaRedoAlt,
  FaDownload,
} from "react-icons/fa";
import { IoText } from "react-icons/io5";
import { LuRectangleHorizontal } from "react-icons/lu";
import boardContext from "../../Store/board-context";
import { TOOL_ITEMS } from "../../constants";

const Toolbar = () => {
  const { activeToolItem, changeToolHandler, undo, redo } =
    useContext(boardContext);

  const clickDownloadHandler = () => {
    const canvas = document.getElementById("canvas");
    const data = canvas.toDataURL("image/jpg");
    const anchor = document.createElement("a");
    anchor.href = data;
    anchor.download = "drawing.jpg";
    anchor.click();
  };

  return (
    <>
      <div className={classes.container}>
        <div
          className={cx(classes.toolItem, {
            [classes.active]: activeToolItem === TOOL_ITEMS.BRUSH,
          })}
          onClick={() => changeToolHandler(TOOL_ITEMS.BRUSH)}
        >
          <FaPaintBrush />
        </div>

        <div
          className={cx(classes.toolItem, {
            [classes.active]: activeToolItem === TOOL_ITEMS.LINE,
          })}
          onClick={() => changeToolHandler(TOOL_ITEMS.LINE)}
        >
          <FaSlash />
        </div>

        <div
          className={cx(classes.toolItem, {
            [classes.active]: activeToolItem === TOOL_ITEMS.RECTANGLE,
          })}
          onClick={() => changeToolHandler(TOOL_ITEMS.RECTANGLE)}
        >
          <LuRectangleHorizontal />
        </div>

        <div
          className={cx(classes.toolItem, {
            [classes.active]: activeToolItem === TOOL_ITEMS.CIRCLE,
          })}
          onClick={() => changeToolHandler(TOOL_ITEMS.CIRCLE)}
        >
          <FaRegCircle />
        </div>

        <div
          className={cx(classes.toolItem, {
            [classes.active]: activeToolItem === TOOL_ITEMS.ARROW,
          })}
          onClick={() => changeToolHandler(TOOL_ITEMS.ARROW)}
        >
          <FaArrowRight />
        </div>

        <div
          className={cx(classes.toolItem, {
            [classes.active]: activeToolItem === TOOL_ITEMS.PENCIL,
          })}
          onClick={() => changeToolHandler(TOOL_ITEMS.PENCIL)}
        >
          <FaPencilAlt />
        </div>

        <div
          className={cx(classes.toolItem, {
            [classes.active]: activeToolItem === TOOL_ITEMS.ERASER,
          })}
          onClick={() => changeToolHandler(TOOL_ITEMS.ERASER)}
        >
          <FaEraser />
        </div>

        <div
          className={cx(classes.toolItem, {
            [classes.active]: activeToolItem === TOOL_ITEMS.TEXT,
          })}
          onClick={() => changeToolHandler(TOOL_ITEMS.TEXT)}
        >
          <IoText />
        </div>

        <div className={classes.toolItem} onClick={() => undo()}>
          <FaUndoAlt />
        </div>

        <div className={classes.toolItem} onClick={() => redo()}>
          <FaRedoAlt />
        </div>

        <div
          className={classes.toolItem}
          onClick={() => clickDownloadHandler()}
        >
          <FaDownload />
        </div>
      </div>
    </>
  );
};

export default Toolbar;
