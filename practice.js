const { isObjectIdOrHexString } = require("mongoose");
const readline = require("readline-sync");

// let length = 0;
// let width = 0;
// let squareFeet = 0;

// length = +readline.question("What is the length of the room in meters?\n");
// width = +readline.question("What is the width of the room in meters?\n");

// console.log(`length: ${length} and width: ${width}`);
// squareFeet = (length * width) * 10.7639;
// console.log(`The room is ${squareFeet} square feet.`);

// let billTotal = Number(readline.question("How much is the bill?"));
// let tipAmount = (Number(readline.question('What percentage would you like to tip?')) / 100) * billTotal;
// console.log(`the tip will be ${tipAmount}`);
// console.log(`The total is ${billTotal + tipAmount}`);


// let number = Number(readline.question('Please enter an integer greater than 0.'));
// let evaluation = readline.question("Enter 's' to compute the sum, or 'p' to compute the product.");
// let answer = 1;

// if (evaluation === "s") {
//   for ( let index = 1; index <= number; index++) {
//     answer += index;
//   }
//   answer--;
// } else {
//   for ( let index = 1; index <= number; index++) {
//     answer *= index;
//   }
// }

// console.log(answer);


// function shortLongShort(str1,str2) {
//   let shorter;
//   let longer;

//   if (str1.length > str2.length) {
//     longer = str1;
//     shorter = str2;
//   } else {
//     longer = str2;
//     shorter = str1;
//   }

//   console.log(`${shorter}${longer}${shorter}`);
// }

// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"


// function isLeapYear(year) {
//   if ( year % 4 === 0 && year % 100 !== 0) {
//     console.log("true");
//   } else if ( year % 100 === 0 && year % 400 === 0) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true


// function multisum(num) {
//   let total = 0;

//   for (let index = 1 ; index <= num ; index++) {
//     if ( index % 3 === 0 || index % 5 === 0) {
//       total += index;
//     }
//   }
//   console.log(total);
// }

// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168

// function welcomeStranger(arr,obj) {
//   console.log(`Hello ${arr.join(" ")}! Nice to have a ${obj.title} ${obj['occupation']} around.`);
// }

// welcomeStranger(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });

// const name = readline.question("What is your name?\n");

// if (name.endsWith("!")) {
//   console.log(`HELLO ${name.toUpperCase()}. WHY ARE YOU SCREAMING?`);
// } else {
//   console.log(`Hello ${name}.`);
// }

// function multiply(num1,num2) {
//   return num1 * num2;
// }

// console.log(multiply(5, 3) === 15 ); // logs true

// function square(num) {
//   return num ** 2;
// }

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

// const numberOne = Number(readline.question("Enter the first number:\n"));
// const numberTwo = Number(readline.question("Enter the second number:\n"));

// console.log(
// `${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`
// );
// console.log(
//   `${numberOne} - ${numberTwo} = ${numberOne - numberTwo}`
// );
// console.log(
//   `${numberOne} * ${numberTwo} = ${numberOne * numberTwo}`
// );
// console.log(
//   `${numberOne} / ${numberTwo} = ${numberOne / numberTwo}`
// );
// console.log(
//   `${numberOne} % ${numberTwo} = ${numberOne % numberTwo}`
// );
// console.log(
//   `${numberOne} ** ${numberTwo} = ${numberOne ** numberTwo}`
// );

// function penultimate(string) {
//   let newString = string.split(" ");
//   newString.pop();
//   return newString[newString.length - 1];
// }

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// function xor(val1,val2) {
//   let count = 0;
//   if (val1) {
//     count++;
//   }
//   if (val2) {
//     count++;
//   }
//   return count === 1;
// }

// console.log(xor(5, 0) === true);          // true
// console.log(xor(false, true) === true);   // true
// console.log(xor(1, 1) === false);         // true
// console.log(xor(true, true) === false);   // true

// function oddities(arr) {
//   let newArr = [];
//   for ( let index = 0 ; index < arr.length; index += 2) {
//     newArr.push(arr[index]);
//   }
//   return newArr;
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []
// const date = new Date().getFullYear()
// const age = Number(readline.question("What is your age?\n"));
// const retireAge = Number(readline.question("At what age would you like yo retire?\n"));

