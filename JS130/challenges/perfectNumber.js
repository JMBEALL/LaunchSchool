class PerfectNumber {

  static classify(num) {
    let multiples = [];
    if (PerfectNumber.negative(num)) {
      throw new Error('cant be a negative number, try again.')
    }

    for (let index = 1; index < num; index++) {
      if (num % index === 0) {
        multiples.push(index);
      }
    }
    let sum = multiples.reduce((accum,el) => accum + el,0);
    // console.log(sum)
    if (sum < num) {
      return 'deficient'
    } else if (sum === num) {
      return 'perfect'
    } else {
      return 'abundant'
    }
  }

   static negative(num) {
    return num <= 0;
  }

}

// console.log(PerfectNumber.classify(-1))
console.log(PerfectNumber.classify(12));

module.exports = PerfectNumber;