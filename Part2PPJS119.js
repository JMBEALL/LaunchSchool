const e = require('cors');
const readline = require('readline-sync');

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

// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// console.log(arr.map(nestArr => {
//   return nestArr.filter(el => el % 3 === 0);
// }))

// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// console.log(arr.sort((a,b) => {
//  return a.filter(el => el % 2 === 1).reduce((accum, el2) => accum + el2) - b.filter(el => el % 2 === 1).reduce((accum,el2) => accum + el2)
// }))

// let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// console.log(Object.fromEntries(arr));

// function accum(str) {
//   let newStr = "";
//   let arr = str.split("");
//   for (let index = 0; index < arr.length; index++) {
//     for (let j = 0; j < index + 1; j++) {
//       if (j === 0) {
//         newStr += arr[index].toUpperCase();
//       } else if (j > 0) {
//         newStr += arr[index].toLowerCase();
//       }
//     }
//     newStr += "-";
//   }
//   let final = newStr.split("");
//   final.pop();
//   return final.join("");

// }

// // Test Cases
// console.log(accum("abcd"));   // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt"));   // "C-Ww-Aaa-Tttt"


// function longestPalindrome(str) {
//   if (str.length === 0) return 0;
//   let substrings = [];
//   for (let index = 0; index < str.length; index++) {
//     for (let j = index + 1; j < str.length; j++) {
//       substrings.push(str.slice(index , index + j));
//     }
//   }
//   console.log(substrings);
// }

// function longestPalindrome(str) {
//   let substrings = []; // Initialize an empty array to store substrings.
//   let longest = 0;
  
//   // Nested loops to iterate through the string.
//   for (let start = 0; start < str.length; start++) {
//     for (let end = start + 1; end <= str.length; end++) {
//       // Use slice to extract a substring from start to end index.
//       const substring = str.slice(start, end);
//       substrings.push(substring); // Add the substring to the array.
//     }
//   }
//   substrings.forEach( el => {
//     if (el === el.split("").reverse().join("") && longest < el.length) longest = el.length;
//   })
//   return longest;
// }


// console.log(longestPalindrome("a") == 1);
// console.log(longestPalindrome("aa") === 2);
// console.log(longestPalindrome("baa") === 2);
// console.log(longestPalindrome("aab") === 2);
// console.log(longestPalindrome("baabcd") === 4);
// console.log(longestPalindrome("baablkj12345432133d") === 9);


// let beg = Number(readline.question("beginning of range\n"));
// let end = Number(readline.question("end of range\n"));
// for (let index = beg; index <= end; index++) {
//   console.log(index);
// }

// let BILL_AMOUNT = +readline.question("How much is the bill?\n");
// let TIP_RATE = (+readline.question("What rate do you want to tip?\n")) / 100;

// let TIP = BILL_AMOUNT * TIP_RATE;
// console.log(`The tip is ${TIP}`);
// console.log(`The total is $${(BILL_AMOUNT + TIP).toFixed(2)}.`);

// function shortLongShort(str1, str2) {
//   return str1.length < str2.length ? str1 + str2 +str1 : str2 + str1 + str2;
// }
// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));         // "xyz"

// function isLeapYear(year) {
//   if (year <= 1752) {
//     return year % 4 === 0 ? true : false;
//   }
//   if(year % 100 === 0 && year % 400 === 0) return true;
//   if(year % 4 === 0 && year % 100 !== 0 ) return true;
//   return false;
// }

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // true
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // true
// console.log(isLeapYear(400));       // true

// function multisum(num) {
//   let sum = 0;
//   for (let index = 1; index <= num; index++){
//     if(index % 3 === 0 || index % 5 === 0) {
//       sum += index;
//     }
//   }
//   return sum;
// }

// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168


// function utf16Value(str) {
// return str.split("").reduce((accum,el) => {
//   return accum + el.charCodeAt();
// },0)
// }

// console.log(utf16Value('Four score'));         // 984
// console.log(utf16Value('Launch School'));      // 1251
// console.log(utf16Value('a'));                  // 97
// console.log(utf16Value(''));                   // 0

// // The next three lines demonstrate that the code
// // works with non-ASCII characters from the UTF-16
// // character set.
// const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
// utf16Value(OMEGA);                  // 937
// utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

// function greetings(arr,obj) {
//    return (`Hello, ${arr.join(" ")}! Nice to have a ${obj.title} ${obj.occupation} around.`);
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// // logs Hello, John Q Doe! Nice to have a Master Plumber around.

// let name = readline.question("What is your name?\n");
// if(name.endsWith("!")){
//   console.log(`HELLO ${name.slice(0, name.length - 1).toUpperCase()}. WHY ARE YOU SCREAMING?`)
// } else {
//   console.log(`Hello ${name}.`)
// }


// function isOdd(num) {
//   return Math.abs(num) % 2 === 1
// }
// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// for (let index = 1; index <= 99; index++) {
//   if (index % 2 === 0) console.log(index);
// }

// let length = +readline.question("What is the length of the room in meters?\n");
// let width = +readline.question("What is the width of the room in meters?\n");
// // console.log(length, width);

// let CONVERSION_RATE = 10.7639;
// let AREA = length * width;
// let AREA_IN_METERS = (AREA * CONVERSION_RATE).toFixed(2);
// console.log(`The area of the room is ${AREA} square meters (${AREA_IN_METERS} square feet).`);


// let TOTAL_BILL = +readline.question("How much is the bill?\n");

// let TIP_PERCENTAGE = (+readline.question("What percentage do you want to tip?\n")) / 100;

// let TIP = TOTAL_BILL * TIP_PERCENTAGE;
// let ABS_TOTAL = TOTAL_BILL + TIP;

// console.log(`The tip is $${TIP.toFixed(2)}. The total is $${ABS_TOTAL.toFixed(2)}.`);


// let num = +readline.question("Please enter a number greater than 0.\n");

// while (num <= 0) {
//   console.log('I said greater than 0, please.');
//   num = +readline.question("Please enter a number greater than 0.\n");


// let operation = readline.question("Please enter 's' to compute the sum, or 'p' to compute the product.").toLowerCase();
// let answer = 1
// for (let index = 1; index <= num; index ++) {
//   if (operation === 's') {
//     answer += index
//   } else if (operation === 'p') {
//     answer *= index
//   }
  
// }
// if(operation === 's') answer--;
// console.log(answer);

// function shortLongShort(str1,str2) {
//   return str1.length < str2.length ? str1+str2+str1 : str2+str1+str2;
// }

// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));         // "xyz"

// function multisum(num) {
//   let sum = 0;
//   while (num > 0) {
//     if (num % 3 === 0 || num % 5 === 0) {
//       sum += num;

//     }
//     num--;
//   }
//   console.log(sum)
// }

// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168

// function greetings(arr,obj) {
//   let name = arr.join(" ");
//   let title = obj.title;
//   let occupation = obj.occupation;
//   return `Hello, ${name}! Nice to have a ${title} ${occupation} around.`;
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

// let name = readline.question("What is your name?").trim();

// if (name.endsWith("!")) console.log(`HELLO ${name.slice(0,name.length - 1).toUpperCase()}. WHY ARE YOU SCREAMING?`);
// if (name) console.log(`Hello ${name}`);
// let multiply = (num1,num2) => num1 * num2;
// let square = num => multiply(num,num);



// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true
// let penultimate = str => str.split(" ")[str.split(" ").length - 2];

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// function xor(arg1, arg2) {
//   if(arg1 && !arg2 || !arg1 && arg2) return true;
//   return false;
// }

// console.log(xor(5, 0) === true);          // true
// console.log(xor(false, true) === true);   // true
// console.log(xor(1, 1) === false);         // true
// console.log(xor(true, true) === false);   // true

// function oddities(arr) {
//   return arr.filter((el,index) => index % 2 === 0)
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

// let age = Math.floor(Math.random() * 120) + 1;
// if (age >= 20 && age <= 120) {
//   console.log(`Teddy is ${age} years old.`)
// } else if (age < 20) {
//   age = Math.floor(Math.random() * 120) + 1;
// }