// console.log(`Its ${date}. You will retire in ${date + (retireAge - age)}. You have only ${retireAge - age} years of work to go!`);


// function centerOf(str) {
//   if (str.length % 2 === 1) {
//     console.log(str[Math.floor(str.length / 2)]);
//   } else if (str.length === 0) {
//     console.log(str[Math.floor(str.length / 2)] + str[Math.floor((str.length / 2 )) + 1 ]);
//   }
// }

// centerOf('I Love JavaScript'); // "a"
// centerOf('Launch School');     // " "
// centerOf('Launch');            // "un"
// centerOf('Launchschool');      // "hs"
// centerOf('x');                 // "x"


// function negative(num) {
//   if (num < 0) {
//     console.log(num);
//   } else if ( num >= 0) {
//     console.log(`-${num}`);
//   }
// }

// negative(5);     // -5
// negative(-3);    // -3
// negative(0);     // -0


// function crunch(str) {

// }

// function crunch(str) {

// }

// function stringy(num) {
//   let newStr = "";
//   for ( let index = 1 ; index <= num ; index++) {
//     if (index % 2 !== 0 ) {
//       newStr += 1;
//     } else if (index % 2 === 0) {
//       newStr += 0;
//     }
//   }
//   console.log(newStr);
// }

// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

// function triangles(num) {
//   let triangleStr = "";

// }

// const noun = readline.question("Enter a noun:\n");
// const verb = readline.question("Enter a verb:\n");
// const adjective = readline.question("Enter an adjective:\n");
// const adverb = readline.question("Enter an adverb:\n");
// console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? Thats hilarious!`);

// function twice(num) {
//   let numToStr = String(num);
//   let str1 = numToStr.slice(0, (numToStr / 2) + 1);
//   let str2 = numToStr.slice((numToStr / 2));
//   console.log(str1);
//   console.log("---------")
//   console.log(str2);
//   if (numToStr.length % 2 === 0 && str1 === str2) {
//     // console.log(num);
//   } else {
//     // console.log(num * 2);
//   }
// }

// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676


// function getGrade(num1,num2,num3) {
//   let average = (num1 + num2 + num3) / 3;
//   if (average >= 90 && average <= 100) {
//     console.log("A");
//   } else if (average >= 80 && average < 90) {
//     console.log("B");
//   } else if ( average >= 70 && average < 80 ) {
//     console.log("C");
//   } else if ( average >= 60 && average < 70) {
//     console.log("D");
//   } else {
//     console.log("F");
//   }
// }

// getGrade(95, 90, 93);    // "A"
// getGrade(50, 50, 95);    // "D"

// 65-90
// 97 - 122

// function cleanUp(str) {
//   let count = 0;
//   let newStr= "";
//   for ( let index = 0; index <= str.length ; index++) {
//     if( str.charCodeAt(index) !>= 65 && str.charCodeAt(index) !<= 90 || 
//         str.charCodeAt(index) !>= 97 && str.charCodeAt(index) !<= 122)
//   }
// }


// const numbersArr = [];
// const number1 = numbersArr.push(Number(readline.question("Enter the 1st number:\n")));
// const number2 = numbersArr.push(Number(readline.question("Enter the 1st number:\n")));
// const number3 = numbersArr.push(Number(readline.question("Enter the 1st number:\n")));
// const number4 = numbersArr.push(Number(readline.question("Enter the 1st number:\n")));
// const number5 = numbersArr.push(Number(readline.question("Enter the 1st number:\n")));
// const number6 = Number(readline.question("Enter the 1st number:\n"));

// console.log(numbersArr.includes(number6));

// ----- WIKI-SPOT EXERCISES -----//

//Generating:

// function generateArr(num1,num2) {
//   let newArr = [];
//   for( let index = num1 ; index <= num2; index++) {
//     newArr.push(index);
//   }
//   return newArr;
// }

