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

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if(arr.length === 0) return [];

  let newArr = [...arr];
  let el = newArr.shift();
  newArr.push(el);
  return newArr;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]