// function centerOf(str) {
//   let index = str.length / 2;
//   if (str.length % 2 === 0) {
//     return str.slice(index - 1, index + 1);
//   } else if (str.length % 2 === 1) {
//     return str[Math.floor(str.length / 2)];
//   }
// }
// console.log(centerOf('I Love JavaScript')); // "a"
// console.log(centerOf('Launch School'));     // " "
// console.log(centerOf('Launch'));            // "un"
// console.log(centerOf('Launchschool'));      // "hs"
// console.log(centerOf('x'));                 // "x"


// function negative(num) {
//   return Math.abs(num) * -1;
// }

// console.log(negative(5));     // -5
// console.log(negative(-3));    // -3
// console.log(negative(0));     // -0


// function crunch(str) {
//   let newStr = "";
//   for(let index = 0; index < str.length; index++) {
//     if (str[index] === str[index + 1]) {
//       continue;
//     } else {
//       newStr += str[index]
//     }
//   }
//   return newStr
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""

// function stringy(num) {
//   let binaryString = "";
//   while (num > 0) {
//     if (binaryString === "") {
//       binaryString += 1;
//     } else if (binaryString.endsWith("0")) {
//       binaryString += 1
//     } else {
//       binaryString += 0
//     }
//     num--;
//   }

//   return binaryString;
// }

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"

// function twice(num) {
//   let length = String(num).length / 2;
//   let left = String(num).slice(0 , length);
//   // console.log(left);
//   let right = String(num).slice(length);
//   // console.log(right);
//   if (left === right) {
//     return num;
//   } else {
//     return num * 2;
//   }

// }
// console.log(twice(37));          // 74
// console.log(twice(44));          // 44
// console.log(twice(334433));      // 668866
// console.log(twice(444));         // 888
// console.log(twice(107));         // 214
// console.log(twice(103103));      // 103103
// console.log(twice(3333));        // 3333
// console.log(twice(7676));        // 7676

// function cleanUp(str) {
// let newstr = "";
// let strArr = str.split("");

// strArr.forEach(char => {
//   if (char.match(/[a-z]/i)) {
//     newstr += char;
//   } else if (!char.match(/[a-z]/i)) {
//     if(!newstr.endsWith(" ")) newstr += " ";
//   }
// })
//   return newstr;
// }


// function cleanUp(str) {
//   return str.replace(/[^a-z]/ig, " ").replace(/\s+/ig, " ");
// }


// console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

// let num1 = +readline.question("Enter the first number:\n");
// let num2 = +readline.question("Enter the second number:\n");
// let num3 = +readline.question("Enter the third number:\n");
// let num4 = +readline.question("Enter the fourth number:\n");
// let num5 = +readline.question("Enter the fifth number:\n");
// let num6 = +readline.question("Enter the sixth number:\n");

// if (num6 === (num1||num2||num3||num4||num5)) {
//   console.log(`The number ${num6} appears in ${num1},${num2},${num3},${num4},${num5}!`)
// } else {
//   console.log(`The number ${num6} does not appear in ${num1},${num2},${num3},${num4},${num5}!`)
// }

// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }

// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true

// function isRealPalindrome(str) {
//   // console.log(str.match(/[a-z0-9]/ig).join(""))
//   return str.match(/[a-z0-9]/ig).join("").toLowerCase() === str.match(/[a-z0-9]/ig).reverse().join("").toLowerCase();
// }

// console.log(isRealPalindrome('madam'));               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653'));              // true
// console.log(isRealPalindrome('356a653'));             // true
// console.log(isRealPalindrome('123ab321'));            // false

// function isPalindromicNumber(num) {
//   let numStr = String(num);
//   return num === +numStr.split("").reverse().join("");
// }

// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true

// function runningTotal(arr) {
//   let runningTotal = [arr[0]];
//   for (let index = 0; index < arr.length; index++) {
//     runningTotal.push(runningTotal[index] + arr[index + 1])
//   }
//   runningTotal.pop();
//   return runningTotal
// }

// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []

// function wordSizes(str) {
//   if(str.length === 0) return {};
//   let cache = {};
//   let arr = str.split(" ");
//   // console.log(arr);

//   arr.forEach( el => {
//     el = el.match(/[a-z]/ig);
//     // console.log(el)
//     if (cache[el.length]) {
//       cache[el.length]++;
//     } else {
//       cache[el.length] = 1;
//     }
// })
// return cache;
// }


// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
// console.log(wordSizes(''));                                            // {}

// function swap(str) {
//   let arr = str.split(" ");
//   // console.log(arr);
//   return arr.map(el => el.split("").reverse().join("")).join(" ");
// }

// console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde'));                          // "ebcdA"
// console.log(swap('a'));                              // "a"

// function union(arr1,arr2){
//   let arr = [...arr1, ...arr2];
//   let newArr = []
// arr.forEach(el => {
//   if (!newArr.includes(el)) {
//     newArr.push(el)
//   }
// })
// return newArr.sort((a,b) => a - b)
// }

// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]


// function crunch(str) {

//   console.log(str.replace(/(.)\1+/g, '$1'));
// }

// function crunch(str) {
//   let newStr = "";
//   let arr = str.split("")
//   for (let index = 0; index < arr.length; index++ ) {
//     if(str[index] !== str[index + 1]) {
//       newStr += str[index];
//     }
//   }
//   console.log(newStr);
// }

// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

// function logInBox(str) {
// console.log(`+${"-".repeat(str.length + 2)}+`);
// console.log(`|${" ".repeat(str.length + 2)}|`);
// console.log(`| ${str} |`);
// console.log(`|${" ".repeat(str.length + 2)}|`);
// console.log(`+${"-".repeat(str.length + 2)}+`);
// }

// logInBox('To boldly go where no one has gone before.');
// logInBox('');
// // logInBox("Jordan Beall, you've got this, Bitch! Believe :)");
// // logInBox("Fuck yeah I do. lets fucking conquer this shit and change my life!");

// function stringy(digit) {
//   let str = "";
//   while (digit > 0) {
//     if (str.endsWith("1")) {
//       str += 0;
//     } else {
//       str += 1;
//     }
//     digit--;
//   }
//   return str;
// }

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"

// function triangle(num) {
// let spaces = num - 1;
// let stars = num - spaces;

// while (num > 0) {
//   console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
//   spaces--;
//   stars++;
//   num--;
// }
// }


// triangle(5);

// //     *
// //    **
// //   ***
// //  ****
// // *****

// triangle(9);

// //         *
// //        **
// //       ***
// //      ****
// //     *****
// //    ******
// //   *******
// //  ********
// // *********

// function twice(num) {
// if(doubleNum(num)) {
//   return num;
// } else {
//   return num * 2;
// }
// }

// function doubleNum(int) {
//   let str = String(int);
//   // let arr = str.split("");
//   let half = str.length / 2;
//   let left = str.slice(0, (half));
//   let right = str.slice(half);
//   return (str.length % 2 === 0 && left === right)
// }

// console.log(twice(37));          // 74
// console.log(twice(44));          // 44
// console.log(twice(334433));      // 668866
// console.log(twice(444));         // 888
// console.log(twice(107));         // 214
// console.log(twice(103103));      // 103103
// console.log(twice(3333));        // 3333
// console.log(twice(7676));        // 7676

// function cleanUp(str) {
//   return str.replace(/[^a-z]/ig, " ").replace(/\s+/, " ");

// }

// console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

// let arr = [];
// let one = arr.push(+readline.question("Please enter the first number\n"));
// let two = arr.push(+readline.question("Please enter the first number\n"));
// let three = arr.push(+readline.question("Please enter the first number\n"));
// let four = arr.push(+readline.question("Please enter the first number\n"));
// let five = arr.push(+readline.question("Please enter the first number\n"));
// let six = +readline.question("Please enter the first number\n");
// console.log(arr);
// console.log(arr.includes(six));

// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }

// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true

// function isRealPalindrome(str) {
// return str === str.match(/[a-z0-9]/ig).reverse().join("");
// }

// console.log(isRealPalindrome('madam'));               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653'));              // true
// console.log(isRealPalindrome('356a653'));             // true
// console.log(isRealPalindrome('123ab321'));            // false

// function sum(num) {
//   return num.toString().split("").reduce((accum,el) => accum + +el,0);
//   // .reduce((accum,el) => accum + el, 0);
// }

// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45


// function alphabeticNumberSort(arr) {
//   let indexes = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

//   return arr.sort((a,b) => indexes[a] - indexes[b]);
// }
// console.log(alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// function multiplyAllPairs(arr1, arr2) {
//   let outputArr = [];
  