// let finalAnswer = generateArr(3, 10); // [3, 4, 5, 6, 7, 8, 9, 10]

// console.log(finalAnswer);

//COUNTING
  //letters in a string

// function countOccurencies(str) {
//   let occObj = {};
//   for (let index = 0; index < str.length; index++){
//     if(occObj[str[index]]){
//       occObj[str[index]]++
//     } else {
//       occObj[str[index]] = 1;
//     }
//   }
//   return occObj;
// }



//   let obj = countOccurencies('abbab'); // => {a:2, b: 3}

//   console.log(obj);

//explore more:

//Words in a string
// function countWords(str) {
//   return str.split(" ").length;
// }

// console.log(countWords('hello world')); // => 2

// function countWords(str) {
//   let newStr= "";
//   let index = 0;

//   while (index < str.length) {
//     if (str.toUpperCase().charCodeAt(index) >= 65 && str.toUpperCase().charCodeAt(index) <= 90 || str.charCodeAt(index) === 32){
//       newStr += str[index];
//     }
//     index++;
//   }
//   let str2 = newStr.split(" ");
//   let occObj = {};
//   for (let index2 = 0; index2 < str2.length; index2++){
//     if(occObj[str[index]]){
//       occObj[str2[index2]]++
//     } else {
//       occObj[str2[index2]] = 1;
//     }
//   }
//   return occObj;
// }

// let finalAnswer = countWords('Hello, hello world'); // => {'hello' : 2, 'world' : 1};
// console.log(finalAnswer);


// function countSubstr(str,sub) {
// let count = 0;
// let index = 0;
// let strArr = str.split(" ");
// while (index < strArr.length){
//   if(strArr[index].includes(sub)){
//     count++;
//   }
//  index++;
// }
// return count;
// }

// let finalAnswer = countSubstr('Hello, Hello! How are you doing Mellody?', 'ello' );// => 3

// console.log(finalAnswer);

// function countEle(arr,str) {
// let count = 0;
// let index = 0;
// while (index < arr.length) {
//   if (arr[index] === str){
//     count++;
//   }
//   index++
// }
// return count
// }

// let answerOne = countEle(['name', 'year', 'age', 'name'], 'name'); // => 2
// let answerTwo = countEle([1,2,3,4,5,1,2,3,4], 2); //=> 2
// console.log(answerOne);
// console.log(answerTwo);


// function countDuplic(str) {
//   let count = 0;
//   let arr = str.split(" ");
//   let el = arr.shift();

// arr.forEach(el => {
//   if(arr.includes(el)){
//     count++;
//     el = arr.shift();
//   } else {
//     el = arr.shift();
//   }
// })


//   return count;
// }

// console.log(countDuplic('one two one three two'));
// console.log(countDuplic('flower cat cat dog flower dog'));


// function countDuplic(str) {
//   let newObj = {};
//   let count = 0;
// for( let index = 0; index < str.length ; index++){
//   if(newObj[str[index]]){
//     newObj[str[index]]++
//   } else {
//     newObj[str[index]] = 1;
//   }
// }
// for (let prop in newObj){
//   if (newObj[prop] === 2){
//     count++;
//   }
// }
// return count;
// }

// console.log(countDuplic('123123'));
// console.log(countDuplic('abcdea ab'));

// function sorting(arr) {
//   arr.sort();
//   return arr
// }

// console.log(sorting(['a', 'd', 'a', 'b'])); //=> ['a', 'a', 'b', 'd'];
// console.log(sorting('banana', 'apple', 'pear')); //=> ['apple', 'banana', 'pear']

// let length = Number(readline.question("What is the length of the room in meters?\n"));

// let width = Number(readline.question("What is the width of the room?\n"));
// let AREA = length * width;
// let SQUARE_METER_CONVERSION = 10.7639;
// console.log(`The length is ${length} meters. \n The width is ${width} meters.\n The area of the room is ${AREA} square meters. (${((AREA) * SQUARE_METER_CONVERSION).toFixed(2)} square feet)`);
// 10

// let billAmount = Number(readline.question("How much is the bill?\n"));
// let tip = Number(readline.question("Percentage wise, how much do you want to tip?\n"));

