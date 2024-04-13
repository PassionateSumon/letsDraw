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

  const x3 = x2 - arrowLength * Math.cos(angle - Math.PI / 9);
  const y3 = y2 - arrowLength * Math.sin(angle - Math.PI / 9);

  const x4 = x2 - arrowLength * Math.cos(angle + Math.PI / 9);
  const y4 = y2 - arrowLength * Math.sin(angle + Math.PI / 9);

  return {
    x3,
    y3,
    x4,
    y4,
  };
};