//   for (let index = 0; index < arr1.length; index++) {
//     for (let j = 0; j < arr2.length; j++) {
//       outputArr.push(arr1[index] * arr2[j]);
//     }
//   }
//   return outputArr.sort((a,b) => a- b);

// }

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

// 
// function substrings(str) {
// let substrings = [];
// for(let length = 0; length <  str.length ; length++) {
//   for (let char = 1; char < str.length; char++) {
//     substrings.push(str.slice(length, length + char))
//   }
// }
// return substrings;
// }

// console.log(substrings('abcde'));

// // returns
// // [ "a", "ab", "abc", "abcd", "abcde",
// //   "b", "bc", "bcd", "bcde",
// //   "c", "cd", "cde",
// //   "d", "de",
// //   "e" ]



// function sum(num) {
//   return String(num).split("").reduce((accum,el) => accum + +el, 0);

// }
// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45


// let NUMBER_ARRAY = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

// function alphabeticNumberSort(arr) {
//   return arr.sort(helpMe);
// }

// function helpMe(a, b) {
//   if (NUMBER_ARRAY[a] > NUMBER_ARRAY[b]) {
//     return 1;
//   } else if (NUMBER_ARRAY[a] < NUMBER_ARRAY[b]) {
//     return -1;
//   } else {
//     return 0;
//   }
// }


// console.log(alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// function multiplyAllPairs(arr1,arr2) {
//   let finalArr = [];
//   for (let index = 0; index < arr1.length; index++ ) {
//     for (let j = 0; j < arr2.length; j++) {
//       finalArr.push(arr1[index] * arr2[j]);
//     }
//   }
//   return finalArr.sort((a,b)=> a - b);
// }

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]



// // returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

// function palindromes(str) {
// let arr = substrings(str)
// let palin = [];
// arr.forEach( el => {
//   if(isPalin(el)) {
//     palin.push(el)
//   }
// })
// return palin;
// }


// function substrings(str) {
//   let substringArr = [];
//   for (let startingIndex = 0; startingIndex < str.length; startingIndex++) {
//     for (let numChars = 1; numChars <= str.length - startingIndex; numChars++) {
//       substringArr.push(str.slice(startingIndex, startingIndex + numChars));
//     }
//   }
//   return substringArr;
// }

// function isPalin(el) {
//   return (el === el.split("").reverse().join("") && el.length > 1);
// }

// // console.log(substrings('abcde'));
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
// let arr1 = [];
// let finalArr = []
// for (let start = 1; start <= arr.length; start++) {
// arr1.push(arr.slice(0, start));
// }
// arr1.forEach( arr2 => {
//   return finalArr.push(arr2.reduce((accum,el) => accum + el, 0));
// })
// return finalArr.reduce((accum,el) => accum + el, 0)
// }

// console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35


// function sumOfSums(arr) {
//   let sum = 0;
//   for (let start = 1; start <= arr.length; start++) {
//     sum += arr.slice(0 , start).reduce((accum,el) => accum + el, 0);
//   }
//   return sum;
// }

// function isUppercase(str) {
// let upperCheck = str.match(/[A-Z ]/g);
// return str.length === upperCheck.length;
// }

// function isUppercase(str) {
//   let allUp = true;
//   str.split("").forEach(el => {
//     if (!el.match(/[A-Z 0-9!]/)) {
//       allUp = false;
//     }
//   })
//   return allUp
// }

// console.log(isUppercase('t'));               // false
// console.log(isUppercase('T'));               // true
// console.log(isUppercase('Four Score'));      // false
// console.log(isUppercase('FOUR SCORE'));      // true
// console.log(isUppercase('4SCORE!'));         // true
// console.log(isUppercase(''));                // true

// function removeVowels(arr) {
//   return arr.map(str => {
//     if(str.match(/[^aeiou]/ig) === null) {
//       return "";
//     } else {
//       return str.match(/[^aeiou]/ig).join("");
//     }
//   })
//   }


// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

// function letterCaseCount(str) {
//   let caseCountObj = {lowercase: 0,
//                       uppercase: 0,
//                       neither:0};

//   str.split("").forEach(el => {
//     if (el.match(/[A-Z]/)) {
//       caseCountObj.uppercase++;
//     } else if (el.match(/[a-z]/)) {
//       caseCountObj['lowercase']++;
//     } else {
//       caseCountObj.neither++
//     }
//   })
//   return caseCountObj;
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

// let str = "cast";
// if(str.match(/s/)) console.log("matched s");
// if(str.match(/x/)) console.log("matched x");

// function swapCase(str) {

//   return str.split("").map(el => {
//     if (el.match(/[A-Z]/)) {
//       return el.toLowerCase();
//     } else if (el.match(/[a-z]/)) {
//       return el.toUpperCase();
//     } else {
//       return el;
//     }
//   }).join("");
// }

// console.log(swapCase('CamelCase'));              // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"



// function staggeredCase(str) {
//   let newStr = "";
//   for (let index = 0; index < str.length; index++) {
//     if (index % 2 === 0) {
//       newStr += str[index].toUpperCase();
//     } else {
//       newStr += str[index].toLowerCase();
//     }
//   }
//   return newStr;
// }


// console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

// function staggeredCase(str) {
//   let count = 0;
//   let toggle = 0
//   let newStr = "";
//   while (count < str.length) {
//     if (str[count].match(/[a-z]/i) && toggle % 2 === 0){{
//       newStr += str[count].toUpperCase()
//       count++;
//       toggle++;
//     }} else if (str[count].match(/[a-z]/i) && toggle % 2 !== 0) {
//       newStr += str[count].toLowerCase();
//       count++;
//       toggle++;
//     } else {
//       newStr += str[count];
//       count++
//     }
//   }
//   return newStr;
// }

// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );


// function wordLengths(str) {
//   if (str === "" || str === undefined) return [];
//   return str.split(" ").map(el => el + " " + el.length);
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

// function searchWord(word, str) {

// return str.split(" ").filter(el => el.toLowerCase() === word.toLowerCase()).length;

// }

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// console.log(searchWord('sed', text));      // 3

// function rotateArray(arr) {
//   if (!Array.isArray(arr)) return undefined;
//   if(arr.length === 0) return [];

//   let newArr = [...arr];
//   let el = newArr.shift();
//   newArr.push(el);
//   return newArr;
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
// let numStringArr = String(num).split("");
// let shiftArr = numStringArr.slice(-count);
// let el = shiftArr.shift();
// shiftArr.push(el);
// return +numStringArr.slice(0, -count).concat(shiftArr).join("")
// }

// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917

// function maxRotation(num) {
//   if (String(num).length === 1) return num;
//   let strNum = String(num).slice(1) + String(num)[0];
//   let arr;
//   let el;
//   for(let index = 1; index <= strNum.length; index++) {
//     arr = strNum.slice(index).split("")
//     // console.log(`arr = ${arr}`)
//     el = arr.shift();
//     // console.log(`el = ${el}`)
//     arr.push(el);
//     // console.log(`updatedArr = ${arr}`)
//     strNum = strNum.slice(0, index) + arr.join("");
//     // console.log(strNum)
//   }
//   return +strNum;
// }

// console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
// console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146));      // 7321609845


// function minilang(str){
//   let stack = [];
//   let register = 0;
//   let arr = str.split(" ");
//   if (typeof +arr[0] === "number") {
//     register = +arr[0];
//     arr.shift();
//   }
//   // console.log(arr);

//   arr.forEach((el,index) => {
//     if (el === "PRINT") {
//       console.log(register);
//     } else if (el === "PUSH" ){
//       stack.push(register);
//     } else if (el === "ADD") {
//       register += +stack.pop();
//     } else if (el === "SUB") {
//       register -= +stack.pop();
//     } else if (el === "MULT") {
//       register *= +stack.pop();
//     } else if (el === "DIV") {
//       register = parseInt(register / +stack.pop());
//     } else if (el === "REMAINDER") {
//       register = parseInt(register % +stack.pop());
//     } else if (el === "POP") {
//       register = +stack.pop();
//     }
//   })
//   return +register;
// }

// console.log(minilang('PRINT'));
// // 0

// console.log(minilang('5 PUSH 3 MULT PRINT'));
// // 15

// console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
// // 5
// // 3
// // 8

