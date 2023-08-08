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

function multisum(num) {
  let sum = 0;
  for (let index = 1 ; index <= num ; index++) {
    if(index % 3 === 0 || index % 5 === 0) sum += index;
  }
  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168