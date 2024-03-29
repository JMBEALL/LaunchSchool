const e = require('cors');
const readline = require('readline-sync');

// Starting shortly...
// Please press "Start Call" on the bottom left when ready!

/*
What is PEDAC?
--------------
Problem solving framework developed by Launch School to address the "two-layered problem".

Two-layered problem:

- Simultaneously thinking about:
  1. Learning about how to go on and solve the problem
  2. Code syntax, structure, language nuances

PEDAC separates these processes by breaking them down.

--------------


Understanding the [P]roblem
===========================
Input:
  - Two numbers

Output:
  - An array of `s` numbers

Rules/Important Points:
  - Palindrome:
    - Palindromes must have greater than 1 length
    - Sequence that reads the same forward and backwards
  - Palindrome will end up being always greater or equal to 0
  - If the argument is palindrome, it should be included in the result
  - Result array should have `s` number of palindrome starting from `num`
  - If either input is not a number or is less than 0, return "Not valid"
  - If `s` is 0, we still have to return an empty array


[E]xamples/Test Cases
=====================

We're looking to the examples/test cases provided to:

  1) Confirm our understanding of the problem
  2) Checking for implicit requirements (requirements that are not explicitly stated in the problem statement), IF ANY

-- Intermission Step: Mental Model --

Do I have a high-level understanding of *WHAT* I have to do to get from input to output?

If you don't have a mental model:

Gradation
---------
6,4 -> [] -> 6 -> 7 -> 8 -> 9 -> 10 -> 11 -> 12 -> 13 -> [11] -> [11, 22] -> [11, 22, 33] -> [11, 22, 33, 44] length 4

- Create an array, iterate through `num` until array is length 4, add palindromes only to array



[D]ata Structure
================
Do I need an array and/or object for my solution? 

- array


[A]lgorithm
===========
- The right level of detail:
  - You can translate it directly into code
  - If not, maybe a helper function is necessary
  - Should not have any specific syntax or methods
    O Iterate through values until reaches x, from x to z
    X Use forEach
    X Use map
    X Use for loop, while
  


- HOW to get from input to output

Two-layered problem:

- Simultaneously thinking about:
X 1. Learning about how to go on and solve the problem
  2. Algorithmic, computer-like thinking


6,4 -> [] 
- Declare `result` and initialize to []

-> 6 -> 7 -> 8 -> 9 -> 10 -> 11 -> 12 -> 13 -> 
- Iterate through numbers starting from `num`

- If the current value is a palindrome, add it to `result`
[11]

- When `result` hits length of `s`, end iteration

- Return `result`

-> [11, 22] -> [11, 22, 33] -> [11, 22, 33, 44] length 4


Palindrome
----------
input: number
output: boolean
rules: values are same forwards and backwards

- forwards
- backwards

1 -> false
11 -> "11" -> "" -> "1" -> "11" -> "11" === "11" -> true
11 -> "11" -> ["1", "1"] -> ["1", "1"] -> true
123 -> "123" -> ["1", "2", "3"] -> ["3", "2"," 1"] -> "321" -> false
123 -> "123" -> "" -> "3" -> "32" -> "321" -> "321" !== "123" -> false


Data structure:


---

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332 
110011 
54322345

You'll be given 2 numbers as arguments: (num, s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count. 

Return "Not valid" instead if any one of the inputs is not a number or is less than 0.

Single digit numbers will NOT be considered numerical palindromes.
*/


//Understand the [P]roblem:
  //input: 2 numbers labeled num and s.
  //output: array of `s` length

  // Rules:
    //Explicit (stated in the problem itself):
      //-return an array of `s` length;
      //-if num that is passed in is a palindrome, include it in the returned array. 
      //- following plaindromes need to be greater than num
      //-if either of the inputs type is something other than `number` return the string `NOT VALID`
      //-If either number is less than zero, return the string `NOT VALID`
      //-Single digit nums will not be considered, so palindrome will neeed to be 2 chars in lenght.
    //Implicit (implied by studying test cases):
      //-if the `s` passed in is `0` return an empty array

//[E]xamples/Test Cases

// [D]ata Structure

//Mental Model
  //1) declare a function that takes in 2 params
  //2) check my edge cases: 
        //if either arg are string
          //return `NOT VALID`
        //if `s` === 0
          //return empty array;
        //if either args are less than 0
          //return `NOT VALID`
        // if num is less than 10
          //reassign num to the value of 10
  //2) declare and create an empty array
  //3) loop through numbers one by one until I add enough numbers (that are palindromes) into the array. 
    //use conditional logic to check the length of the array each loop
    // if the length has not been met, check the next index to see if it is a palindrom
    // stringify the index and reverse it so we can compare if it reads the same backward and forward.
    //if it is true; push it into the array
    //if not, move onto the next iteration;

// function palindrome(num, s) {
//   if ((typeof num === 'string' || typeof s === "string") || (num < 0 || s < 0)) {
//     return  "NOT VALID";
//   }
//   if (num < 10) {
//     num = 10;
//   }
//   let palindromArr = [];
//   for (let index = num; index < Infinity; index++) {
//     if (palindromArr.length === s) {
//       return palindromArr;
//     } else if ( index === +(String(index).split("").reverse().join(""))) {
//       palindromArr.push(index);
//     }
//   }
// }


// console.log(palindrome(6,4));
// // [11,22,33,44]
// console.log(palindrome(75,1));
// // [77]
// console.log(palindrome(101,2));
// // [101,111]
// console.log(palindrome(20,0));
// // []
// console.log(palindrome(0,4));
// // [11,22,33,44]

// console.log(palindrome("ACCDDCCA",3));
// // "Not valid"
// console.log(palindrome(773,"1551"));
// // "Not valid"
// console.log(palindrome(-4505,15));
// // "Not valid"
// console.log(palindrome(4505,-15));
// "Not valid"


// function sum(num) {
//   return String(num).split("").reduce((accum,el) => accum + +el, 0)
// }

// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45

// function multiplyAllPairs(arr1,arr2) {
//   let arr= [];
//   for (let index = 0; index < arr1.length; index++) {
//     for (let j = 0; j < arr2.length; j++) {
//       arr.push(arr1[index] * arr2[j]);
//     }
//   }
//   return arr.sort((a,b) => a - b);
// }

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

// function leadingSubstrings(str) {
//   let subs = [];
//   for (let start = 0; start < str.length; start++) {
//     subs.push(str.slice(0, start + 1));
//   }
//   return subs;
// }

// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


// function substrings(str) {
//   let subs = [];
//   for (let start = 0; start < str.length; start++) {
//     for (let chars = 2; chars <= str.length - start; chars++) {
//       subs.push(str.slice(start, start + chars));
//     }
//   }
//   return subs;
// }

// function palindromes(str) {
//   let answer = substrings(str);
//   let final = [];
//   answer.forEach(el => {
//     if (isPalindrome(el)) {
//       final.push(el)
//     }
//   })
//   return final;
// }

// function isPalindrome(str){
//   return str === str.split("").reverse().join("");
// }

// console.log(palindromes('abcd'));       // []
// console.log(palindromes('madam'));      // [ "madam", "ada" ]

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes('knitting cassettes'));
// // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]


// function sumOfSums(arr) {
// let sum = 0;
// for (let start = 0; start < arr.length; start++) {
//   sum += arr.slice(0, start + 1).reduce((accum,el) => {
//     return accum + el;
//   })
// }
// return sum;
// }

// console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

// function buyFruit(arr) {
//   let arr1 = [];
//   arr.forEach(sub => {
//     console.log(sub);
//     for (let index = 1; index <= sub[1]; index++) {
//       arr1.push(sub[0]);
//     }
//   })
//   return arr1;
// }

// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// // returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// function transactionsFor(id,arr) {
// return arr.filter(obj => obj.id === id)
// }


// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                      { id: 105, movement: 'in',  quantity: 10 },
//                      { id: 102, movement: 'out', quantity: 17 },
//                      { id: 101, movement: 'in',  quantity: 12 },
//                      { id: 103, movement: 'out', quantity: 20 },
//                      { id: 102, movement: 'out', quantity: 15 },
//                      { id: 105, movement: 'in',  quantity: 25 },
//                      { id: 101, movement: 'out', quantity: 18 },
//                      { id: 102, movement: 'in',  quantity: 22 },
//                      { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(transactionsFor(101, transactions));
// // returns
// // [ { id: 101, movement: "in",  quantity:  5 },
// //   { id: 101, movement: "in",  quantity: 12 },
// //   { id: 101, movement: "out", quantity: 18 }, ]


// function isItemAvailable(id, arr) {
//   let sum = 0;
// arr.filter(obj => obj.id === id).forEach(obj => {
//     if(obj.movement === "in") {
//       sum += obj.quantity
//     } else if (obj.movement === "out") {
//       sum -= obj.quantity
//     }
//   })
//   return sum >= 0;
// }

// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                      { id: 105, movement: 'in',  quantity: 10 },
//                      { id: 102, movement: 'out', quantity: 17 },
//                      { id: 101, movement: 'in',  quantity: 12 },
//                      { id: 103, movement: 'out', quantity: 20 },
//                      { id: 102, movement: 'out', quantity: 15 },
//                      { id: 105, movement: 'in',  quantity: 25 },
//                      { id: 101, movement: 'out', quantity: 18 },
//                      { id: 102, movement: 'in',  quantity: 22 },
//                      { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(isItemAvailable(101, transactions));     // false
// console.log(isItemAvailable(103, transactions));     // false
// console.log(isItemAvailable(105, transactions));     // true
// function isUppercase(str) {
// return str === str.toUpperCase();
// }

// console.log(isUppercase('t'));               // false
// console.log(isUppercase('T'));               // true
// console.log(isUppercase('Four Score'));      // false
// console.log(isUppercase('FOUR SCORE'));      // true
// console.log(isUppercase('4SCORE!'));         // true
// console.log(isUppercase(''));                // true
// function removeVowels(arr) {
// return arr.map(word => {
//   return word.replace(/[aeiou]/ig, "");
// });
// }

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

// function letterCaseCount(str) {
// let obj = {'lowerase' : 0, 'uppercase' : 0, 'neither' : 0};
// str.split("").forEach(el => {
//   if ((/[a-z]/).test(el)) {
//     obj.lowerase++
//   } else if (/[A-Z]/.test(el)) {
//     obj.uppercase++
//   } else {
//     obj.neither++
//   }
// })
// return obj;
// }

// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

// function wordCap(str) {
//   return str.split(" ").map(word => {
//     return word[0].toUpperCase() + word.slice(1).toLowerCase();
//   }).join(" ");
// }

// console.log(wordCap('four score and seven'));       // "Four Score And Seven"
// console.log(wordCap('the javaScript language'));    // "The Javascript Language"
// console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'


// function swapCase(str) {
//   return str.split("").map(el => {
//     if (/[a-z]/.test(el)) {
//       return el.toUpperCase();
//     } else if (/[A-Z]/.test(el)) {
//       return el.toLowerCase();
//     } else {
//       return el;
//     }
//   }).join("");
// }
// console.log(swapCase('CamelCase'));              // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

// function staggeredCase(str) {
//   let count = 1
//   return str.split("").map((el,index) => {
//     if(/[a-zA-Z]/.test(el)) {
//       count++
//       if (count % 2 === 0) {
//         return el.toUpperCase();
        
//       } else {
//         return el.toLowerCase();
//       }
//     }
//     else {
//       return el;
//     }
//   }).join("");
// }

// console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

// function wordLengths(str) {
//   if (str === "" || str === undefined) return [];

//   return str.split(" ").map(word => {
//     return `${word} ${word.length}`;
//   });
// }

// console.log(wordLengths('cow sheep chicken'));
// // ["cow 3", "sheep 5", "chicken 7"]

// console.log(wordLengths('baseball hot dogs and apple pie'));
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// console.log(wordLengths("It ain't easy, is it?"));
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// console.log(wordLengths('Supercalifragilisticexpialidocious'));
// // ["Supercalifragilisticexpialidocious 34"]

// console.log(wordLengths(''));      // []
// console.log(wordLengths());        // []

// function searchWord(word, par) {
//   let regex = new RegExp(`${word}`, "ig");
//   return par.match(regex).length;
// }

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// // console.log(searchWord('sed', text));      // 3
// function searchWord(word,par) {
// let regex = new RegExp(word, "ig");
// return par.split(" ").map(el => {
//   if (el.toLowerCase() === word.toLowerCase()) {
//     return `**${el.toUpperCase()}**`;
//   } else {
//     return el;
//   }
// }).join(" ")
// }

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

// console.log(searchWord('sed', text));
// // returns
// // "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"

// function rotateArray(arr) {
//   if (!Array.isArray(arr)) return undefined;
//   if (arr.length === 0) return [];
//   let copy = arr.slice();
//   console.log(arr)
//   console.log(copy);
//   return [...copy.slice(1), copy[0]];
//   // return copy.slice(1).concat(copy[0]);
// }

// console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
// console.log(rotateArray(['a']));                    // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([]));                       // []

// // return `undefined` if the argument is not an array
// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined


// // the input array is not mutated
// let array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]


// function rotateRightmostDigits(num, count) {
// let str = String(num);
// console.log({num});
// console.log({count})
// let left = str.slice(0, str.length - count);
// console.log({left})
// let right = str.slice(str.length - count);
// console.log({right})
//  return +(left + right.slice(1) + right[0])
// }

// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917






// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.
// function smallerNumbersThanCurrent(arr) {
//   let unique = uniqueNums(arr);

//   return arr.map(el => {
//     return unique.filter(el2 => el2 < el).length;
//   })
// }
// function uniqueNums(arr) {
//   let final = [];
//   arr.forEach(el => {
//     if (!final.includes(el)) {
//       final.push(el)
//     }
//   })
//   return final;
// }
// // Examples:

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
// console.log(smallerNumbersThanCurrent(
//   [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
// console.log(smallerNumbersThanCurrent([1])); // [0]

// function minimumSum(arr) {
//   if (arr.length < 5) return null;
//   let arrs = [];
//   let sum = Infinity;
//   for (let start = 0; start < arr.length; start++) {
//     for (let chars = 5; chars <= arr.length - start; chars++) {
//       arrs.push(arr.slice(start , chars + start));
//     }
//   }
//   let unique = arrs.filter(sub => sub.length === 5);
//  unique.forEach(subArr => {
//   if (reducer(subArr) < sum) {
//     sum = reducer(subArr);
//   }
//  })
//  return sum;
// }
// function reducer(arr) {
//   return arr.reduce((accum,el) => accum + el ,0)
// }


// function minimumSum(arr) {
//   if (arr.length < 5) {
//     return null;
//   }

//   let minSum = Infinity;

//   for (let i = 0; i <= arr.length - 5; i++) {
//     const sum = arr.slice(i, i + 5).reduce((acc, num) => acc + num, 0);

//     if (sum < minSum) {
//       minSum = sum;
//     }
//   }

//   return minSum;
// }
// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// Examples:

// console.log(minimumSum([1, 2, 3, 4]) === null);
// console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".

// function removeE(str) {
//   let arr = str.split(" ");
//   let left = [];
//   let right = [];
// arr.forEach((word,index) => {
//   if (word === "letter") {
//     left = arr.slice(0, index);
//     right = arr.slice(index)
//     return;
//   }
// })
// console.log({left})
// console.log({right})
// let finalRight = right.map(el =>el.replaceAll("e", "")).join(" ")
// return left.join(" ") + " " + finalRight + ".";
// }

// console.log(removeE("Remove occurances of the letter e after the word in this sentence"));

// let startNum = +readline.question("What nuber would you like to start looping at?\n");
// let endNum = +readline.question("What number would you like to end your loop at?\n");

// function loopFun(num1,num2) {
//   for(let index = num1; index <=num2; index++) {
//     console.log(index);
//   }
// }

// loopFun(startNum,endNum);

// function countOccurences(str) {
//   let obj = {};
//   str.split("").forEach(el => {
//     if (obj[el]) {
//       obj[el]++;
//     } else {
//       obj[el] = 1;
//     }
//   })
//   return obj;
// }