// console.log(minilang('5 PUSH POP PRINT'));
// // 5

// console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
// // 5
// // 10
// // 4
// // 7

// console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));
// // 6

// console.log(minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT'));
// // 12

// console.log(minilang('-3 PUSH 5 SUB PRINT'));
// // 8

// console.log(minilang('6 PUSH'));
// // (nothing is printed because the `program` argument has no `PRINT` commands)

// function range(start, end = -1) {
//   if (end === -1) {
//     end = start;
//     start = 0;
//   }
//   let range = [];

//   for (let element = start; element <= end; element++) {
//     range.push(element);
//   }

//   return range;
// }

// // function range(end) {
// //   return range(0, end);
// // }

// // Examples

// console.log(range(10, 20));
// console.log(range(5));

// let memberDirectory = {
//   'Jane Doe': '323-8293',
//   'Margaret Asbury': '989-1111',
//   'Callum Beech': '533-9090',
//   'Juanita Eastman': '424-1919',
// };

// function isValidName(name) {
//   return (/^[a-z]+ [a-z]+$/i).test(name);
// }

// function isValidPhone(phone) {
//   return (/^\d{3}-\d{4}$/).test(phone);
// }

// function validMemberInfo(name, phone) {
//   return isValidName(name) && isValidPhone(phone);
// }

// function addMember(name, phone) {
//   if (validMemberInfo(name, phone)) {
//     return memberDirectory[name] = phone;
//   } else {
//     return 'Invalid member information.';
//   }
// }

// console.log(addMember('Laura Carlisle', '444-2223'));
// console.log(addMember('Rachel Garcia', '232-1191'));
// console.log(addMember('Earl 5mith', '331-9191'));

// console.log(memberDirectory);

// function average(nums) {
//   let sum = nums.reduce((total, num) => total + num);

//   return sum / nums.length;
// }

// function median(nums) {
//   nums.sort((a,b) => a - b);

//   let median;
//   let length = nums.length;
//   if (length % 2 === 0) {
//     median = average([nums[(length / 2) - 1], nums[length / 2]]);
//   } else {
//     median = nums[Math.floor(length / 2)];
//   }

//   return median;
// }

// Tests

// let quarter1ExamScores = [89, 72, 100, 93, 64, 97, 82, 87, 90, 94];
// let quarter2ExamScores = [76, 91, 89, 90, 91, 67, 99, 82, 91, 87];
// let quarter3ExamScores = [99, 91, 88, 72, 76, 64, 94, 79, 86, 88];
// let quarter4ExamScores = [100, 94, 73, 88, 82, 91, 97, 99, 80, 84];

// // should all log 'true':
// console.log(average(quarter1ExamScores) === 86.8);
// console.log(average(quarter2ExamScores) === 86.3);
// console.log(average(quarter3ExamScores) === 83.7);
// console.log(average(quarter4ExamScores) === 88.8);

// console.log(median(quarter1ExamScores) === 89.5);
// console.log(median(quarter2ExamScores) === 89.5);
// console.log(median(quarter3ExamScores) === 87);
// console.log(median(quarter4ExamScores) === 89.5);

// function isOdd(num) {
//   return Math.abs(num) % 2 === 1;
// }
// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// let count = 1
// while (count <= 99) {
//   if (count % 2 === 1) console.log(count);
//   count++;
// }

// count = 2 
// while (count < 100) {
//   if (count % 2 === 0) console.log(count);
//   count++;
// }

// let length = +readline.question("What is the length of the room in meters?\n");
// let width = +readline.question("What is the width of the room in meters?\n");
// let SQUARE_METER = 10.7639;
// let AREA = (length * width).toFixed(2);
// let SQUARE_FEET = (AREA * SQUARE_METER).toFixed(2);
// console.log(`The area of the room is ${AREA} square meters (${SQUARE_FEET} square feet).`);

// let BILL_TOTAL = +readline.question("What is the total amount of the bill?\n");
// let TIP_PERCENT = +readline.question("What percentage tip would you like to leave?\n");
// let TOTAL_TIP = +(BILL_TOTAL * (TIP_PERCENT * .01)).toFixed(2);
// let TOTAL = +(BILL_TOTAL + TOTAL_TIP).toFixed(2);

// console.log(` The tip is $${TOTAL_TIP}. The total is $${TOTAL}.`)

// const int = +readline.question("Please enter an integer greater than 0\n");
// const math = readline.question("Enter 's' to compute the sum, or 'p' to compute the product").toLowerCase();
// let total = 1;
// for (let index = 1; index <= int; index++) {
//   if (math === 's') {
//     total += index;
//   } else if (math === "p") {
//     total *= index
//   }
//   console.log(total);
// }


// function shortLongShort(str1,str2) {
//   return str1.length < str2.length ? str1 + str2 + str1 : str2 + str1 + str2;
// }

// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));         // "xyz"

// function isLeapYear(year) {
//   if (year >= 1752) {
//     if (year % 4 === 0 && year % 100 !== 0) {
//       return true;
//     } else if (year % 100 === 0 && year % 400 === 0 && year % 4 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   if (year < 1752) {
//     return year % 4 === 0;
//   }
 
// }

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // false
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // false
// console.log(isLeapYear(400));       // true

// function multisum(num) {
//   let arr = [];
//   for (let index = 1; index <= num; index++) {
//     if (index % 3 === 0 || index % 5 === 0) {
//       arr.push(index);
//     }
//   }
//   return arr.reduce((accum,el) => accum + el, 0);
// }

// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168

// function utf16Value(str) {
//   let arr = str.split("");
//   return arr.reduce((accum,el) => accum + el.charCodeAt(), 0)
// }

// console.log(utf16Value('Four score'));         // 984
// console.log(utf16Value('Launch School'));      // 1251
// console.log(utf16Value('a'));                  // 97
// console.log(utf16Value(''));                   // 0

// // The next three lines demonstrate that the code
// // works with non-ASCII characters from the UTF-16
// // character set.
// const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
// utf16Value(OMEGA);                  // 937
// utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

// function greetings(arr, obj) {
//   let name = arr.join(" ");
//   let title = obj.title;
//   let occupation = obj.occupation;

//   console.log(`Hello, ${name}! Nice to have a ${title} ${occupation} around.`);
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// // logs Hello, John Q Doe! Nice to have a Master Plumber around.

// const name = readline.question("What is your name?\n");

// if (name.match(/!$/)) {
//   console.log(`HELLO ${name.slice(0, name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`);
// } else {
//   console.log(`Hello ${name}.`);
// }

// function multiply(num1,num2) {
//   return num1 * num2;
// }

// const multiply = (num1,num2) => num1 * num2;

// const square = (num1) => multiply(num1,num1);

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

// function penultimate(str) {
//   return str.split(" ")[str.split(" ").length - 2];
// }

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// function xor(arg1, arg2) {
//   return ((arg1 && !arg2) || (arg2 && !arg1))
// }

// console.log(xor(5, 0) === true);          // true
// console.log(xor(false, true) === true);   // true
// console.log(xor(1, 1) === false);         // true
// console.log(xor(true, true) === false);   // true

// function oddities(arr) {
//   return arr.filter((el,index) => index % 2 === 0);
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []


// let age = 0;
// function randomNum() {
//   return age = Math.floor(Math.random() * 120) + 20;
// }

// while (age < 20 || age > 120) {
//   age = randomNum();
// }

// console.log(`Teddy is ${age} years old!`);

// function centerOf(str) {
//   if (str.length % 2 === 0) {
//    return str.slice((str.length / 2) - 1 , (str.length / 2) + 1);
//   } else if (str.length % 2 === 1) {
//     return str[Math.floor(str.length / 2)]
//   }

// }

// console.log(centerOf('I Love JavaScript')); // "a"
// console.log(centerOf('Launch School'));     // " "
// console.log(centerOf('Launch'));            // "un"
// console.log(centerOf('Launchschool'));      // "hs"
// console.log(centerOf('x'));                 // "x"

// function negative(num) {
//   return num > 0 ? num * -1 : num;
// }

// console.log(negative(5));     // -5
// console.log(negative(-3));    // -3
// console.log(negative(0));     // -0

// function crunch(str) {
//   let newStr = "";
//   for (let index = 0; index < str.length; index++) {
//     if (str[index] !== str[index + 1]) {
//       newStr += str[index];
//     }
//   }
//   return newStr;
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""