// let TIP_TOTAL = billAmount * (tip / 100);
// let TOTAL_BILL = billAmount + TIP_TOTAL;

// console.log(`The tip is ${TIP_TOTAL.toFixed(2)}.\nThe total is ${TOTAL_BILL.toFixed(2)}.`);

// let numArr = JSON.parse(readline.question("Please enter an array of numbers\n"));
// let math = readline.question("Enter 's' to compute the sum, or 'p' to compute the prodcut.\n").toLowerCase();

// let sum = 0;
// let product = 1;

// if (math === "s") {
//   let reduceSum = numArr.reduce((accum,el)=> accum + el, 0);
//   console.log(`The sum of integers between 1 and ${numArr} using reduce is ${reduceSum}.`);
// } else if (math === "p") {
//   product = numArr.reduce((accum,el) => accum * el, 1);
//   console.log(`The prodict of integers between 1 and ${numArr} is ${product}.`);
// }

// function shortLongShort(str1,str2) {
//   return str1.length < str2.length ? str1 + str2 + str1 : str2 + str1 +str2
// }

// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));         // "xyz"

// function isLeapYear(year) {
//   if (year <= 1752 && year % 4 === 0) {
//     return true;
//   } else if( year % 4 === 0 && year % 100 !== 0) {
//     return true;
//   } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
//     return true;
//   } else {
//     return false;
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
//   let sum = 0;
//   for (let index = 1 ; index <= num ; index++) {
//     if(index % 3 === 0 || index % 5 === 0) sum += index;
//   }
//   return sum;
// }

// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168

// function utf16Value(str) {
//   let arr = str.split("");
//   return arr.map(el => el.charCodeAt(el)).reduce((accum,el) => accum + el, 0);

// }

// console.log(utf16Value('Four score'));         // 984
// console.log(utf16Value('Launch School'));      // 1251
// console.log(utf16Value('a'));                  // 97
// console.log(utf16Value(''));                   // 0

// // The next three lines demonstrate that the code
// // works with non-ASCII characters from the UTF-16
// // character set.
// const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
// console.log(utf16Value(OMEGA));                  // 937
// console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811

// function greetings(arr,obj) {
//   let fullName = arr.reduce((accum,el) => accum + " " + el);
//   console.log(`Hello, ${fullName}! Nice to have a ${obj.title} ${obj.occupation} around.`);
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// // logs Hello, John Q Doe! Nice to have a Master Plumber around.

// let userInput = readline.question("Welcome! What is your name?\n");
// if( userInput.endsWith("!")) {
//   console.log(`HELLO ${userInput.toUpperCase()} WHY ARE YOU SCREAMING?`);
// } else {
//   console.log(`Hello ${userInput}.`);
// }

// let multiply = (num1, num2) => num1 * num2;

// // console.log(multiply(5, 3) === 15); // logs true

// let square = multiply(num1, num2)

// let num1 = Number(readline.question("Enter the first number:"));
// let num2 = Number(readline.question("Enter the second number:"));
// console.log(`${num1} +${num2} =${num1 + num2}`);
// console.log(`${num1} - ${num2}= ${num1 - num2}`);
// console.log(`${num1}* ${num2} = ${num1 * num2}`);
// console.log(`${num1} / ${num2}${num1 / num2}`);
// console.log(`${num1} % ${num2}${num1 % num2}`);
// console.log(`${num1} ** ${num2}${ num1 ** num2}`);

// function penultimate(str) {
//   // return str.split(" ")[str.split(" ").length - 2];

//   // let arr = str.split(" ");
//   // arr.pop();
//   // return arr.pop();
//   if (!str.includes(" ")) {
//     return "only a single word provided";
//   }
// }

// console.log(penultimate("lastword")); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// function xor(arg1, arg2) {
//   return arg1 && !arg2 || !arg1 && arg2 ? true : false;
 
// }

// console.log(xor(5, 0) === true);          // true
// console.log(xor(false, true) === true);   // true
// console.log(xor(1, 1) === false);         // true
// console.log(xor(true, true) === false);   // true

