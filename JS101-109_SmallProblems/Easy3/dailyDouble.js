// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

function crunch(str) {
  let strArr = str.split("");
  let newStr = "";
  for (let index = 0; index < strArr.length; index++){
    if (strArr[index] !== str[index + 1]) {
    newStr += strArr[index];
    }
  }
  return newStr;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""