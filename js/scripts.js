var triangle = function(side1, side2, side3) {
  if ((side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2)) { // general rule that makes it a triangle
    if ((side1 === side2) && (side2 === side3) && (side1 === side3)) {
      return "equilateral";
    } else if ((side1 === side2) || (side2 === side3) || (side3 === side1)) {
      return "isosceles";
    } else if ((side1 !== side2) && (side2 !== side3)  && (side1 !== side3)) {
      return "scalene";
    };
  } else { //if not a triangle
    return "not a triangle";
  };
};