// console.log(countOccurences('abbab'))// => {a:2, b: 3})


// function countEle(arr,str) {
// let regex = new RegExp(str)
//   return arr.filter(el => regex.test(el)).length;
// }

// console.log(countEle(['name', 'year', 'age', 'name'], 'name')); // => 2
// console.log(countEle([1,2,3,4,5,1,2,3,4], 2)); //=> 2

function segregate(str, char) {

}

console.log(segregate('aad559 $%,')); //{lettersUpper: '', lettersLower: 'aad', numbers: '559', other characters: '$%,' }
console.log(segregate('11AB')); //{lettersUpper: 'AB', lettersLower: '', numbers: '', other characters: '' }




// function digitalRoot(n) {
//   let sum = String(n).split("").reduce((accum,el) => accum + +el, 0);

//   while (String(sum).length > 1) {
//     sum = String(sum).split("").reduce((accum,el) => accum + +el, 0);
//   }
//     return sum;
//   }
//   console.log(digitalRoot(16))
//   console.log(digitalRoot(456))


// function wordPattern(word) {
//   let cache = {};

//   let finalStr = ""
//   for (let index = 0; index < word.length; index++) {
//     if (cache[word[index].toLowerCase()]) {
//       console.log('great');
//     } else {
//       cache[word[index].toLowerCase()] = index;
//     }
//   }
//   word.split("").forEach(el => {
//     for (let key in cache) {
//     if (el.toLowerCase() === key.toLowerCase()) {
//       finalStr += `${cache[key.toLowerCase()]}.`
//     }
//   }
//   })
//   console.log(cache);
//   return finalStr;
// }


// console.log(wordPattern("hello"))


// function spacey(arr) {
// return arr.map((el,index) => {
//   return arr.slice(0, index + 1).join("");
// })
// }


// console.log(spacey(['kevin', 'has','no','space']))//[ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']);
// console.log(spacey(['this','cheese','has','no','holes']))// ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']);

// function shiftedDiff(first,second){
//   let count = 0
//   let shifted = first.split("");
//   for (let index = 0; index < first.length; index++) {
//     let lastEl = shifted.pop();
//     shifted = shifted.unshift(lastEl) + shifted;
//     console.log(shifted)
//     count++;

//     // if (shifted === second) return count;
//   }
// }

// console.log(shiftedDiff("coffee", "eecoff")); //2
// // ecoffe => eecoff => feecof => ffeeco =>
// console.log(shiftedDiff("eecoff", "coffee"));

// function reverseMessage(str) {
//   return str.split(" ").reverse().map(word => {
//     return word.split("").reverse().join("");
//   }).map(ele => {
//     return ele[0].toUpperCase() + ele.slice(1).toLowerCase()
//   }).join(" ")
//   }

//   console.log(reverseMessage("This is an example of a Reversed Message!"))

// function LongestWord(sen) {
//   return sen.split(" ").map(word => word.match(/[a-zA-Z]/g).join("")).sort((a,b) => b.length - a.length)[0];
// }

// console.log(LongestWord('fun&!! time Jordan!'));

// function FindIntersection(strArr) { 
//   let str=""
// let el1 = strArr[0].split(", ").map(el => +el)
// console.log({el1});
// let el2 = strArr[1].split(", ").map(el => +el)
// console.log({el2});
// el2.forEach(el => {
//   if (el1.includes(el)) {
//     str+=el + ",";
//   }
// })
// return str.slice(0, str.length - 1);
// }
   
// // keep this function call here 
// console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// ));
// //1,4,13;

// function findMissingLetter(array) {
//   let arr = array.map(char => char.charCodeAt());
//   let final = [];

//   arr.forEach((el,index) => {
//    if (el + 1 !== arr[index + 1]) {
//      final.push(String.fromCharCode(el + 1));
     
//    }
//   })
// return final[0]
// }

// console.log(findMissingLetter(['a','b','c','d','f'])) //e
// console.log(findMissingLetter(['O','Q','R','S'])) //P





// function arrange(s) {
//   let final = [];
//   let count = 0;
//   while (s.length > 0) {
//     let first = s.shift();
//     let last = s.pop();
//     if (count % 2 === 0) {
//       if (first !== undefined) {
//         final.push(first)
//       }
//       if (last !== undefined) {
//         final.push(last)
//       }
//       count++;
//     } else {
//       if (last !== undefined) {
//         final.push(last)
//       }
//       if (first !== undefined) {
//         final.push(first)
//       }
//       count++
//     }
  
//     // console.log({s})
//     // console.log({first})
//     // console.log({last})
//     // console.log({final})
//   }
//   return final;
// }

// function arrange(s) {
//   let copy = s.slice()
//   let final = [];
//   let first = 0;
//   let last = copy.length - 1;
//   let count = 0;
//   while (first !== last) {
// //     let first = copy.shift();
// //     let last = copy.pop();
//     if (count % 2 === 0) {
//       if (copy[first] !== undefined) {
//         final.push(copy[first])
//       }
//       if (copy[last] !== undefined) {
//         final.push(copy[last])
//       }
//       count++;
//     } else {
//       if (copy[last] !== undefined) {
//         final.push(copy[last])
//       }
//       if (copy[first] !== undefined) {
//         final.push(copy[first])
//       }
//       count++
//     }
//     last--;
//     first++
//   }
//   return final;
// }

// console.log(arrange([4, 3, 2]))//[4,2,3]
// console.log(arrange([2, 4, 3, 4]))//[2,4,3,4]
// console.log(arrange([9, 7, -2, 8, 5, -3, 6, 5, 1]))//[9,1,5,7,-2,6,-3,8,5]


// function longestCollatz (inputArray) {
//   let countArr = [];
//   inputArray.forEach(el => {
//   let count = 0;
//     while (el !== 1) {
//       console.log({el});
//       if (el % 2 === 0) {
//         el = el / 2;
//         console.log({el});
//       } else {
//         el = 3 * el + 1;
//         console.log({el});
//       }
//       count++
//       // console.log({count});

//     }
//     countArr.push(count);
//   })
//   let max = Math.max(...countArr);
//   console.log({max})
//   let index = countArr.findIndex(el => el === max);
//   return inputArray[index]
//   }

  // console.log(longestCollatz([1, 5, 27, 4]))//27
  // console.log(longestCollatz([64, 64, 27, 64]))//27
  // console.log((longestCollatz([75, 226, 113, 340])))//75
  // function mutation(arr) {
  //   let bool = true;
  //   let firstEl = arr[0].split("");
  //   let secondEl = arr[1].split("")
  //   for (let index = 0; index < secondEl; index++ ) {
  //     if (!firstEl.includes(secondEl[index])) {
  //       bool = false;
  //     }
  //   }
  //   return bool
  // }
  
  // console.log(mutation(["hello", "hey"]));

//   function accum(str) {
//     return str.split("").map((el , index) => el.toUpperCase()+ el.repeat(index).toLowerCase()).join("-")
//   }

// console.log(accum("abcd"));   // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt"));   // "C-Ww-Aaa-Tttt"

// function longestPalindrome(str) {
//   if (str.length === 0) return 0;
//   let subs = [];
//   for (let start = 0; start < str.length; start++) {
//     for (let chars = 1; chars <= str.length - start; chars++) {
//       subs.push(str.slice(start, start + chars));
//     }
//   }
//   return Math.max(...subs.filter(el => isPalindrome(el)).map(string => string.length));


// }
// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }

// console.log(longestPalindrome("a") == 1);
// console.log(longestPalindrome("aa") === 2);
// console.log(longestPalindrome("baa") === 2);
// console.log(longestPalindrome("aab") === 2);
// console.log(longestPalindrome("baabcd") === 4);
// console.log(longestPalindrome("baablkj12345432133d") === 9);

// function longestConsec(arr, k) {
//   if (arr.length === 0 || k > arr.length || k <= 0) return "";
//   let subs = [];
//   for (let start = 0; start < arr.length; start++) {
//    subs.push(arr.slice(start, start + k ).join(""));
//   }
//   let length = subs[0].length;
// subs.forEach(el => {
//   if (el.length > length) {
//     length = el.length;
//     return el;
//   }
// })
// return subs.filter(el => el.length === length)[0]
// // return subs.sort((a,b) => b.length - a.length)[0]
// }

// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
// console.log(longestConsec([], 3) === ""); // true
// console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
// console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true


// function commonPrefix(arr) {
//   let str = arr[0];
//   let final = "";
// for (let index = 0; index < str.length; index++) {
//   let char = str[index];
//   if (arr.every(el => el[index] === char)) {
//     final += char;
//   }
// }
//   return final;
// };

// console.log(commonPrefix(["flower", "flow", "flight"]) === "fl"); // true
// console.log(commonPrefix(["dog", "racecar", "car"]) === ""); // true
// console.log(commonPrefix(["interspecies", "interstellar", "interstate"]) === "inters"); // true
// console.log(commonPrefix(["throne", "dungeon"]) === ""); // true
// console.log(commonPrefix(["throne", "throne"]) === "throne"); // true

// function duplicates(arr){
//   let count = 0;
//     for (let index = 0; index <= arr.length; index++) {
//       for (let j = 0; j <= arr.length; j++) {
//         console.log(`arrIndex = ${arr[index]} arrJ = ${arr[j]}`)
//         console.log({count})
//         if (arr[index] === arr[j] && index !== j && typeof arr[index] === 'number' && typeof arr[j]=== 'number') {
//           count+=1;
//           arr[index] = "t"
//           arr[j] = "!"
//         }
//       }
//     }
//     return count;
//   }

//   console.log(duplicates([1, 2, 5, 6, 5, 2]));
//   console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]));

// function solve(s){
//   let subs = []
//   for (let index = 0; index < s.length; index++) {
//     for (let chars = 1; chars <= s.length - index ; chars++) {
//       subs.push(s.slice(index , index + chars))
//     }
//   }
//   console.log({subs})
//     let final = subs.map(el => +el)
//     let final2 = final.filter(num => num % 2 === 1);
//     console.log({final})
//     console.log({final2})
//     return final2.length
//   };

//   // console.log(solve("1341")) // 7
//   // console.log(solve("13472315"))//28
//   // console.log(solve("1341"))//7
//   console.log(solve("1347231"))//20

// function f(s) {
//   if (sameChar(s)) {
//     return [s[0], s.length]
//   }
//   let sub;
//   let num = 0;
//     for (let index = 0; index < s.length; index ++) {
//       if (s.slice(index + 1).includes(s.slice(0,index + 1))) {
//         sub =  s.slice(0,index + 1);
//         num = index
//       }
//     }
//     console.log({sub})
//     if (sub === undefined) {
//       sub = s;
//     }
//     let regex = new RegExp(sub, "ig")
//     let final = s.slice(num + 1).match(regex) || [];
//     return [sub, final.length];
//   }

//   function sameChar(str) {
//     return str.split("").filter(el => el === str[0]).length === str.length;
//   }

//   console.log(f("ababab"))
//   console.log(f("abcde"));
//   console.log(f('aaaaa'));

// function isPangram(string){
//   let cache = {}
//   string.split("").forEach(el => {
//     if (el.match(/[a-zA-Z]/g)) {
//       cache[el.toLowerCase()] ? cache[el.toLowerCase()]++ : cache[el.toLowerCase()] = 1
//     }
//   })
//  return (Object.keys(cache).length === 26)&&(Object.values(cache).every(el => el >= 1))
//   }

//   console.log(isPangram("The quick brown fox jumps over the lazy dog."))

// function scramble(str1, str2) {
//   let cache = {};
//   str1.split("").forEach(el => {
//     cache[el] ? cache[el]++ : cache[el] = 1
//   })
//   console.log({cache});
//   str2.split('').forEach(el => {
//     cache[el] ? cache[el]-- : cache[el] = "!";
//   })
// return Object.values(cache).every(num => (num >= 0) && num !== "!")
//   }
  
//   // console.log(scramble('rkqodlw','world'))
//   // console.log(scramble('cedewaraaossoqqyt', 'codewars'))
//   // console.log(scramble('katas',             'steak'      ))

// function greatestProduct(input) {
//   let subs = [];
//     for (let start = 0; start < input.length; start++) {
//       for (let chars = 5; chars <= input.length - start; chars++){
//         subs.push(input.slice(start, start + chars))
//       }
//     }
//     let filtered = subs.filter(el => el.length === 5);
//     let mapped = filtered.map(str => str.split("").reduce((accum,el) => accum * +el, 1))
//     return Math.max(...mapped);
//   }

//   console.log(greatestProduct("123834539327238239583"));


// function duplicateCount(text) {
// let cache = {};
// text.split("").forEach(el => {
//   if (el.match(/[a-z0-9]/ig)) {
//     cache[el.toLowerCase()] ? cache[el.toLowerCase()]++ : cache[el.toLowerCase()] = 1;
//   }
// })
// // console.log({cache})
// return Object.values(cache).filter(num => num > 1).length
// }

// console.log(duplicateCount(""))//0
// console.log(duplicateCount("abcde"))//0
// console.log(duplicateCount("aabbcde"))//2
// console.log(duplicateCount("aabBcde"))//2

// function findEvenIndex(arr) {
// for (let index = 0; index < arr.length; index++) {
//   let left = arr.slice(0 , index)
//   let leftTotal = left.reduce((accum,el) => accum + el,0);
//   let right =  arr.slice( index + 1);
//   let rightTotal = right.reduce((accum,el) => accum + el,0);
//   if (leftTotal === rightTotal) {
//     return index;
//   }
//   // console.log({arr})
//   // console.log({left})
//   // console.log({leftTotal})
//   // console.log({right})
//   // console.log({rightTotal})
//   // console.log({index})
// }
// return -1;
// }

// console.log(findEvenIndex([1,2,3,4,3,2,1]))//3;
// console.log(findEvenIndex([1,100,50,-51,1,1]))//1;
// console.log(findEvenIndex([1,2,3,4,5,6]))//-1;
// console.log(findEvenIndex([20,10,30,10,10,15,35]))//3;


// function findOdd(arr) {
// let cache = {};
// arr.forEach(el => {
//   cache[el] ? cache[el]++ : cache[el] = 1;
// });
// for (let key in cache) {
//   if (+cache[key] % 2 === 1) {
//     return +key;
//   }
// }
// }

// function nameInStr(str, name){
//   // let arr = [];
//   let cache = {};
//   for (let index = 0; index < name.length; index++) {
//     for (let j = 0; j < str.length; j++ ) {
//       if (name[index] === str[j])
//       // if (name[index] === str[j] && arr.length <= name.length) {
//       //   arr.push(j)
//       // }
//     }
//   }
//   // let sorted = String([...arr].sort((a,b) => a - b).join(""))
//   // console.log({sorted})
//   // console.log({arr})
//   // return arr.length === name.length
// }


// function sortArray(array) {
// let odds = [];

// array.forEach(el => {
//   if (el % 2 === 1 || el % 2 === -1) {
//     odds.push(el);
//   }
// })
// odds.sort((a,b) => a - b);
// // console.log({odds})
// for (let index = 0; index < array.length; index++) {
//   if (array[index] % 2 === 1 || array[index] % 2 === -1) {
//     array[index] = odds.shift();
//   }
// }
// return array;
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4]))//, [1, 3, 2, 8, 5, 4])
// console.log(sortArray([5, 3, 1, 8, 0]))//, [1, 3, 5, 8, 0])
// console.log()


/*
P: input: array of numbers        output: array of numbers
E: given
D: Array
Algo:
- get an array of unique values first to compare your arrray against and keep count of numbers less than current element you are comparing with.

*/

// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:


// function smallerNumbersThanCurrent(arr) {
//   let unique = [];
//   arr.forEach(el => {
//     if (!unique.includes(el)) {
//       unique.push(el);
//     }
//   })
//   return arr.map(el => {
//     return unique.filter(el2 => {
//       return el2 < el
//     }).length
//   })
// }

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
// console.log(smallerNumbersThanCurrent(
//   [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
// console.log(smallerNumbersThanCurrent([1])); // [0]


