//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
    

  }

  get isEquilateral() {
    // all sides are equal
    return this.sides[0] !== 0 && 
           this.sides[1] !== 0 && 
           this.sides[2] !== 0 && 
           this.sides[0] === this.sides[1] && 
           this.sides[1] === this.sides[2];

      
  }

  get isIsosceles() {
    // at least 2 sides same length
           // checks  that no side is 0
    return this.sides[0] !== 0 && 
           this.sides[1] !== 0 && 
           this.sides[2] !== 0 &&
           // checks if a + b > c ...
           this.sides[0] + this.sides[1] > this.sides[2] &&
           this.sides[0] + this.sides[2] > this.sides[1] &&
           this.sides[1] + this.sides[2] > this.sides[0] &&
           //checks if a - b < c ...
           this.sides[0] - this.sides[1] < this.sides[2] &&
           this.sides[0] - this.sides[2] < this.sides[1] &&
           this.sides[1] - this.sides[2] < this.sides[0] &&
           // checks if any sides are equal
           (this.sides[0] === this.sides[1] ||
           this.sides[0] === this.sides[2] ||
           this.sides[1] === this.sides[2]);
  }

  get isScalene() {
    // all sides different
    return this.sides[0] !== 0 && 
           this.sides[1] !== 0 && 
           this.sides[2] !== 0 &&
           // checks if a + b > c ...
           this.sides[0] + this.sides[1] > this.sides[2] &&
           this.sides[0] + this.sides[2] > this.sides[1] &&
           this.sides[1] + this.sides[2] > this.sides[0] &&
           //checks if a - b < c ...
           this.sides[0] - this.sides[1] < this.sides[2] &&
           this.sides[0] - this.sides[2] < this.sides[1] &&
           this.sides[1] - this.sides[2] < this.sides[0] &&
           //checks if all sides are different
           this.sides[0] !== this.sides[1] &&
           this.sides[1] !== this.sides[2];
  }
}
