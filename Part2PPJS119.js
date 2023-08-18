// function smallerNumbersThanCurrent(arr) {
//   let unique = [];
//   for (let index = 0; index < arr.length; index++) {
//     if (!unique.includes(arr[index])) {
//       unique.push(arr[index]);
//     }
//   }
//   // console.log(arr);
//   // console.log(unique);
//   return arr.map(el => {
//     let count = 0;
//     for ( let index = 0; index < unique.length; index++) {
//       if (el > unique[index]) {
//         count++;
//       }
//     }
//     return count;
//   })
 
// }

// // Given an array of numbers, for each number, find out how
// // many numbers in the array are smaller than it. When
// // counting numbers, only count unique values. That is, if a
// // given number occurs multiple times in the array, it
// // should only be counted once.

// // Examples:

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
// console.log(smallerNumbersThanCurrent(
//   [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
// console.log(smallerNumbersThanCurrent([1])); // [0]





// function toWeirdCase(str) {
//   let newStr = "";
//   let arr = str.split(" ");
//   for (let index = 0; index < arr.length; index++) {
//     if (index % 2 !== 0) {
//       for (let j = 0; j < arr[index].length ; j++) {
//         if ((j+1) % 4 === 0 && j !== 0) {
//           newStr += arr[index][j].toUpperCase();
//         } else {
//           newStr += arr[index][j];
//         }
//       }
//       // newStr += arr[index].toUpperCase() + " ";
//     } else {
//       newStr += " " + arr[index] + " ";
//     }
//   }
//   // console.log(newStr)
//   return newStr.trimStart();
// }
// // Write a function named toWeirdCase that accepts a string,
// // and returns the same sequence of characters with every
// // 4th character in every second word converted to
// // uppercase. Other characters should remain the same.

// // Examples:

// console.log(
//   toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
//               'Lorem IpsUm is simPly dummy texT of the printing worLd');
// console.log(
//   toWeirdCase('It is a long established fact that a reader will be distracted') ===
//               'It is a lonG established facT that a reader wilL be disTracTed');
// console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
// console.log(
//   toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
//               'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// // // The tests above should print "true".

// // function testing(str) {
// //   let newStr = "";
// //   for(let index = 0; index < str.length; index++) {
// //     if(index % 3 === 0) {
// //       newStr += str[index].toUpperCase();
// //     } else {
// //       newStr += str[index];
// //     }
// //   }
// //   console.log(newStr)
// // }
// // testing("jordan beall is here")

// function leastCommonChar(str) {
//   let lowercase = str.toLowerCase().split("");
//   // console.log(lowercase);
//   let cache = {};
//   for (let index = 0; index < lowercase.length; index++) {
//    if (!cache[lowercase[index]]) {
//     cache[lowercase[index]] = 1;
//    } else {
//     cache[lowercase[index]]++;
//    }
//   }
//   // console.log(cache);
//   let most = Infinity;
//   let key1 = ""
//   for (key in cache) {
//     if(cache[key] === key1) {
//       continue;
//     } else if (cache[key] < most) {
//       most = cache[key];
//       key1 = key;
//     }
//   }
//   // console.log(key1)
//   return key1;
// }

// // Write a function that takes a string as an argument and
// // returns the character that occurs least often in the
// // given string. If there are multiple characters with the
// // same lowest number of occurrences, then return the one
// // that appears first in the string. When counting
// // characters, consider uppercase and lowercase versions to
// // be the same.

// // Examples:

// console.log(leastCommonChar("Hello World") === "h");
// console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
//                             "t");
// console.log(leastCommonChar("Mississippi") === "m");
// console.log(leastCommonChar("Happy birthday!") === ' ');
// console.log(leastCommonChar("aaaaaAAAA") === 'a');

// // The tests above should each log "true".

// let colors = ['green', 'blue', 'purple', 'orange'];

// for ( color of colors) {
//   console.log(color);
// }

// let mixed = ['hello' , 10, undefined];

// for ( el of mixed) {
//   console.log(typeof el);
// }

// let numberOfPets = {
//   dogs: 2,
//   cats: 4,
//   fish: 1
// };

// for (key in numberOfPets) {
//   console.log(`I have ${numberOfPets[key]} ${key}.`);
// }


// function substrings(str) {
//   let result = [];             // Initialize an empty array to store the substrings.
//   let startingIndex = 0;       // Initialize the starting index for substring extraction.

//   while (startingIndex <= str.length - 2) {
//     let numChars = 2;          // Initialize the length of substrings to extract.

//     while (numChars <= str.length - startingIndex) {
//       let substring = str.slice(startingIndex, startingIndex + numChars); // Extract the substring.
//       result.push(substring);  // Add the extracted substring to the result array.
//       numChars += 1;           // Increment the length of substrings for the next iteration.
//     }

//     startingIndex += 1;        // Increment the starting index for the next iteration.
//   }

//   return result;              // Return the array containing all the extracted substrings.
// }

// console.log(substrings("Jordan"));

// function substrings(str) {
//   let finalArr = [];
//   for (let index = 0; index <= str.length - 3; index++) {
//     for (let j = 3;  j <= str.length - index; j++){
//       finalArr.push(str.slice(index, index + j))
//     }
//   }
//   return finalArr;
// }
// console.log(substrings("Jordan"));
// function palindromeSubstrings(str) {
//   let arr = substrings(str);
//   // console.log(arr);
//   return arr.filter(el => el === el.split("").reverse().join(""));
// }
// function substrings(str) {
//   let finalArr = [];
//   for (let index = 0; index <= str.length - 1; index++) {
//     for (let j = 2 ; j <= str.length - index; j++) {
//       finalArr.push(str.slice(index, index + j))
//     }
//   }
//   return finalArr;
// }

// // console.log(substrings("Jordan"))

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious")); // ["ili"]
// console.log(palindromeSubstrings("abcddcbA"));   // ["bcddcb", "cddc", "dd"]
// console.log(palindromeSubstrings("palindrome")); // []
// console.log(palindromeSubstrings(""));           // []


// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };


// function selectFruit(produce) {
// let newObj ={};

// for (key in produce) {
//   if (produce[key] === "Fruit") {
//     newObj[key] = produce[key];
//   }
// }
// return newObj;
// }

// console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
// console.log(produce);

// let myNumbers = [1, 4, 3, 7, 2, 6];
// function doubleNumbers(arr) {
//   arr.forEach((el,index) => {
//     arr[index] = el * 2;
//   })
//   return arr;
// }
// console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
// console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]


// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// console.log(Math.min(...Object.values(ages)));


// let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

// console.log(scores.sort((a,b) => {
//   return a.reduce((accum,el) => accum + el) - b.reduce((accum,el) => accum + el);

// }))

// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// arr.map((arr) => {
//   if (typeof arr[0] === 'string'){
//     return arr.sort().reverse();
//   } else {
//     return arr.sort((a,b) => b - a);
//   }
// })

// console.log(arr);

// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
// let newArr = JSON.stringify(arr);
// let useMe = JSON.parse(newArr);

// console.log(useMe.map(obj => {
//   for (let key in obj) {
//     obj[key]++;
//   }
//   return obj;
// }))

// console.log(arr);

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

console.log(arr.map(nestArr => {
  return nestArr.filter(el => el % 3 === 0);
}))