// function minimumSum(arr) {
//   if (arr.length < 5 ) return null
//  let subs = [];
//  for (let start = 0; start < arr.length; start++) {
//   for (let chars = 5; chars <= arr.length - start; chars++) {
//     subs.push(arr.slice(start , start + chars));
//   }
//  }
//  let filtered = subs.filter(array => array.length === 5);
// let mappedSum = filtered.map(subArr => {
//   return subArr.reduce((accum,el) => accum + el, 0)
// })
// return Math.min(...mappedSum)
// }

// /*
// P:
//   input: array of numbers
//   output: single number that is the min sum of 5 consec intergers within the array

// E: given
// D: nested array, by calling reduce and finding substrings
// Algo:
//   - declare an empty array to push substrings into
//   --filter that array to find all lengths that are === 5
//   -with our newly filtered array, reduce each array with map and find Math.min on the array.
//   return smallest value;
// */
// // Write a function that takes one argument, an array of
// // integers. The function should return minimum sum of 5
// // consecutive numbers in the array. If the array contains
// // less than 5 elements, the function should return null.

// // Examples:

// console.log(minimumSum([1, 2, 3, 4]) === null);
// console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// // The tests above should each log "true".



/*
P: 
  input:
  output:

E:
D:
A:
C:
*/
// function toWeirdCase(str) {
// return str.split(" ").map((el,index) => {
//   if (index % 2 !== 0) {
//     return el.split("").map((word,index) => {
//       if ((index + 1) % 4 === 0) {
//         return word.toUpperCase();
//       } else {
//         return word;
//       }
//     }).join("");
//   } else {
//     return el;
//   }
// }).join(" ");
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

// // The tests above should print "true".

// function closestNumbers(arr) {
// let minDif = Infinity;
// let arr2 = []
// for (let index = 0 ; index < arr.length; index++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (Math.abs(arr[index] - arr[j]) < minDif && index !== j) {
//       minDif = Math.abs(arr[index] - arr[j]);
//       arr2 = [arr[index] , arr[j]]
//     }
//   }
// }
// return arr2;
// }

// // Write a function that takes an array of integers and
// // returns the two numbers that are closest together in
// // value.

// // Examples:

// console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
// console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
// console.log(closestNumbers([12, 7, 17]));             // [12, 7]

// function leastCommonChar(str) {
// let cache = {};
// let lowercase = str.toLowerCase().split("");
// lowercase.forEach(el => {
//   cache[el] ? cache[el]++ : cache[el] = 1;
// })
// let min = Math.min(...Object.values(cache))
// for (let key in cache) {
//   if (cache[key] === min) {
//     return key;
//   }
// }
// }

// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

// Examples:

// console.log(leastCommonChar("Hello World") === "h");
// console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
//                             "t");
// console.log(leastCommonChar("Mississippi") === "m");
// console.log(leastCommonChar("Happy birthday!") === ' ');
// console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".

















// function nextBiggerNum(num) {
// let nums = [];
// let numStr = String(num);
// if (numStr.length === 2) {
//   return +numStr.split("").reverse().join("")
// }
// for (let index = numStr.length; index > 0; index--) {
// let left = numStr.slice(0, index)
// let right = numStr.slice(index).split("").reverse().join("")
// nums.push(+(left + right));
// }
// nums.sort((a,b) => a - b);
// let final;
// nums.forEach((el,index) => {
//   if (el === num && nums[index + 1] !== num) {
//     final = nums[index + 1];
//   }
// })
// return final ? final : -1
// }

// console.log(nextBiggerNum(9) === -1)
// console.log(nextBiggerNum(12) === 21)
// console.log(nextBiggerNum(513) === 531)
// console.log(nextBiggerNum(2017) === 2071)
// console.log(nextBiggerNum(111) === -1)
// console.log(nextBiggerNum(531) === -1)
// console.log(nextBiggerNum(123456789) === 123456798);


// function scramble(str1, word) {
// let cache = {};
// str1.split("").forEach(char => {
//   cache[char] ? cache[char]++ : cache[char] = 1;
// }) 
// word.split("").forEach(el => {
//   if (cache[el]) {
//     cache[el]--
//   } else {
//     return false;
//   }

// })
// return Object.values(cache).every(key => key >= 0) ? true : false
// }

// console.log(scramble("javaass", "jjss") === false);
// console.log(scramble("rkqodlw", "world") === true);
// console.log(scramble("cedewaraaossoqqyt", "codewars") === true);
// console.log(scramble("katas", "steak") === false);
// console.log(scramble("scriptjava", "javascript") === true);
// console.log(scramble("scriptingjava", "javascript") === true);

// function commonChars(arr) {
// let finalComChars = [];
// let arr = arr[0].split("");
// arr.forEach(el => {
  
// })
// }


// console.log(commonChars(['a', 'b']));
// console.log(commonChars(['ab', 'bc']));
// console.log(commonChars(['bella', 'label', 'roller']));
// console.log(commonChars(['cool', 'lock', 'cook']));
// console.log(commonChars(['hello', 'goodbye', 'booya', 'random']));
// console.log(commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzzz']));

// function substrings(str1, str2) {
//   let subs1 = substrings2(str1);
//   let subs2 = substrings2(str2);
//   let filtered = subs1.filter(el => subs2.includes(el));
//   return filtered.length > 0 ? true : false;
// }

// function substrings2(str) {
// let subs = [];
// for (let start = 0; start < str.length; start++) {
//   for (let chars = 2; chars <= str.length - start; chars++) {
//     subs.push(str.slice(start, start + chars));
//   }
// }
// return subs.map(el => el.toLowerCase());
// }


// console.log(substrings("Something" , "Fun") === false );
// console.log(substrings("Something" , "Home") === true );
// console.log(substrings("Something" , "") === false );
// console.log(substrings("" , "Something") === false );
// console.log(substrings("BANANA" , "banana") === true);
// console.log(substrings("test" , "lllt") === false);
// console.log(substrings("1234567" , "541265") === true );

// function commonPrefix(arr) {
//   let final = "";
//   for (let index = 0; index <  arr[0].length; index++) {
//     let char = arr[0][index];
//     if (arr.every(word => word[index] === char)) {
//       final += char;
//     }
//   }
//   console.log({final})
//   return final;
// }

// console.log(commonPrefix(['flower', 'flow', 'flight']) === 'fl');
// console.log(commonPrefix(['dog' , 'racecar', "car"]) === "");
// console.log(commonPrefix(['interspecies', 'interstellar', 'interstate']) === 'inters');
// console.log(commonPrefix(['throne', 'dungeon']) ===  "");
// console.log(commonPrefix(['throne' , 'throne']) ===  'throne');

// function findEvenIndex(arr) {
// for (let index = 0; index < arr.length; index++) {
//   let left = arr.slice(0 , index).reduce((accum,el) => accum + el, 0);
//   let right = arr.slice(index + 1).reduce((accum,el) => accum + el, 0)

//   if (left === right) return index;
// }
// return -1
// }

// console.log(findEvenIndex([1,2,3,4,3,2,1]) === 3);
// console.log(findEvenIndex([1,100,50,-51,1,1]) === 1);
// console.log(findEvenIndex([1,2,3,4,5,6]) === -1);
// console.log(findEvenIndex([20,10, 30,10,10,15,35]) === 3);
// console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3);

// function getCount(n) {
// let subs = substrings(n)
// // console.log({subs})
// let count = 0;
// subs.filter(el => {
//   if (n % el === 0 && el !== 0) {
//     count++
//   }
// })
// return count - 1;
// }

// function substrings(num) {
//   let arr = []
//   let str = String(num);
//   for(let start = 0; start < str.length; start++) {
//     for (let chars = 1; chars <= str.length - start; chars++) {
//       arr.push(str.slice(start, start + chars))
//     }
//   }
//   return arr.map(el => +el)
// }

// console.log(getCount(123))//2
// console.log(getCount(1230))//5
// console.log(getCount(1))//0
// console.log(getCount(1111111111))//25


