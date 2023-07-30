// Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

//[understand the] Problem
// input: string;
//output: boolean;
//rules: 
  //explicit:
    //-ignore non alphabetic characters
    //-check to see if all aphabetic characters are already uppercase
    // - if they are, return true
    // - if they are not, return false
  //implicit:
    // - an empty string should return true;

// Examples/Tests
// isUppercase('t');               // false
// isUppercase('T');               // true
// isUppercase('Four Score');      // false
// isUppercase('FOUR SCORE');      // true
// isUppercase('4SCORE!');         // true
// isUppercase('');                // true

//Data Structure
  //use an array to loop through the chars;

//Algorithm
  // split the string into characters, with each character being an element in an array
  // loop through the array to check that the character code point is between certain numbers.
  //if not, return false (guard c;ause)
  // if so, check to see if it is uppercase by using the method, possibly.

//Code
function isUppercase(str) {
let strArr = str.split("");
let allUp = true
  strArr.forEach(el => {
    if (el !== el.toUpperCase()) {
      allUp = false;
    }
  });
  return allUp
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
