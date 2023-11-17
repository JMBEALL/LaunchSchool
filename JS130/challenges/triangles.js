class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;

    if (this.bad()) throw new Error();
  }
// main function
//call helper functions inside that are on the function prototype
  kind() {
    //calling all to make sure all sides are greater than 0 and they follow sum rules of two sides being greater than third
    if (this.all()) {
      //checks each statement to see which block to enter by using helper functins to check the sides of the triangle.
      if(this.side1 === this.side2 && this.side2 === this.side3) {
        return 'equilateral'
      } else if (this.diff()) {
        return 'scalene'
      } else if (this.two()) {
        return 'isosceles'
      }
    } 
    // originally had throw new error here ... but after looking at solution notived it should not be here and should be in constructor.
    // else {
    //   throw new Error();
    // }
  }
//helper 1
  all() {
    return (this.side1 > 0 && this.side2 > 0 && this.side3 > 0) && ((this.side1 + this.side2 > this.side3) || (this.side1 + this.side3 > this.side2) || (this.side2 + this.side3 > this.side1))
  }

  //helper 2
  diff() {
    return this.side1 !== this.side2 && this.side2 !== this.side3 && this.side1 !== this.side3
  }

  //helper 3
  two() {
    return (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3)
  }

  bad() {
    return (this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0) || ((this.side1 + this.side2 <= this.side3) || (this.side1 + this.side3 <= this.side2) || (this.side2 + this.side3 <= this.side1))
  }

}

//exporting the class so we have access to it in the testing file
module.exports = Triangle;