// function zipWith(fn,a0,a1) {
//   let final = [];
//   let arrs = [a0, a1]
//   let shortest = arrs.sort((a,b) => a.length - b.length)[0]
//     for (let index = 0; index < shortest.length; index++) {
//       final.push(fn(a0[index], a1[index]));
//     }
//     return final;
//   }

//   // console.log(zipWith(plus, [0,1,2,3,4,5], [6,5,4,3,2,1]))
//   // console.log(zipWith(plus, [0,1,2,3,4  ], [6,5,4,3,2,1]))
//   console.log(zipWith( Math.pow, [10,10,10,10], [0,1,2,3] ))

// function arrange(s) {
//   if (s.length === 1 || s.length === 2) return s;
//   if(s.length === 0) return s;
//   let copy = s.slice()
// let t = [copy[0], copy[copy.length - 1]];
// copy.shift();
// copy.pop();
// let length = copy.length;
// while (length > 0) {
//   copy.reverse();
//   if (copy.length === 1) {
//     t.push(...copy.slice(0))
//   } else {
//     t.push(copy[0], copy[copy.length - 1]);
//   }
//   copy = copy.slice(1, copy.length - 1);
 
//   length = copy.length;
// }
// return t;
// }

// console.log(arrange([2, 4, 3, 4]))//2 4 3 4

// console.log(arrange([4, 3, 2]))//4 2 3

// console.log(arrange([9, 7, -2, 8, 5, -3, 6, 5, 1])) //9 1 5 7 -2 6 -3 8 5
// function findSequences(n){
// let subs = substrings(n);
// let realSubs = [];
// let final = []
// for (let index = 0; index < subs.length; index++){
//   for (let j = index; j < n; j++){
//     realSubs.push(subs.slice(index , index + j))
//   }
// }
// realSubs.forEach(arr => {
//   let reduced = arr.reduce((accum,el) => accum + el, 0)
//   if (reduced === n) {
//     final.push(arr)
//   }
// })
// let sorted = final.sort((a,b) => a.length - b.length)
// return sorted ? sorted : [];
// }

// function substrings(num) {
//   let arr = []
// for (let index = 1; index < num; index++) {
//   arr.push(index);
// }
// return arr;
// }

// console.log(findSequences(3))//1,2
// console.log(findSequences(15)) // 7 8, 4 5 6, 1 2 3 4 5
// // console.log(findSequences(100))
// // console.log(findSequences(1))
// // console.log(findSequences(20))

// function estSubsets(arr) {
//   let subs = substrings(arr);
//   console.log({subs})
//   }

//   function substrings(array) {
//     let subs = [];
//     for (let start = 0; start < array.length; start++) {
//       for (let chars = 1; chars <= array.length - start; chars++) {
//         subs.push(array.slice(start, start + chars));
//       }
//     }
//     return subs
//   }

//   console.log(estSubsets([1, 2, 3, 4]));


// function solve(s) {
// let subs = substrings(s);
// // console.log(subs)
// let letters = 'abcdefghijklmnopqrstuvwxyz';
// let updatedSubs = subs.filter(str => {
//   return str.split("").every(char => {
//     return char.match(/[^aeiou]/)
//   })
// })

// let sum = 0;

// updatedSubs.forEach(el => {
// let total = 0
//   el.split("").forEach(char => {
//     let num = letters.indexOf(char) + 1;
//     total += num;
//   })
//   if (total >= sum) {
//     sum = total
//   }
// })
// return sum;
// };

// function substrings(word) {
//   let array = [];
//   for (let start = 0; start <word.length; start++) {
//     for (let chars = 1; chars <= word.length - start ; chars++) {
//       array.push(word.slice(start, start + chars))
//     }
//   }
//   return array;
// }

// console.log(solve("zodiac")) // 26
// console.log(solve("chruschtschov"))//80
// console.log(solve("khrushchev"))//38
// console.log(solve("strength"))//57
// console.log(solve("catchphrase"))//73
// console.log(solve("twelfthstreet"))//103


// function minDistance(n){
//   let factors = []
//   let difs = []
//   for (let index = 0; index <= n; index++) {
//     if (n % index === 0) {
//       factors.push(index)
//     }
//   }
// for (let index = 0; index < factors.length; index++) {
//   for (let j = 0; j < factors.length; j++) {
//     if (index !== j) {
//       difs.push(Math.abs(factors[index] - factors[j]))
//     }
//   }
// }
// return Math.min(...difs)
//   }

//   console.log(minDistance(13013))

// function zeros(n) {
// let prod = 1;
// for (let index = 1; index <= n; index++) {
//   prod *= index
// }
// let finder = String(prod).split("").filter(el => el > 0)
// console.log({prod})
// console.log({finder})
// let index = String(prod).lastIndexOf(finder[finder.length - 1])
// console.log({index})
// return String(prod).slice(index + 1).length
// }

// // console.log(zeros(6))
// console.log(zeros(12))

// Each character in the string argument should appear in the returned string.
// The original character should be repeated as many times as its original position in the string argument. (index 0 being position 1, index 1 being position 2...)
// The repeated sequences of a character should be separated by a hyphen in the returned string.
// In the repeated sequences of a character included in the returned string, the first instance of the character should be upper-case.  Subsequent instances of the character should be lowercase.

// 



// Find the length of the longest substring in the given string that is a palindrome.

// As an example, if the input was "I like racecars that go fast",
// the substring's ("racecar") length would be 7.

// If the length of the input string is 0, the return value must be 0.
// function longestPalindrome(str) {
//   if (str.length === 0) return 0;
//   let subs = substrings(str);
//   let count = subs.map(el => {
//     if (isPalin(el)) {
//       return el.length
//     } else{
//       return false;
//     } 
//   })
// return Math.max(...count)
// }

// function substrings(word) {
//   let subsArr = [];
//   for(let start = 0; start < word.length; start++) {
//     for (let chars = 1; chars <= word.length - start; chars++) {
//       subsArr.push(word.slice(start, start + chars));
//     }
//   }
//   return subsArr;
// }

// function isPalin(el) {
//   return el === el.split("").reverse().join("");
// }
// console.log(longestPalindrome("a") == 1);
// console.log(longestPalindrome("aa") === 2);
// console.log(longestPalindrome("baa") === 2);
// console.log(longestPalindrome("aab") === 2);
// console.log(longestPalindrome("baabcd") === 4);
// console.log(longestPalindrome("baablkj12345432133d") === 9);


// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.
// function smallerNumbersThanCurrent(arr) {
//   let unique = [];
//   arr.forEach(el => {
//     if (!unique.includes(el)) {
//       unique.push(el);
//     }
//   })
//   return arr.map(el => {
//     return unique.filter(num => {
//       return el > num;
//     }).length;
//   })
// }
// // Examples:

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
// console.log(smallerNumbersThanCurrent(
//   [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
// console.log(smallerNumbersThanCurrent([1])); // [0]

// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// Examples:

// function minimumSum(arr) {
//   if (arr.length < 5) return null;
//   let subs = subArrays(arr);
//   // console.log({subs});
//   subs = subs.filter(arr => arr.length === 5);
//   // console.log({subs});
//   let final = subs.map(arr => {
//     return arr.reduce((accum,el) => accum + el , 0);
//   })
//   return Math.min(...final);
// }

// function subArrays(array) {
//   let subs = [];
//   for (let start = 0; start < array.length; start++) {
//     for (let chars = 5; chars <= array.length - start; chars++) {
//       subs.push(array.slice(start, start + chars));
//     }
//   }
//   return subs;
// }

// console.log(minimumSum([1, 2, 3, 4]) === null);
// console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// // The tests above should each log "true".

// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

// Examples:
// function toWeirdCase(str) {
// let final = str.split(" ").map((word,index) => {
//   if (index % 2 === 1) {
//     return word.split("").map((el,index) => {
//       if ((index + 1) % 4 === 0) {
//         return el.toUpperCase();
//       } else {
//         return el;
//       }
//     }).join("")
//   } else {
//     return word;
//   }
// }).join(" ");
// return final
// }



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

// // The tests above should print "true".

// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

