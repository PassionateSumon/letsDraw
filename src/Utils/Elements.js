import { ARROW_LENGTH, TOOL_ITEMS } from "../constants";
import rough from "roughjs/bin/rough";
import { getArrowHeadsCoordinates } from "./Math";

const gen = rough.generator();

export const createRoughElement = (id, x1, y1, x2, y2, { type, stroke, fill }) => {
  const element = {
    id,
    x1,
    y1,
    x2,
    y2,
  };
  let options = {
    seed: id + 1, //used for smoothness in the drawing, if not used then it shows the re-creation of the drawing
    fillStyle: "solid",
  };
  if(stroke) {
    options.stroke = stroke;
  }
  if(fill) {
    options.fill = fill;
  }
  switch (type) {
    case TOOL_ITEMS.LINE:
      element.roughEle = gen.line(x1, y1, x2, y2, options);
      return element;
    case TOOL_ITEMS.RECTANGLE:
      element.roughEle = gen.rectangle(x1, y1, x2 - x1, y2 - y1, options);
      return element;
    case TOOL_ITEMS.CIRCLE:
      element.roughEle = gen.ellipse((x1+x2)/2, (y1+y2)/2, x2-x1, y2-y1, options);
      return element;
    case TOOL_ITEMS.ARROW:
      const {x3, y3, x4, y4} = getArrowHeadsCoordinates(x1,y1,x2,y2,ARROW_LENGTH);
      const points = [
        [x1,y1],
        [x2,y2],
        [x3,y3],
        [x2,y2],
        [x4,y4],
      ];
      element.roughEle = gen.linearPath(points, options);
      return element;
    default:
      throw new Error("Type not recognized");
  }
};