// function logInBox(str) {
// console.log(`+${"-".repeat(str.length + 2)}+`);
// console.log(`|${" ".repeat(str.length + 2)}|`);
// console.log(`| ${str} |`);
// console.log(`|${" ".repeat(str.length + 2)}|`);
// console.log(`+${"-".repeat(str.length + 2)}+`);
// }

// logInBox('Hello, my name is Jordan!');

// function stringy(num) {
//   let binaryString = "";
//   for (let index = 0; index < num; index++) {
//     if (index % 2 === 0) {
//       binaryString+= "1";
//     } else {
//       binaryString += "0"
//     }
//   }
//   return binaryString;
// }

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"

// function triangle(num) {
//   let spaces = num - 1;
//   let stars = 1;
//   // let starStr = ""
//   for (let index = 0; index < num; index++) {
//     console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`)
//     spaces--;
//     stars++;
//   }
// }

// triangle(5);

// //     *
// //    **
// //   ***
// //  ****
// // *****

// triangle(9);

// //         *
// //        **
// //       ***
// //      ****
// //     *****
// //    ******
// //   *******
// //  ********
// // *********

// let noun = readline.question("Enter a noun:\n");
// let verb = readline.question("Enter a verb:\n");
// let adjective = readline.question("Enter an adjective:\n");
// let adverb = readline.question("Enter a adverb:\n");

// console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? Thats hilarious!`);
// console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`);
// console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);

// function twice(num) {
//   let strNumArr = String(num).split("");
//   let same = strNumArr.slice(0, strNumArr.length / 2).join("") === strNumArr.slice(strNumArr.length / 2).join("");

//   if(same && strNumArr.length % 2 === 0) {
//     return num;
//   } else {
//     return num * 2;
//   }
// }

// console.log(twice(37));          // 74
// console.log(twice(44));          // 44
// console.log(twice(334433));      // 668866
// console.log(twice(444));         // 888
// console.log(twice(107));         // 214
// console.log(twice(103103));      // 103103
// console.log(twice(3333));        // 3333
// console.log(twice(7676));        // 7676

// function cleanUp(str) {
// let strR = str.replace(/[^a-z]/ig, " ");
// console.log(strR);
// let final = "";
// for (let index = 0; index < strR.length; index++) {
//   if (strR[index] === " " && strR[index + 1] === " ") {
//     final += "";
//   } else {
//     final += strR[index]
//   }
// }
// return final;
// }

// console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

// let arr = [];
// let one = +readline.question("Enter the 1st number:\n");
// arr.push(one);
// let two = +readline.question("Enter the 2nd number:\n");
// arr.push(two);
// let three = +readline.question("Enter the 3rd number:\n");
// arr.push(three);
// let four = +readline.question("Enter the 4th number:\n");
// arr.push(four);
// let five = +readline.question("Enter the 5th number:\n");
// arr.push(five);
// let last = +readline.question("Enter the last number:\n");

// if (arr.includes(last)) {
//   console.log(`The number ${last} appears in ${arr.join()}.`);
// } else {
//   console.log(`The number ${last} does not appear in ${arr.join()}.`);
// }

// function isPalindrome(str) {
// return str === str.split("").reverse().join("");
// }

// // console.log(isPalindrome('madam'));               // true
// // console.log(isPalindrome('Madam'));               // false (case matters)
// // console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// // console.log(isPalindrome('356653'));              // true

// function isRealPalindrome(str) {
//   let newStr = str.match(/[a-z0-9]/ig).join("").toLowerCase();
//   // console.log(newStr);
//   return isPalindrome(newStr);

// }

// // console.log(isRealPalindrome('madam'));               // true
// // console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// // console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// // console.log(isRealPalindrome('356653'));              // true
// // console.log(isRealPalindrome('356a653'));             // true
// // console.log(isRealPalindrome('123ab321'));            // false

// function isPalindromicNumber(num) {
// let strNum = String(num);
// return isPalindrome(strNum);
// }

// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true

// function runningTotal(arr) {
//   let total = [];
//   for (let index = 0 ; index < arr.length; index++) {
//     let sum = 0;
//     for (let j = 0; j <=index; j++) {
//       sum += arr[j];
//     }
//     total.push(+sum);
//   }
// console.log(total);

// }

// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []

// function wordSizes(str) {
//   if (str === "") return {};
//   let obj = {};
//   let arr = str.split(" ");
//   arr.forEach(el => {
//     el = el.match(/[a-z]/ig)
//     if (obj[el.length]) {
//       obj[el.length]++;
//     } else {
//       obj[el.length] = 1;
//     }
//   })
//   return obj;
// }

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));                                            // {}

// function swap(str) {
// let arr = str.split(" ");
// let newArr = [];
// arr.forEach(el => {
//   let first = el[0];
//   let last = el[el.length - 1];
//   let mid = el.slice(1, el.length - 1);
//   newArr.push(last + mid + first);
// })
// return newArr.join(" ");
// }

// console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde'));                          // "ebcdA"
// console.log(swap('a'));                              // "a"

// function union(arr1,arr2) {
//   let total = [...arr1,...arr2].sort((a,b) => a - b);
//   let newArr = [];
//   for (let index = 0 ; index < total.length; index++) {
//     if (!newArr.includes(total[index])) {
//       newArr.push(total[index])
//     }
//   }
// return newArr;
// }

// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

// function halvsies(arr) {
//   let final = [];
//   if (arr.length % 2 === 0) {
//     final.push(arr.slice(0, arr.length / 2) , arr.slice(arr.length / 2) );
//   } else if (arr.length % 2 === 1) {
//     final.push(arr.slice(0, (arr.length / 2) + 1) , arr.slice((arr.length / 2) + 1) )
//   }
//   return final;
// }

// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]

// function findDup(arr) {
// let dup = 0;
// arr.sort((a,b) => a - b).forEach((el,index) => {
//   if (el === arr[index + 1]) {
//     dup = el;
//   }
// })
// return dup;
// }

// console.log(findDup([1, 5, 3, 1]));                                // 1
// console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73

// function interleave(arr1,arr2) {
//   let newArr = [];

//   for (let index = 0; index < arr1.length; index++) {
//     if (!newArr.includes(arr1[index])) {
//       newArr.push(arr1[index]);
//     }
//     for (j = 0; j <= index ; j ++) {
//       if (!newArr.includes(arr2[index])) {
//         newArr.push(arr2[index]);
//       }
//     }
//   }
//   return newArr;
// }

// console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

// function multiplicativeAverage(arr) {
//   return (arr.reduce((accum, el) => accum * el , 1) / arr.length).toFixed(3);
// }

// console.log(multiplicativeAverage([3, 5]));                   // "7.500"
// console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

// function multiplyList(arr1,arr2) {
//   let final = [];
//   arr1.forEach((el,index) => final.push(el * arr2[index]));
//   return final;
// }

// function digitList(num) {
//   return String(num).split("").map(el => +el);
// }

// console.log(digitList(12345));       // [1, 2, 3, 4, 5]
// console.log(digitList(7));           // [7]
// console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
// console.log(digitList(444));         // [4, 4, 4]

// function countOccurrences(arr) {
//   let obj = {};
//   for (let index = 0; index < arr.length; index++) {
//     if (obj[arr[index]]) {
//       obj[arr[index]]++;
//     } else {
//       obj[arr[index]] = 1;
//     }
//   }
//   for (let key in obj) {

//     console.log(`${key} => ${obj[key]}`);
//   }
// }

// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// // console output -- your output sequence may be different
// // car => 4
// // truck => 3
// // SUV => 1
// // motorcycle => 2

// function average(arr) {
//   return Math.floor(arr.reduce((accum,el) => accum + el , 0) / arr.length);
// }

// console.log(average([1, 5, 87, 45, 8, 8]));       // 25
// console.log(average([9, 47, 23, 95, 16, 52]));    // 40

// function repeater(str) {
//   let newStr = ""
//   str.split("").forEach( el => {
//     newStr += el.repeat(2);
//   })
//   return newStr;
// }

// console.log(repeater('Hello'));        // "HHeelllloo"
// console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
// console.log(repeater(''));             // ""

// function doubleConsonants(str) {
//   let newStr = "";
//   let arr = str.split("");
//   arr.forEach(el => {
//     if (el.match(/[^-aeiou0-9.! ]/)) {
//       newStr += el.repeat(2);
//     } else {
//       newStr += el;
//     }
//   })
//   return newStr;
// }