// Examples:
// function closestNumbers(arr) {
// let close;
// let min = Infinity;
// for (let index = 0; index < arr.length; index++) {
//   for (let j = 0; j < arr.length; j++) {
//     let diff = Math.abs(arr[j] - arr[index]);
//     if ( diff <= min && index !== j) {
//       close = [arr[j], arr[index]]
//       min = Math.abs(arr[j] - arr[index])
//     }
//   }
// }
// return close
// }

// console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
// console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
// console.log(closestNumbers([12, 7, 17]));             // [12, 7]

// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

// // Examples:
// function leastCommonChar(str) {
// let cache = {};
// let lowercase = str.toLowerCase();
// lowercase.split("").forEach(el => {
//   cache[el] ? cache[el]++ : cache[el] = 1
// })
// let min = Math.min(...Object.values(cache));
// for (let key in cache) {
//   if (cache[key] === min) {
//     return key
//   }
// }

// }

// console.log(leastCommonChar("Hello World") === "h");
// console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
//                             "t");
// console.log(leastCommonChar("Mississippi") === "m");
// console.log(leastCommonChar("Happy birthday!") === ' ');
// console.log(leastCommonChar("aaaaaAAAA") === 'a');

// // The tests above should each log "true".



// function solve(s) {
// return Math.max(...(s.match(/[aeiou]+/g) || []).map(el => el.length));
// }

// console.log(solve("codewarriors"))//2
// console.log(solve("suoidea"))//3
// console.log(solve("ultrarevolutionariees"))//3
// console.log(solve("strengthlessnesses")) //1
// console.log(solve("cuboideonavicuare")) //2
// console.log(solve("chrononhotonthuooaos")) //5
// console.log(solve("iiihoovaeaaaoougjyaw"))//8



// function f(s) {
//   if (sameChar(s)) {
//     return [s[0], s.length]
//   }
//   let sub;
//   let num = 0;
//     for (let index = 0; index < s.length; index ++) {
//       if (s.slice(index + 1).includes(s.slice(0,index + 1))) {
//         sub =  s.slice(0,index + 1)
//         num = index
//       }
//     }

//     if (sub === undefined) {
//       sub = s;
//     }
//     let regex = new RegExp(sub, "ig")
//     let final = s.slice(num + 1).match(regex) || [];
//     return [sub, final.length];
//   }

//   function sameChar(str) {
//     return str.split("").filter(el => el === str[0]).length === str.length;
//   }


// function f(s) {

//   let final;
// for (let index = 0; index < s.length; index++) {
//   let substring = s.slice(0, index + 1);
//   if (repeat(substring,s)) {
//     final = repeat(substring,s);
//     break;
//   }
// }
// return final;
// }
// function repeat(substr, str) {
//   for (let index = 0; index <= str.length; index++) {
//     if (substr.repeat(index) === str) {
//       return [ substr , index]
//     }
//   }
// }

// // console.log(f("ababab"));
// // console.log(f("abcde"));
// console.log(f('aaaaa'))

// function greatestProduct(input) {
//   let subs = substrings(input)
//   let prod = 0;
//     subs = subs.filter(str => str.length === 5);
//     for (let sub of subs) {
//       let reducer = sub.split("").reduce((accum,el) => accum * +el, 1);
//       if (reducer > prod) {
//         prod = reducer;
//       }
//     }
//     return prod
//   }
  
//   function substrings(str) {
//     let arr = []
//     for (let start = 0; start < str.length; start++) {
//       for (let chars = 5; chars <= str.length - start; chars++) {
//         arr.push(str.slice(start, start + chars))
//       }
//     }
//   }

// function typist(s){
//   let elements = s.split("")
//   let count = 0;
//   // if (elements[0] === elements[0].toUpperCase()) count++
//   elements.forEach((char,index) => {
//     if ((/[a-z]/).test(char) && (/[a-z]/).test(elements[index + 1])) {
//       count += 1;
//     } else if ((/[A-Z]/).test(char) && (/[A-Z]/).test(elements[index + 1])) {
//       count += 1;
//     } else if (((/[A-Z]/).test(char) && (/[a-z]/).test(elements[index + 1])) || ((/[a-z]/).test(char) && (/[A-Z]/).test(elements[index + 1]))){
//       count += 2
//     }
// })
//   return count;
// }

// console.log(typist('a'))//1
// console.log(typist('aa'))//2
// console.log(typist('A'))//2
// console.log(typist('AA'))//3
// console.log(typist('aA'))//3
// console.log(typist('Aa'))//4
// console.log(typist("BeiJingDaXueDongMen"))//31
// console.log(typist("AAAaaaBBBbbbABAB"))//21
// console.log(typist("AmericanRAILWAY"))//18
// console.log(typist("AaAaAa"))//12
// console.log(typist("DFjfkdaB"))//11

// function comp(array1, array2){
//   let mapped = array1.map(el => el * el)
//   console.log({mapped})
//   let final = true;
//   let array2Sorted = array2.sort((a,b) => a - b);
//   let array1Sorted = mapped.sort((a,b) => a - b);
//   for (let index = 0; index < array1.length; index++) {
//     if (array1Sorted[index] !== array2Sorted[index]) {
//       final = false;
//     }
//   }
//   return final
//   }


//   let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
//   let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
//   console.log(comp(a1, a2))

// function typist(str) {
// let count = 0;
// if (str[0] === str[0].toUpperCase()) count++;
// for (let index = 0; index < str.length; index++) {
//   if ((/[a-z]/.test(str[index])) && (/[A-Z]/.test(str[index])) || (/[A-Z]/.test(str[index])) && (/[a-z]/.test(str[index]))) {
//     count += 2;
//   } else {
//     count++
//   }
// }
// return count;
// }

// console.log(typist('a'))//1
// console.log(typist('aa'))//2
// console.log(typist('A'))//2
// // console.log(typist('AA'))//3
// console.log(typist('aA'))//3
// console.log(typist('Aa'))//4
// console.log(typist("BeiJingDaXueDongMen"))//31
// // console.log(typist("AAAaaaBBBbbbABAB"))//21
// // // console.log(typist("AmericanRAILWAY"))//18
// console.log(typist("AaAaAa"))//12
// console.log(typist("DFjfkdaB"))//11

// function multiplyAllPairs(arr1,arr2) {
//   let final = [];
//   arr1.forEach(num => {
//     arr2.forEach(el => {
//       final.push(el * num);
//     })
//   })
//   return final.sort((a,b) => a - b)
// }

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16])

// function leadingSubstrings(str) {
//   let arr = [];
//   for (let index = 0; index < str.length; index++) {
//     arr.push(str.slice(0, index + 1))
//   }
//   return arr;
// }

// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// function palindromes(str) {
//   let subs = substrings(str);
//   return subs.filter(word => word === word.split("").reverse().join("") && word.length > 1)
// }

// function substrings(str) {
//   let arr = [];
//   for (let index = 0; index < str.length; index++) {
//     for (let chars = 1; chars <= str.length - index; chars++) {
//       arr.push(str.slice(index, chars + index))
//     }
//   }
//   return arr;
// }



// console.log(palindromes('abcd'));       // []
// console.log(palindromes('madam'));      // [ "madam", "ada" ]

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes('knitting cassettes'));
// // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]


// function buyFruit(arr) {
// let final = [];
//   arr.forEach(subArr => {
//     for (let index = 1; index <= subArr[1]; index ++) {
//       final.push(subArr[0]);
//     }
//   })
//   return final;
// }

// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// // returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// function removeVowels(arr) {
//   return arr.map(word => (word.match(/[^aeiou]/ig) || []).join(""));
// }

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

// function letterCaseCount(str) {
// return {'lowercase' : (str.match(/[a-z]/g) || []).length,
//          'uppercase' : (str.match(/[A-Z]/g) || []).length,
//          'neither' : (str.match(/[^A-Z]/ig) || []).length}

// }

// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }


// function wordCap(str) {
//   return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ")
// }
// console.log(wordCap('four score and seven'));       // "Four Score And Seven"
// console.log(wordCap('the javaScript language'));    // "The Javascript Language"
// console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

// function swapCase(str) {
// return str.split("").map(el => {
//   if ((/[a-z]/).test(el)) {
//     return el.toUpperCase()
//   } else if ((/[A-Z]/).test(el)) {
//     return el.toLowerCase();
//   } else {
//     return el;
//   }
// }).join("")
// }

