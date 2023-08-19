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

function palindrome(num, s) {
  if ((typeof num === 'string' || typeof s === "string") || (num < 0 || s < 0)) {
    return  "NOT VALID";
  }
  if (num < 10) {
    num = 10;
  }
  let palindromArr = [];
  for (let index = num; index < Infinity; index++) {
    if (palindromArr.length === s) {
      return palindromArr;
    } else if ( index === +(String(index).split("").reverse().join(""))) {
      palindromArr.push(index);
    }
  }
}


console.log(palindrome(6,4));
// [11,22,33,44]
console.log(palindrome(75,1));
// [77]
console.log(palindrome(101,2));
// [101,111]
console.log(palindrome(20,0));
// []
console.log(palindrome(0,4));
// [11,22,33,44]

console.log(palindrome("ACCDDCCA",3));
// "Not valid"
console.log(palindrome(773,"1551"));
// "Not valid"
console.log(palindrome(-4505,15));
// "Not valid"
console.log(palindrome(4505,-15));
// "Not valid"

