// Write a function that returns the next to last word in the String passed to it as an argument.

// Words are any sequence of non-blank characters.

// You may assume that the input String will always contain at least two words.


function penultimate(str) {
  let arr = str.split(" ");
  arr.pop();
  let word = arr.pop();
  return word;
}

console.log(penultimate("last word") === "last");
console.log(penultimate("Launch School is great!") === "is");