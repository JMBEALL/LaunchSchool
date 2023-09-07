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




function digitalRoot(n) {
  let sum = String(n).split("").reduce((accum,el) => accum + +el, 0);

  while (String(sum).length > 1) {
    sum = String(sum).split("").reduce((accum,el) => accum + +el, 0);
  }
    return sum;
  }
  console.log(digitalRoot(16))
  console.log(digitalRoot(456))





