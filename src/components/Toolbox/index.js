import React from "react";
import classes from "./index.module.css";
import {
  COLORS,
  FILL_TOOL_TYPES,
  SIZE_TOOL_TYPES,
  STROKE_TOOL_TYPES,
  TOOL_ITEMS,
} from "../../constants";
import cx from "classnames";
import { useContext } from "react";
import toolboxContext from "../../Store/toolbox-context";
import BoardContext from "../../Store/board-context";

function Toolbox() {
  const { activeToolItem } = useContext(BoardContext);
  const { toolboxState, changeStroke, changeFill, changeSize } =
    useContext(toolboxContext);

  const strokeColor = toolboxState[activeToolItem]?.stroke;
  const fillColor = toolboxState[activeToolItem]?.fill;
  const size = toolboxState[activeToolItem]?.size;

  return (
    <div className={classes.container}>
      {STROKE_TOOL_TYPES.includes(activeToolItem) && (
        <div className={classes.selectOptionContainer}>
          <div className={classes.toolBoxLabel}>Stroke Color</div>
          <div className={classes.colorsContainer}>
            {/* Here I'm simply doing -->
            as COLORS is an object, so I can't directly map them,
            rather what i can do is, i can map the "Keys" of object
            and when time to choose Background-color, i just take that particular color
            from COLORS...
        */}
            <div>
              <input
                className={classes.colorPicker}
                value={strokeColor}
                type="color"
                onChange={(event) =>
                  changeStroke(activeToolItem, event.target.value)
                }
              ></input>
            </div>
            {Object.keys(COLORS).map((k) => {
              return (
                <div
                  key={k}
                  className={cx(classes.colorBox, {
                    [classes.activeColorBox]: strokeColor === COLORS[k],
                  })}
                  style={{ backgroundColor: COLORS[k] }}
                  onClick={() => changeStroke(activeToolItem, COLORS[k])}
                ></div>
              );
            })}
          </div>
        </div>
      )}

      {FILL_TOOL_TYPES.includes(activeToolItem) && (
        <div className={classes.selectOptionContainer}>
          <div className={classes.toolBoxLabel}>Fill Color</div>
          <div className={classes.colorsContainer}>
            {Object.keys(COLORS).map((k) => {
              return (
                <div
                  key={k}
                  className={cx(classes.colorBox, {
                    [classes.activeColorBox]: fillColor === COLORS[k],
                  })}
                  style={{ backgroundColor: COLORS[k] }}
                  onClick={() => changeFill(activeToolItem, COLORS[k])}
                ></div>
              );
            })}
          </div>
        </div>
      )}

      {SIZE_TOOL_TYPES.includes(activeToolItem) && (
        <div className={classes.selectOptionContainer}>
          <div className={classes.toolBoxLabel}>Size</div>
          <div className={classes.colorsContainer}>
            <input
              type="range"
              min={activeToolItem === TOOL_ITEMS.TEXT ? 16 : 1}
              max={activeToolItem === TOOL_ITEMS.TEXT ? 64 : 10}
              step={1}
              value={size}
              onChange={(event) => {
                changeSize(activeToolItem, event.target.value);
              }}
            ></input>
          </div>
        </div>
      )}
    </div>
  );
}

export default Toolbox;
