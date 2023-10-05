//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  const outside = {
    value : 0
  }
  const outerCircle = {
    value : 1, radius : 10
  }
  const middleCircle = {
    value : 5, radius : 5
  }
  const innerCicrle = {
    value : 10, radius : 1
  }
  const targetRadius = 10;
  if (x > 10 || y > 10){
    return 0;
  }
  else if (x < 1 && y < 1){
    return innerCicrle[value];
  }

};