// function oddities(arr) {
//   return arr.filter((el,index) => {
//     return  index % 2 === 0 ? el : 0;
//   })
// }
// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

// let randomNum = Math.floor(Math.random() * 120) + 1;

// while (randomNum < 20 && randomNum > 120) {
//   randomNum = Math.floor(Math.random() * 120) + 1;
// }

// console.log(`Teddy is ${randomNum} years old!`);

// function negative(num) {
//   return - Math.abs(num);
// }
// console.log(negative(5));     // -5
// console.log(negative(-3));    // -3
// console.log(negative(0));     // -0

// function crunch(str) {

//   return str.split("").filter((el,index) => {
//     return el !== str[index + 1] 
//   }).join("");
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""

// function stringy(num) {
//   let newStr = "";
//   for (let index = 0; index < num; index++) {
//     if( index % 2 === 0) {
//       newStr+= 1
//     } else {
//       newStr += 0
//     }
//   }
//   return newStr
// }

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"
// function twice(num) {
//   let str = String(num).split("")
//   // console.log(str);
//   let left = str.slice(0, (str.length / 2 ) );
//   console.log(left);
//   let right = str.slice(str.length / 2);
//   console.log(right);

//   if (left.join("") === right.join("")) {
//     console.log(left.join(""), right.join(""));
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

// function getGrade(num1,num2,num3) {
//   let avg = (num1 + num2 + num3) / 3;

//   switch (avg) {
//     case (avg > 90 && avg < 100): 
//       console.log("A");
//       break;
//     case (avg >= 80 && avg <= 89):
//       console.log("B")
//       break;
//     case (avg >= 60 && avg <= 69):
//       return "D";
//   }
// }

// console.log(getGrade(95, 90, 93));    // "A"
// console.log(getGrade(50, 50, 95));    // "D"

// let ladder = '';

// ['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
//   if (ladder !== '') {
//     ladder += '-';
//   }

//   ladder += word;
// })

// console.log(ladder)  // expect: head-heal-teal-tell-tall-tail


