// Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

function multiplicativeAverage(arr) {
  let product = arr.reduce((accum,el) => accum * el);
  let fixed = (product / arr.length).toFixed(3);
  return String(fixed);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"