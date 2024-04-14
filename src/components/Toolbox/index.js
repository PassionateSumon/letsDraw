import React from "react";
import classes from "./index.module.css";
import { COLORS } from "../../constants";
import cx from "classnames";
import { useContext } from "react";
import toolboxContext from "../../Store/toolbox-context";
import BoardContext from "../../Store/board-context";

function Toolbox() {
  const { activeToolItem } = useContext(BoardContext);
  const { toolboxState, changeStroke } = useContext(toolboxContext);

  const strokeColor = toolboxState[activeToolItem]?.stroke;

  return (
    <div className={classes.container}>
      <div className={classes.selectOptionContainer}>
        <div className={classes.toolBoxLabel}>Stroke</div>
        <div className={classes.colorsContainer}>
          {/* Here I'm simply doing -->
            as COLORS is an object, so I can't directly map them,
            rather what i can do is, i can map the "Keys" of object
            and when time to choose Background-color, i just take that particular color
            from COLORS...
        */}
          {Object.keys(COLORS).map((k) => {
            return (
              <div
                className={cx(classes.colorBox, {
                  [classes.activeColorBox]: strokeColor === COLORS[k],
                })}
                style={{ backgroundColor: COLORS[k] }}
                onClick={()=>changeStroke(activeToolItem, COLORS[k])}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Toolbox;
