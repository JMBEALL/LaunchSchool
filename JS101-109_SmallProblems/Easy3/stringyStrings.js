// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

function stringy(num) {
  let bits = "";
  for ( let index = 1; index <= num; index++) {
    if (index % 2 === 1) {
      bits += "1";
    } else {
      bits += "0";
    }
  }
  return bits;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"