// console.log(doubleConsonants('String'));          // "SSttrrinngg"
// console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
// console.log(doubleConsonants(''));                // ""

// function reverseNumber(num) {
//    let nums = String(num).split("").reverse().join("");
//    let newNums = nums.match(/[^0]/).join("")
//    console.log(newNums);
// }

// console.log(reverseNumber(12345));    // 54321
// console.log(reverseNumber(12213));    // 31221
// console.log(reverseNumber(456));      // 654
// console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
// console.log(reverseNumber(1));        // 1

// function sequence(num) {
//   let final = [];
//   for (let index = 1; index <= num; index ++) {
//     final.push(index)
//   }
//   return final;
// }

// console.log(sequence(5));    // [1, 2, 3, 4, 5]
// console.log(sequence(3));    // [1, 2, 3]
// console.log(sequence(1));    // [1]

// function swapName(str) {
//   return str.split(" ").reverse().join(", ");
// }

// console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// function sequence(count,num2) {
//   if (count === 0) return [];
//   let final = [];
//   let pusher = num2;
//   while (count > 0) {
//     final.push(pusher);
//     pusher += num2;
//     count--;
//   }
//   return final
// }

// console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));         // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]
// console.log(sequence(0, 1000000));    // []


// function reverseSentence(str) {
//   return str.split(" ").reverse().join(" ");
// }

// console.log(reverseSentence(''));                       // ""
// console.log(reverseSentence('Hello World'));            // "World Hello"
// console.log(reverseSentence('Reverse these words'));    // "words these Reverse"


// function reverseWords(str) {
//   return str.split(" ").map(el => el.length >= 5 ? el.split("").reverse().join("") : el).join(" ");
// }

// console.log(reverseWords('Professional'));             // "lanoisseforP"
// console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
// console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

// function reverse(arr) {
// let copy = [...arr]
// for (let index = 0; index <= arr.length; index++) {
// arr[index] = arr.slice(-index + 1);
// }
// return arr;
// }

// let list = [1, 2, 3, 4];
// let result = reverse(list);
// console.log(result); // logs [4,3,2,1]
// console.log(list === result); // logs true

// let list1 = ["a", "b", "c", "d", "e"];
// let result1 = reverse(list1);
// console.log(result1); // logs  ["e", "d", "c", "b", "a"]
// console.log(list1 === result1); // logs true

// let list2 = ["abc"];
// let result2 = reverse(list2);
// console.log(result2); // logs  ["abc"]
// console.log(list2 === result2); // logs true

// let list3 = [];
// let result3 = reverse(list3);
// console.log(result3); // logs []
// console.log(list3 === result3); // logs true


// function isBalanced(str) {
//   let final = [];
//   let finalObj = {"(" : 0, ")" : 0};
//   let finalBool = true;
//   for (let index = 0; index < str.length; index++) {
//     if (str[index] === "(" || str[index] === ")") {
//       final.push(str[index])
//     }
//   }
//   final.forEach(el => finalObj[el]++)
//   console.log(finalObj);
//   console.log(Object.values(finalObj))
//   if (final.length % 2 !== 0) {
//     return false
//   } else if (final.length === 0) {
//     return true;
//   }  else if (final[0] === ")" || final[final.length - 1] === "("){
//     return false;
//   } else {
//     return Object.values(finalObj)[0] === Object.values(finalObj)[1]
//   }
 

// }


// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);

// function sum(num) {
//   return String(num).split("").reduce((accum,el) => accum + +el , 0);
// }

// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45

// function multiplyAllPairs(arr1, arr2) {
//   final = [];
//   for (let index = 0; index < arr1.length; index++) {
//     for (let j = 0; j <arr2.length; j++) {
//       final.push(arr1[index] * arr2[j]);
//     }
//   }
//   return final.sort((a,b) => a - b);
// }

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

// let nums = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ];
// console.log(nums.sort())
// function alphabeticNumberSort(arr) {

// }

// console.log(alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// function isUppercase(str) {
//   let newStr = str.replace(/[^a-zA-Z]/g, "");
//   console.log(newStr)
// return (/^[A-Z]*$/g).test(newStr);
// }

// console.log(isUppercase('t'));               // false
// console.log(isUppercase('T'));               // true
// console.log(isUppercase('Four Score'));      // false
// console.log(isUppercase('FOUR SCORE'));      // true
// console.log(isUppercase('4SCORE!'));         // true
// console.log(isUppercase(''));                // true


// function removeVowels(arr) {
//   return arr.map(el => {
//     return el.replace(/[aeiou]/ig, "");
//   })
// }
// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

// function letterCaseCount(str) {
// let cache = {"lowercase" : 0, "uppercase" : 0, "neither" : 0};

// str.split("").forEach(el => {
//     if ((/[a-z]/).test(el)) {
//       cache['lowercase']++
//     } else if ((/[A-Z]/).test(el)) {
//       cache.uppercase++;
//     } else {
//       cache.neither++;
//     }
//   })
//   return cache;
// }

// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

// function wordCap(str) {
// return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
// }

// console.log(wordCap('four score and seven'));       // "Four Score And Seven"
// console.log(wordCap('the javaScript language'));    // "The Javascript Language"
// console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'



// function swapCase(str) {
//   return str.split("").map(char => {
//     if((/[a-z]/).test(char)) {
//       return char.toUpperCase();
//     } else if ((/[A-Z]/.test(char))) {
//       return char.toLowerCase();
//     } else {
//       return char;
//     }
//   }).join("");
// }

// console.log(swapCase('CamelCase'));              // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

// function staggeredCase(str) {
//   let newStr = "";
//   for (let index = 0; index < str.length ; index++) {
//     if (index % 2 === 0) {
//       newStr+= str[index].toUpperCase()
//     } else {
//       newStr += str[index].toLowerCase()
//     }
//   }
//   return newStr;
// }

// console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

// function staggeredCase(){

// }

// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );

// function wordLengths(str) {
//   if (str === "" || str === undefined) return [];
//   return str.split(" ").map(word => word + " " + word.length);
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

// function searchWord(word, text) {
//   return text.split(" ").map(el => {
//     if (el.toLowerCase() === word.toLowerCase()) {
//       return `***${word.toUpperCase()}***`;
//     } else {
//       return el;
//     }
//   }).join(" ");
// }

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// console.log(searchWord('sed', text));      // 3

// function deleteDigit(n) {
//   let arrOfNums = String(n).split("").map(el => +el);
//   console.log(arrOfNums);
//   // let arrOfNums = [...str];
//   // console.log(arrOfNums);
//   let min = String(Math.min(...arrOfNums));
//   console.log(min);
// //   let regex = new Regex(`${}`)
//   let final =  String(n).replace(min, "");
//   console.log(final);
//   return +final;
// }

// console.log(deleteDigit(152));
// console.log(deleteDigit(1001));
// console.log(deleteDigit(10));

// function findNumber(array) {
//   let max = Math.max(...array);
//   let need = 0;
//   for (let index = 1; index <= +max; index++) {
//     if (!array.includes(index)) {
//       need = index;
//     }
//   }
//   return need;
// }

// console.log(findNumber([1,3,4,5,6,7,8]));
// console.log(findNumber([7,8,1,2,4,5,6]));
// console.log(findNumber([1,2,3,5]));
// console.log((findNumber([1,3])));

// function digPow(n, p){
//   let total = String(n).split("").reduce((accum,el) => {
//     // console.log(`accum:${accum}\nel:${el}\np:${p}`)
//      accum += Math.pow(+el , p)
//     p++;
//     return +accum;
//     ;
//   },0);


//   if((+total%n) === 0) {
//     return +total/n
//   } else {
//     return -1;
//   }
//   // console.log(+total);

// }

// console.log(digPow(89, 1)) //should return 1 since 8¹ + 9² = 89 = 89 * 1
// console.log(digPow(92, 1))// should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// console.log(digPow(695, 2)) //should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// console.log(digPow(46288, 3))



// ************************************************************************************************************************************************************************************************************************************




// // Given an array of numbers, for each number, find out how
// // many numbers in the array are smaller than it. When
// // counting numbers, only count unique values. That is, if a
// // given number occurs multiple times in the array, it
// // should only be counted once.

