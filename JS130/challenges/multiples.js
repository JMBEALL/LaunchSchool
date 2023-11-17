class SumOfMultiples {
  constructor( ...nums) {
    // this.natural = natural;
    this.nums = nums ? nums : [3,5];
    this.multiples = []
  }

   to(num) {
    for (let index = 0; index < this.nums.length; index ++) {
      // console.log(this.nums[index])
      for (let j = this.nums[index]; j < num; j += this.nums[index]) {
        console.log(`index: ${index}j: ${j}`)
        if (!(this.multiples.includes(j))) {
          this.multiples.push(j)
        }
      }
      console.log(this.multiples)
    }
    return this.multiples.reduce((accum,el) =>  accum + el, 0)
   }

   static to(num) {
    let arr = [3,5];
    let multiples = [];

    for (let index = 0; index < arr.length; index ++) {
      // console.log(this.nums[index])
      for (let j = arr[index]; j < num; j += arr[index]) {
        // console.log(`index: ${index}j: ${j}`)
        if (!(multiples.includes(j))) {
          multiples.push(j)
        }
      }
      console.log(this.multiples)
    }
    return multiples.reduce((accum,el) =>  accum + el, 0)

   }
}

//testing early and often ;)

let obj = new SumOfMultiples(7, 13, 17);

console.log(obj)
console.log(obj.to(20));

module.exports = SumOfMultiples;