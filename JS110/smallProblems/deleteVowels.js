// Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

//[understand the] Problem
//input: array of elements;
//output: array of elements with any vowels removed
// Rules:
  //explicit:
    //-all vowels are removed from the strings within the array
    //- character case does not matter, remove all vowels regardless of case
    //return a new array (this could be a good question to confirm with the interviewer);

//Examples/Tests
// removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
// removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
// removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

//Data Structure
  // we are working with an array so should continue to work with one. 

//Algorithm
  //create a function labeled removeVowels that accepts one argument, an array
  //declare an empty array literal that has local scope
  //iterate through the array and split each element into an array of chars and remove any vowels
  //return locally scoped aray delcared at beginning

  //Code

// function removeVowels(arr) {
//   arr.map( el => {
//     let newStr = "";
//     let elArr = el.split("");
//     elArr.forEach( char => {
//       if (!"aeiouAEIOU".includes(char)){
//         newStr += char;
//       }
//       return newStr;
//     })

//   });

// }

// function removeVowels(arr) {
//   let noVowelsArr = [];
//   let newStr = "";
//   for (let index = 0; index < arr.length ; index++) {
//     let el = arr[index].split("");
//     for ( let j = 0; j < el.length ; j++){
//       if(!"aeiouAEIOU".includes(el[j])){
//         newStr += el[j]
//       }
//     }

//   }
// }

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]