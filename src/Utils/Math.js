import { ELEMENT_ERASE_THRESHOLD } from "../constants";

export const isPointCloseToLine = (x1, y1, x2, y2, pointX, pointY) => {
  const distToStart = distanceBetweenPoints(x1, y1, pointX, pointY);
  const distToEnd = distanceBetweenPoints(x2, y2, pointX, pointY);
  const distLine = distanceBetweenPoints(x1, y1, x2, y2);
  return Math.abs(distToStart + distToEnd - distLine) < ELEMENT_ERASE_THRESHOLD;
};

export const getArrowHeadsCoordinates = (x1, y1, x2, y2, arrowLength) => {
  /* Here we're using simple co-ordinate geometry
   for ArrowHead --> we know [tanθ = y2-y1 / x2-x1]
   so, θ = tan^-1 (y2-y1 / x2-x1)
   And for the angle of headArrow I just set the angle as 20deg or (θ-PI/9);
   then we know for length we can use
   x1 = x + r*cosθ;
   y1 = y + r*sinθ;
   but here we did '-' instead of '+' bcz we want the arrowHead to Backward
   */
  const angle = Math.atan2(y2 - y1, x2 - x1);

  const x3 = x2 - arrowLength * Math.cos(angle - Math.PI / 4);
  const y3 = y2 - arrowLength * Math.sin(angle - Math.PI / 4);

  const x4 = x2 - arrowLength * Math.cos(angle + Math.PI / 4);
  const y4 = y2 - arrowLength * Math.sin(angle + Math.PI / 4);

  return {
    x3,
    y3,
    x4,
    y4,
  };
};

const distanceBetweenPoints = (x1, y1, x2, y2) => {
  const diffX = x2 - x1;
  const diffY = y2 - y1;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};