// // Examples:

// function smallerNumbersThanCurrent(arr) {
//   let noRepeatArr = [];
//   for (let index = 0; index < arr.length; index++) {
//     if (!noRepeatArr.includes(arr[index])) {
//       noRepeatArr.push(arr[index]);
//     }
//   }
//  return arr.map(el => {
//   let count = 0;
//   noRepeatArr.forEach(num => {
//     if (num < el) {
//       count++;
//     }

//   });
//   return count;
//  })
// }

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
// console.log(smallerNumbersThanCurrent(
//   [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
// console.log(smallerNumbersThanCurrent([1])); // [0]




// function minimumSum(arr) {
//   if (arr.length < 5) return null;
//   let min = Infinity;
//   for (let index = 0; index < arr.length; index++) {
//     let newArr = arr.slice(index, index + 5);
//     if(newArr.length < 5) return min;
//     console.log(newArr);
//     let reducer = newArr.reduce((accum,el) => accum + el, 0);
//     console.log(reducer);
//     if (reducer < min && newArr.length === 5) {
//       min = reducer;
//     }
//   }
//   console.log(min);
//   // return min;
// }

// // Write a function that takes one argument, an array of
// // integers. The function should return minimum sum of 5
// // consecutive numbers in the array. If the array contains
// // less than 5 elements, the function should return null.

// // Examples:

// // console.log(minimumSum([1, 2, 3, 4]) === null);
// // console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// // console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// // console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// // console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// // // The tests above should each log "true".







// function toWeirdCase(str) {
//   return str.split(" ").map((word, index) => {
//     if (index % 2 === 1) {
//       return word.split("").map((el,index) => {
//         if ((index + 1) % 4 === 0) {
//           return el.toUpperCase();
//         } else {
//           return el;
//         }
//       }).join("");
//     } else {
//       return word;
//     }
//   }).join(" ");

// }

// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

// Examples:

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

// The tests above should print "true".



// function closestNumbers(arr) {
//   let min = [];
//   let closest = Infinity;
//   for(let index = 0; index < arr.length; index++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (Math.abs(arr[index] - arr[j]) < closest && index !== j ) {
//         min = [arr[index], arr[j]];
//         closest = Math.abs(arr[index] - arr[j])
//       }
//     }
//   }
//   return min;
// }


// // Write a function that takes an array of integers and
// // returns the two numbers that are closest together in
// // value.

// // Examples:

// console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
// console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
// console.log(closestNumbers([12, 7, 17]));             // [12, 7]


// function leastCommonChar(str) {
//   let cache = {};
//   let arr = [];
//   str.split("").forEach(el => {
//     if (cache[el.toLowerCase()]) {
//       cache[el.toLowerCase()]++;
//     } else {
//       cache[el.toLowerCase()] = 1;
//     }
//   })
//   let min = Math.min(...Object.values(cache));

//   // console.log(cache);
//   for (let key in cache) {
//     if (cache[key] === min) {
//       arr.push(key);
//     }
//   }
//   return arr[0];
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

// function duplicates(arr){
//   if (arr.length === 1 || arr.length === 1) return 0;
//   let count = 0;
//   for (let index = 0; index <=arr.length; index++) {
//     for (let j = 0; j <=arr.length; j++) {
//       if (arr[index] === arr[j] && index !== j) {
//         count++;
//         arr.splice(index,1);
//         arr.splice(j - 1,1)
//       }
//     }
//   }
//   return count;
// }

// console.log(duplicates([1, 2, 5, 6, 5, 2]))
// console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]))
// console.log(duplicates([0, 0, 0, 0, 0, 0, 0]));
// console.log( duplicates([1000, 1000]));
// console.log( duplicates([]));
// console.log(duplicates([54]));


// function solution(fullText, searchText){
//   let regex = new RegExp(`${searchText}`, "g");
//   return fullText.match(regex).length || 0
// }

// console.log(solution('abcdeb','b'));

// function solve(s){
//   return Math.max(...s.match(/[aeiou]+/ig).map(el => el.length))
// }

// console.log(solve("codewarriors")) //2
// console.log(solve("suoidea")) // 3
// console.log(solve("ultrarevolutionariees"))//3
// console.log(solve("strengthlessnesses"))//1
// console.log(solve("cuboideonavicuare"))//2
// console.log(solve("chrononhotonthuooaos"))//5
// console.log(solve("iiihoovaeaaaoougjyaw"))//8



/*
P: 
  input:
    -number
  output:
    -boolean

E: 
D:
Algo:
  take the passed in number and check to see if there is a remainder whe divided by 2.
    - if there is, w eknow it is odd and can return it
*/

// function isOdd(num) {
//   return Math.abs(num) % 2 === 1;
// }
// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// for (let index = 1; index <= 99; index+= 2) {
//   console.log(index);
// }

// const length = +readline.question("What is the length of the room in meters?\n");

// const width = +readline.question("What is the width of the room in meters?\n");
// const area = (length * width).toFixed(2);
// const squareMeter = 10.7639;
// const squareFeet = (area * squareMeter).toFixed(2);

// console.log(`The area of the room is ${area} square meters (${squareFeet} square feet). `)


// function greetings(arr,obj) {
//   return `Hello, ${arr.join(" ")}! Nice to have a ${obj.title} ${obj.occupation} around.`;
// }
// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// // logs Hello, John Q Doe! Nice to have a Master Plumber around.

// let name = readline.question("What is your name?\n");

// if (name.endsWith("!")) {
//   console.log(`HELLO ${name.slice(0,name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`);
// } else {
//   console.log(`Hello ${name.trim()}.`);
// }
// function oddities(arr) {
//   return arr.filter(( el,index) => index % 2 === 0);
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

// function centerOf(str) {
// let arr = str.split("");
// if (arr.length % 2 === 0) {

//   return str[Math.floor(arr.length / 2) - 1] + str[Math.floor(arr.length / 2)]
// } else if (arr.length % 2 === 1) {
//   return arr[Math.floor(arr.length / 2)];
// }
// }

// console.log(centerOf('I Love JavaScript')); // "a"
// console.log(centerOf('Launch School'));     // " "
// console.log(centerOf('Launch'));            // "un"
// console.log(centerOf('Launchschool'));      // "hs"
// console.log(centerOf('x'));                 // "x"

// function crunch(str) {
//   return str.replace(/(\w)\1+/g, "$1");
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""

// function logInBox(str) {
//   console.log(`+${"-".repeat(str.length + 2)}+`);
//   console.log(`|${" ".repeat(str.length + 2)}|`);
//   console.log(`| ${str} |`);
//   console.log(`|${" ".repeat(str.length + 2)}|`);
//   console.log(`+${"-".repeat(str.length + 2)}+`);
// }



// logInBox('To boldly go where no one has gone before.');
// logInBox('Hey, Jordan! You\'re a badass Senior Software Engineer making 6 figs! ');

// function stringy(num) {
//   let string = "";
//   for (let index = 0; index < num; index++) {
//     if (index % 2 === 0) {
//       string += "1";
//     } else {
//       string += "0";
//     }
//   }
//   return string;
// }
// function stringy(num) {
//   let str = "";
//   let index =0;
//   while (num > 0) {
//   if (index % 2 === 0) {
//     str += "1";
//   } else {
//     str += "0";
//   }

//   num--;
//   index++
// }
//   return str;
// }


// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"

// function triangle(num) {
//   let spaces = num - 1;
//   let stars = 1;
//   while (num > 0) {
//     console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
//     num--;
//     spaces--;
//     stars++;
//   }
// }

// triangle(5);

// //     *
// //    **
// //   ***
// //  ****
// // *****

// triangle(9);

// //         *
// //        **
// //       ***
// //      ****
// //     *****
// //    ******
// //   *******
// //  ********
// // *********

// function twice(num) {
//   let str = String(num);
//   let mid = str.length / 2;
//   let left = str.slice(0, mid);
//   let right = str.slice(mid);

//   if (str.length % 2 === 0 && (left === right)) {
//     return num;
//   } else {
//     return num * 2;
//   }
// }

// console.log(twice(37));          // 74
// console.log(twice(44));          // 44
// console.log(twice(334433));      // 668866
// console.log(twice(444));         // 888
// console.log(twice(107));         // 214
// console.log(twice(103103));      // 103103
// console.log(twice(3333));        // 3333
// console.log(twice(7676));        // 7676

