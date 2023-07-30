// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

// [understand the] Problem

// input: String;
// output: String;
// Rules:
  // explicit:
    // - return a string where any duplicate characters are collapsed and only returned once.
  //implicit:
    // -from exmaples we can see we will always take in a string
    // -if given an empty string, return an emoty string
  
// Examples/Tests

// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

// Data Structure
//  use a string that you delcare locally within the function.
  //could option to use an object but it is more difficult. lets keep it simple while we can.

// Algorithm
// accept one parameter, string
//declare a local variable to save your new string in - newString
// loop through argument and see if the last char on the local newString matches the current element.
// set up a conditional
// if it matches use guard clause to continue
// if it is different concatante it onto local variable
// finally return the local newString variable.

//Code

function crunch(str) {
  let newStr = "";
  let strArr = str.split("");

  strArr.forEach(char => {
    if (newStr[newStr.length - 1] !== char) {
      newStr += char;
    }
  });
  return newStr;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""