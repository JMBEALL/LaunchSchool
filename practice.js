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


function centerOf(str) {
  if (str.length % 2 === 1) {
    console.log(str[Math.floor(str.length / 2)]);
  } else if (str.length === 0) {
    console.log(str[Math.floor(str.length / 2)] + str[Math.floor((str.length / 2 )) + 1 ]);
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"


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

function isPalindrome(str) {
  
}