function range(start = 0, end = 1) {
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// function range(end) {
//   return range(0, end);
// }

// Examples

// console.log(range(10, 20));
// console.log(range(5));

// function removeVowels(arr) {
//   return arr.map(el => {
//     return el.replace(/[aeiou]/ig, "");
//   })
// }

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

// function letterCaseCount(str) {
//   let obj = {lowercase : 0, uppercase : 0, neither : 0};

//   str.split("").forEach(el => {
//     if (/[a-z]/g.test(el)) {
//       obj.lowercase++;
//     } else if (/[A-Z]/g.test(el)) {
//       obj.uppercase++;
//     } else {
//       obj.neither++;
//     }
//   })
//   return obj;
// }

// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

// function wordCap(str) {
//   let arr = str.split(" ");
//   return arr.map(word => {
//      return word[0].toUpperCase() + word.slice(1).toLowerCase();
//   }).join(" ");
// }

// console.log(wordCap('four score and seven'));       // "Four Score And Seven"
// console.log(wordCap('the javaScript language'));    // "The Javascript Language"
// console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

// function swapCase(str) {
// let arr = str.split("");
// let newStr = "";
// arr.map(char => {
//     if (/[a-z]/.test(char)) {
//       newStr += char.toUpperCase()
//   } else if (/[A-Z]/.test(char)) {
//       newStr += char.toLowerCase();
//   } else {
//     newStr += char;
//   }
// })
// return newStr;
// }

// console.log(swapCase('CamelCase'));              // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

// function staggeredCase(str) {
//   let count = 0;
//   return str.split("").map(char => {
    
//     if (/[A-Za-z]/.test(char)) {
//       if (count % 2 === 0) {
//         count++;
//         return char.toUpperCase();
//       } else {
//         count++
//         return char.toLowerCase();
//       }
//     } else {
//       return char;
//     }
//   }).join("");
// }

// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );

// console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

// function wordLengths(str) {
//   if (str === "" || str === undefined){
// return []
//   } 
//   return str.split(" ").map(word => `${word} ${word.length}`);
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

// function searchWord(word , str) {
// let regex = new RegExp(word, 'ig');
//   // return str.split(" ").map(word => {
//   //   if (word.match(regex)) {
//   //     return `**${word.toUpperCase()}**`;
//   //   } else {
//   //     return word;
//   //   }
//   // }).join(" ");
//   return str.replace(regex, `**${word.toUpperCase()}**`);
// }

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// console.log(searchWord('sed', text));      

// function removeVowels(arr) {
//   return arr.map(word => {
//     return word.replace(/[aeiouAEIOU]/g, "");
//   })
// }

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

// function sequence(count, start) {
//   let newArr = [];
//   for (let index = 1 ; index <= count; index++) {
//     newArr.push(start * index)
//   }
//   return newArr
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
//     if (word.length >= 5 ) {
//       return word.split("").reverse().join("");
//     } else {
//       return word;
//     }
//   }).join(" ")
// }

// console.log(reverseWords('Professional'));             // "lanoisseforP"
// console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
// console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

// function isRealPalindrome(str) {
//   let newStr = "";

//   str.split("").filter(char => {
//     if (char.match(/[a-z0-9]/ig)) {
//       newStr += char;
//     }
//   })
//   console.log(newStr);
//   console.log(revNewStr);
//    return newStr.toLowerCase() === newStr.split("").reverse().join("").toLowerCase();
// }

// console.log(isRealPalindrome('madam'));               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653'));              // true
// console.log(isRealPalindrome('356a653'));             // true
// console.log(isRealPalindrome('123ab321'));            // false

// function isPalindromicNumber(num) {
// let str = String(num);
// return str === str.split("").reverse().join("");
// }

// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true

// function wordSizes(str) {
//   let objCount = {};
//   let strArr = str.split(" ");
//   // console.log(strArr);
//   strArr.forEach(word => {
//     if(objCount[word])
//   })
// }

// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
// wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
// wordSizes('');                                            // {}

// function wordToDigit (str) {
//   let numObj = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   }
//   let newStr = "";
//   let newArr = str.match(/[^.!]/g).join("");
//   newArr.split(" ").forEach(el => {
//     if (numObj[el]) {
//       newStr += numObj[el] + " ";
//     } else {
//       newStr += el + " ";
//     }
//   })
//   return newStr;
//   }




// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// // "Please call me at 5 5 5 1 2 3 4. Thanks."

// function letterPercentages(str) {
// let lowercase = str.match(/[a-z]/g)
// // console.log(lowercase);
// let uppercase = str.match(/[A-Z]/g)
// // console.log(uppercase);
// let neither = str.match(/[^a-zA-Z]/g)
// // console.log(neither);

// return {lowercase: ((lowercase.length/ str.length) * 100).toFixed(2) , uppercase: ((uppercase.length/ str.length) * 100).toFixed(2), neither : ((neither.length/ str.length) * 100).toFixed(2)  }
// }

// console.log(letterPercentages('abCdef 123'));
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

function triangle(num1,num2,num3) {
  let arr = [num1,num2,num3];
  let sorted = arr.sort((a,b) => a-b);
  if ((sorted[0] + sorted[1]) < sorted[2]) {
    return "invalid";
  }
  if(num1 === 0 || num2 === 0 || num3 === 0) {
    return "invalid";
  }
  if (num1 === num2 && num2  === num3) {
    return "equilateral";
  }
  if (num1 !== num2 && num2 !== num3 && num1 !== num3) {
    return "scalene";
  }

  return "isosceles";
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
//input: three numbers representing the sides of a triangle
//output: a string representing what type the triangle is based on the length of the sides
//rules:
  //explicit:
    //1) valid triangle must have the length of the 2 shortes sides (sum) be greater than the final side.
    //2) every side must have a length that is greater than zero
    //3) if either of the following two rules are not met, the triangle is "invalid" and that string should be returned and execution completed.
    //note: 
      //equilateral: all sides equal length
      // isosceles: 2 equal length sides, one different
      //scalene: three sides of different length;
  //implicit: (test cases)
    //