// function cleanUp(str) {
// let clean = str.replace(/[^a-z]/ig, " ").replace(/[ ]+/g, " ");
//     return clean;
// }

// console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }

// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true

// function isRealPalindrome(str) {
// let actual = str.match(/[\w]/g).map(el => el.toLowerCase()).join("");
// // console.log(actual);
// return actual === actual.split("").reverse().join("");

// }

// console.log(isRealPalindrome('madam'));               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653'));              // true
// console.log(isRealPalindrome('356a653'));             // true
// console.log(isRealPalindrome('123ab321'));            // false

// function isPalindromicNumber(num) {
//   return String(num) === String(num).split("").reverse().join("");
// }


// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true

// function runningTotal(arr) {
// let final = [];
// let sum = 0;
// for (let index = 0; index < arr.length ; index++) {
//   final.push(sum += arr[index]);
// }
// return final;
// }

// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []

// function wordSizes(str) {
//   if (str === "") return {};
//   let newStr = str.match(/[a-z ]/ig).join("");
//   console.log(newStr)
//   let cache = {};
//   newStr.split(" ").forEach( el => {
//     if (cache[el.length]) {
//       cache[el.length]++
//     } else {
//       cache[el.length] = 1
//     }
//   })
//   return cache;
// }

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));                                            // {}

// function swap(str) {
//   return str.split(" ").map(el => {
//     return swaplastAndFirst(el);
//   }).join(" ")

// }

// function swaplastAndFirst(word) {
//   let arr = word.split('');
//   let firstEl = arr.shift();
//   let lastEl = arr.pop();
//   arr.push(firstEl);
//   arr.unshift(lastEl)
//   // console.log(arr.join(""))
//   return arr.join("")
// }

// console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde'));                          // "ebcdA"
// console.log(swap('a'));                              // "a"

// function union(arr1,arr2) {
//   let final = [...arr1,...arr2];
//   let answer = []
//  for (let index = 0; index < final.length; index++) {
//   if (!answer.includes(final[index])) {
//     answer.push(final[index]);
//   }
//  }
//  return answer
// }

// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

// function halvsies(arr) {
// let final = [];
// if (arr.length % 2 === 0) {
// final.push(arr.slice(0, arr.length / 2), arr.slice(arr.length/2))
// } else {
//   final.push(arr.slice(0, (arr.length / 2)+ 1 ), arr.slice((arr.length / 2)+ 1))
// }
// return final;
// }

// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]

// function findDup(arr) {
//   let dup = [];
//   let answer = 0;
//   arr.forEach(el => {
//     if (!dup.includes(el)) {
//       dup.push(el);
//     } else {
//       answer = el;
//     }
//   })
//   return answer;
// }

// console.log(findDup([1, 5, 3, 1]));                                // 1
// console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73

// function interleave(arr1,arr2) {
// let final = [];
// for (let index = 0; index < arr1.length; index++) {
//   final.push(arr1[index], arr2[index]);
// }
// return final;
// }

// console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]


// function multiplicativeAverage(arr) {
//   return String((arr.reduce((accum,el) => {
//    return  accum * el;
//   }, 1)/ arr.length).toFixed(3))
// }

// console.log(multiplicativeAverage([3, 5]));                   // "7.500"
// console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

// function multiplyList(arr1,arr2) {
//   return arr1.map((el,index) => {
//     return el * arr2[index]
//   })
// }

// console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

// function digitList(num) {
//   return String(num).split("").map(el => +el);
// }

// console.log(digitList(12345));       // [1, 2, 3, 4, 5]
// console.log(digitList(7));           // [7]
// console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
// console.log(digitList(444));         // [4, 4, 4]

// function average(arr) {
// return Math.floor(arr.reduce((accum,el) => accum + el,0) / arr.length);
// }

// console.log(average([1, 5, 87, 45, 8, 8]));       // 25
// console.log(average([9, 47, 23, 95, 16, 52]));    // 40

// function repeater(str) {
//   return str.split("").map(el => el + el).join("");
// }

// console.log(repeater('Hello'));        // "HHeelllloo"
// console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
// console.log(repeater(''));             // ""

// function doubleConsonants(str) {
//   return str.split("").map(el => {
//     if (el.match(/[-aeiou0-9\s!]/i)) {
//       return el;
//     } else {
//       return el + el;
//     }
//   }).join("")
// }

// console.log(doubleConsonants('String'));          // "SSttrrinngg"
// console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
// console.log(doubleConsonants(''));                // ""

// function reverseNumber(num) {
//   return +String(num).split("").reverse().join("")
// }

// console.log(reverseNumber(12345));    // 54321
// console.log(reverseNumber(12213));    // 31221
// console.log(reverseNumber(456));      // 654
// console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
// console.log(reverseNumber(1));        // 1

// function sequence(num) {
//   let final = [];
//   for (let index = 1; index <= num; index++) {
//     final.push(index);
//   }
//   return final;
// }

// console.log(sequence(5));    // [1, 2, 3, 4, 5]
// console.log(sequence(3));    // [1, 2, 3]
// console.log(sequence(1));    // [1]

// function swapName(str) {
//   return str.split(" ").reverse().join(", ");
// }

// console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// function sequence(num1,num2) {
// let final = [];
// let el = 0
// while (num1 > 0) {
// final.push(el += num2);
// num1--
// }
// return final;
// }

// console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));         // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]
// console.log(sequence(0, 1000000));    // []

// function reverseSentence(str) {
//   return str.split(" ").reverse().join(" ");
// }


// console.log(reverseSentence(''));                       // ""
// console.log(reverseSentence('Hello World'));            // "World Hello"
// console.log(reverseSentence('Reverse these words'));    // "words these Reverse"


// function reverseWords(str) {
//   return str.split(" ").map(word => {
//     if (word.length >= 5) {
//       return word.split("").reverse().join("")
//     } else {
//       return word
//     }
//   }).join (" ");
// }

// console.log(reverseWords('Professional'));             // "lanoisseforP"
// console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
// console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"


// function isBalanced(str) {
// let parens = str.match(/[()]/g);
// // console.log(parens);
// return parens.length % 2 === 0 && parens[0] === "(" && parens[parens.length - 1] === ")" ? true : false

// }

// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// // console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);

// function sum(num) {
//   return String(num).split("").reduce((accum,el) => accum + +el, 0);
// }

// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45

// function alphabeticNumberSort(arr) {

// }

// alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// function multiplyAllPairs(arr1,arr2) {
//   let final = [];
//   for (let index = 0; index < arr1.length ; index++) {
//     for (let j = 0; j <arr2.length; j++) {
//       final.push(arr1[index] * arr2[j])
//     }
//   }
//   return final.sort((a,b) => a - b);
// }
// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

// function leadingSubstrings(str) {
//   let arr = [];
//   for (let index = 0; index < str.length; index++) {
//     arr.push(str.slice(0, index + 1));
//   }
//   return arr;
// }

// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// function palindromes(str) {
// let arr= [];
// let palindromes = [];
//   for (let start = 0; start < str.length; start++) {
//     for (let chars = 1; chars <= str.length - start; chars++) {
//       arr.push(str.slice(start, start + chars))
//     }
//   }

//   return arr;
//   // arr.forEach(el => {
//   //   if (el.split("").reverse().join("") === el) {
//   //     palindromes.push(el)
//   //   }
//   // })
//   // return palindromes;
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

// // // returns
// // [ "a", "ab", "abc", "abcd", "abcde",
// //   "b", "bc", "bcd", "bcde",
// //   "c", "cd", "cde",
// //   "d", "de",
// //   "e" ]


// function palindromes(arr) {
//   let final = [];
//   for (let index = 1; index <= arr.length; index++) {
//     final.push(arr.slice(0,index));
//   }
//   return final.map(arr => {
//     return arr.reduce((accum,el) => {
//       return accum + +el
//     },0)
//   }).reduce((accum,el) => accum + el)

// }
// console.log(palindromes([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(palindromes([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(palindromes([4]));              // 4
// console.log(palindromes([1, 2, 3, 4, 5]));  // 35

function buyFruit(arr) {
  let final = [];
  arr.forEach((sub,index) => {
    while (sub[1] > 0) {
      final.push(sub[0]);
      sub[1]--
    }
  })
  return final;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]