export const score = (x, y) => {
  const outside = {
    value: 0
  };
  const outerCircle = {
    value: 1, radius: 10
  };
  const middleCircle = {
    value: 5, radius: 5
  };
  const innerCircle = {
    value: 10, radius: 1
  };

  // satz des pythagoras 
  const distanceFromCenter = Math.sqrt(x * x + y * y);

  if (distanceFromCenter <= innerCircle.radius) {
    return innerCircle.value;
  } else if (distanceFromCenter <= middleCircle.radius) {
    return middleCircle.value;
  } else if (distanceFromCenter <= outerCircle.radius) {
    return outerCircle.value;
  } else {
    return outside.value;
  }
};