// console.log(swapCase('CamelCase'));              // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

// function wordLengths(str) {
// if (str === "" || str === undefined) return [];
// return str.split(" ").map(word => `${word} ${word.length}`)
// }

// console.log(wordLengths('cow sheep chicken'));
// // ["cow 3", "sheep 5", "chicken 7"]

// console.log(wordLengths('baseball hot dogs and apple pie'));
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// console.log(wordLengths("It ain't easy, is it?"));
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// console.log(wordLengths('Supercalifragilisticexpialidocious'));
// // ["Supercalifragilisticexpialidocious 34"]

// console.log(wordLengths(''));      // []
// console.log(wordLengths());        // []

// function rotateRightmostDigits(num, count) {
// let str = String(num)
// let left = str.slice(0, str.length - count)
// let right = str.slice(str.length - count).split("").concat(str.slice(str.length - count)[0]);
// right.shift();
// // console.log({left})
// return +(left + right.join(""))


// }

// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917

// function maxRotation(num) {
// let str = String(num);
// for (let index = 0; index < str.length; index++) {
//   str;
//   let slicerL = str.slice(0, index);
//   let slicerR = str.slice(index).split("");
//   slicerR.push(slicerR[0])
//   slicerR.shift();
// str = slicerL + slicerR.join("")
// }
// return +str;
// }

// // console.log(maxRotation(735291));          // 321579
// // console.log(maxRotation(3));               // 3
// // console.log(maxRotation(35));              // 53
// // console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// // console.log(maxRotation(8703529146));      // 7321609845


// function wordToDigit(str) {
//   let digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
// let arr = str.split(" ");
// return arr.map(word => {
//   let el = word.match(/[a-z]/g).join("");
//   if (digits.includes(el)) {
//     return digits.indexOf(el);
//   } else {
//     return word
//   }
// }).join(" ");
// }


// function findFibonacciIndexByLength(num) {
//   let nums = [1,1];
//   let length = +String(num).slice(0, String(num).length)
//   // console.log(length)
//   for (let index = 2; index <= 10000n; index++) {
//     nums.push(nums[index - 1] + nums[index - 2])
//   }
// let filtered = nums.map((el,index) => {
//   if ( String(el).length === length) {
//   return index 
//   } else {
//   return ""
//   }
// }).filter(el => el)
// return (filtered[0] + 1) + 'n'
// }

// console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3n))// === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10n))//) === 45n;
// console.log(findFibonacciIndexByLength(16n))// === 74n;
// console.log(findFibonacciIndexByLength(100n))// === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// // The last example may take a minute or so to run.

// function fibonacci(num) {
//   if (num === 1 || num === 2) return 1;
//   return fibonacci(num - 1) + fibonacci(num - 2)
// }

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765

// function sumSquareDifference(num) {
// let arr = []
// for (let index = 1; index <= num; index++) {
//   arr.push(index);
// }
// return arr.reduce((accum,el) => accum + el, 0)**2 - arr.reduce((accum,el) => accum + el ** 2, 0)
// }

// // console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// // console.log(sumSquareDifference(10));     // 2640
// // console.log(sumSquareDifference(1));      // 0
// // console.log(sumSquareDifference(100));    // 25164150

// function featured(num) {
// let final = 0;
// for (let index = num; index <= Infinity; index++) {
//   if (index % 2 === 1 && index % 7 === 0 && onlyOnce(index) && index !== num) {
//     final = index;
//     break;
//   }
// }
// return final;
// }

// function onlyOnce(num) {
//   let str = String(num).split("");
//   let final = true;
//   let arr = [];
//   str.forEach((el, index) => {
//   str.forEach((els,index2) => {
//     if (el === els && index !== index2 ) {
//       final =  false
//     }
//   })
//   })
//   return final;
// }

// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
// // console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

// // console.log(onlyOnce(997));


// function initials(n){

//   return n.split(" ").map((word, index, arr) => {
//   if (word === arr[arr.length - 1]) {
//     return word[0].toUpperCase() + word.slice(1).toLowerCase();
//   } else {
//     return word[0].toUpperCase()
//   }
//   }).join(".")
//   }

//   console.log(initials("Barack hussain obama"))

// function charConcat(str){
//   let arr = str.split("")
//   let final = ""
//   if (str.length % 2 === 1) {
//       arr.splice(Math.floor(str.length / 2),1).join("");
//   }
//   for (let index = 1; index < (arr.length / 2) + 1; index++) {
//     final += `${arr[index - 1]}${arr[arr.length - index]}${index}`
//   }
//   return final
//   }

//   console.log(charConcat("abc!def"));
//   console.log(charConcat('abcdef'));

// function longestConsec(arr, num) {
// let subs = (substrings(arr, num) || []).filter(arr => arr.length === num)
// let max = 0;
// let final = []
// subs.forEach(sub => {
//   let reducer = sub.reduce((accum,el) => accum + el.length , 0);
//   if (reducer > max) {
//     max = reducer;
//     final = sub
//   }
// })
// return final.join("");
// }

// function substrings(arr, num) {
//   let final = []
//   for (let start = 0; start < arr.length; start++ ) {
//     final.push(arr.slice(start, start + num))
//   }
//   return final;
// }

// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
// console.log(longestConsec([], 3) === ""); // true
// console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
// console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true

// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:

// function smallerNumbersThanCurrent(arr) {
//   let unique = [];
//   arr.forEach(el => {
//     if (!unique.includes(el)) {
//       unique.push(el);
//     }
//   })
// return arr.map(el => {
//   return unique.filter(el2=> {
//     return el > el2;
//   }).length;
// })
// }

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
// console.log(smallerNumbersThanCurrent(
//   [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
// console.log(smallerNumbersThanCurrent([1])); // [0]

// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// Examples:


// function minimumSum(arr) {
// if (arr.length < 5) return null;
// let subs = substrings(arr).filter(sub => sub.length === 5)
// return Math.min(...subs.map(arr2 => {
//   return arr2.reduce((accum, el) => accum + el)
// }))

// }

// function substrings(arr) {
//   let final = [];
//   for (let start = 0; start < arr.length; start++) {
//     for (let chars = 5; chars <= arr.length - start; chars++) {
//       final.push(arr.slice(start , start + chars));
//     }
//   }
//   return final
// }


// console.log(minimumSum([1, 2, 3, 4]) === null);
// console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// // The tests above should each log "true".

// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

// Examples:

// function closestNumbers(arr) {
//   let diff = Infinity;
//   let finalArr = []
//   for (let index = 0; index < arr.length; index++) {
//     for (let j = 0; j < arr.length; j++) {
//       let difference = Math.abs(arr[index] - arr[j]);
//       if (difference < diff && index !== j) {
//         diff = difference;
//         finalArr = [arr[index], arr[j]];
//       }
//     }
//   }
//   return finalArr;
// }

// console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
// console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
// console.log(closestNumbers([12, 7, 17]));             // [12, 7]?**

// function createCar(make, fuelLevel, engineOn) {
// return {
//   make,
//  fuelLevel,
//   engineOn
// }
// }

// let raceCar1 = createCar('BMW', 0.5, false);
// console.log(raceCar1)

// let raceCar2 = createCar('Ferrari', 0.7, true);
// console.log(raceCar2)

// let raceCar3 = createCar("Jaguar", 0.4, false);
// console.log(raceCar3);

function createBook(title, author , read = false) {
  return {
    title,
    author,
    read,

    readBook() {
      this.read = true;
    },

    getDescription() {
      let final = `${this.title} was written by ${this.author}. `;
      if (this.read === false) {
        final += "I haven't read it!"
      } else {
        final += "I have read it."
      }
      console.log(final);
    }
  }
}

let book1 = createBook('Mythos', 'Stephen Fry');
console.log(book1);
console.log(book1.getDescription());

let book2 = createBook("Me Talk Pretty One Day", "David Sedaris");
console.log(book2)
console.log(book2.getDescription());

let book3 = createBook("Aunts aren't Gentleman", "PG Wodehouse");
console.log(book3);
console.log(book3.getDescription());