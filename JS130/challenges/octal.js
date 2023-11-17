
class Octal {
  constructor(str) {
    this.str = str;
  }

  toDecimal() {
    if (!this.validate(this.str)) {
      return 0
    }
    let split = this.str.split("").map(el => +el).reverse();
    // console.log(split)
    let nums = [];
    for (let index = 0; index < split.length; index++) {
      let final = split[index] * (8 ** index)
      nums.push(final)
    }
      return nums.reduce((accum, el) => accum + el , 0)
  }

  // helper functions to ensure I am not polluting toDecimal with too many lines of code. Delegate and hand work off.

  validate(arg) {
    //numbers must be less than 7 and type of must be a number
    let testData = arg.split("");

    let trueNum = typeof +arg === "number";

    let numsSmallerThanSeven = testData.every(el => +el <= 7)
    console.log(numsSmallerThanSeven)
    
    return trueNum && numsSmallerThanSeven
  }
}

let test = new Octal('1234567');
console.log(test.toDecimal())

module.exports = Octal;