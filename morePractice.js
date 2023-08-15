// function triangle(ang1, ang2, ang3){
//   let total = ang1 + ang2 + ang3;
//   if (total !== 180) return "invalid";
//   if (ang1 <= 0 || ang2 <= 0 || ang3 <= 0) return "invalid";
// // we have confirmed that moving forward we are working with valid triangles and simply classifying them.
//   if (isAcute(ang1,ang2,ang3)) {
//     return "acute";
//   }
//   if (isRightAngle(ang1,ang2,ang3)){
//     return 'right'
//   }
//   if (isObtuse(ang1,ang2,ang3)) {
//     return "obtuse"
//   }

// //helper functions
// function isAcute(num1,num2,num3) {
//   return (num1 < 90) && (num2 < 90) && (num3 < 90);
// }
// function isRightAngle(num1,num2,num3){
//   return (num1 === 90) || (num2 === 90) || (num3 === 90);
// }
// function isObtuse(num1,num2,num3) {
//   return (num1 > 90) || (num2 > 90) || (num3 >90);
// }
// }

// console.log(triangle(60, 70, 50));       // "acute"
// console.log(triangle(30, 90, 60));       // "right"
// console.log(triangle(120, 50, 10));      // "obtuse"
// console.log(triangle(0, 90, 90));        // "invalid"
// console.log(triangle(50, 50, 50));       // "invalid"


// function featured(num) {
//   let MAX_NUM = 9876543201;
//   for (let index = num + 1; index <= MAX_NUM; index++ ) {
//     if ((index % 2 === 1) && (index % 7 === 0) && (noRepeat(index))) {
//       return index;
//       break;
//     }
//     // return "too big";
//   }

//   //helper function to check;
//   function noRepeat(arg) {
//     let arr = String(arg).split("");

//     for (let index = 0; index < arr.length ; index++) {
//       for (let j = index + 1; j < arr.length; j++) {
//         if (arr[index] === arr[j]) return false;
//       }
//     }
//     return true;
//   }
// }
// //input: integer;
// //output: integer - next consecutive featured number after the given input
// //rules:
//   //explicit: 


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

// function sumSquareDifference(num) {
// let arr = [];
// for (let index = 1; index <= num; index++) {
//   arr.push(index);
// }
// let sumSquare = (arr.reduce((accum,el) => accum + el) ** 2);
// let squareSum = arr.reduce((accum,el) => accum + (el ** 2));
// return sumSquare - squareSum;
// }

// console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// console.log(sumSquareDifference(10));     // 2640
// console.log(sumSquareDifference(1));      // 0
// console.log(sumSquareDifference(100));    // 25164150

// PRACTICE PROBLEMS FOR JS119 INTERVIEW

// Problem 5

//input: string
//output: return a single character ( that single chracter is the one that occurs least in the string input)
//rules:
  //explicit: if there is a tie between characters for lowest occurences, return the one that appears first in the string.
  // consider all characters to be lowercase.
  //implicit: punctuation and syntax count, not just alpha numerics. 
//Data structure:
  //I want to keep track of count of the ocurence of each character using an object literal.

//Algorithm: 


// function buyFruit(arr) {
//   [[fruit , num]] = arr;
//   // console.log(fruit);
//   let newArr = [];
//   for (let index = 0 ; index < arr.length ; index++) {
//     for (let j = 1; j <= arr[index][1]; j++){
//       newArr.push(arr[index][0]);
//     }
//   }
// return newArr;
// }

// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// // returns ["apple", "apple", "apple", "orange", "banana", "banana"]

function transactionsFor(ID, list) {
  return list.filter( obj => obj.id === ID);
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(transactionsFor(101, transactions));
// // returns
// // [ { id: 101, movement: "in",  quantity:  5 },
// //   { id: 101, movement: "in",  quantity: 12 },
// //   { id: 101, movement: "out", quantity: 18 }, ]
function isItemAvailable(ID, list) {
  let count = 0;
  let arr = list.filter( obj => obj.id === ID);
  if (arr.length > 0) {
    arr.forEach( obj => {
      if (obj.movement === "in") {
        count += obj.quantity;
      } else if (obj.movement === "out") {
        count -= obj.quantity;
      }
    })
  }
  return count > 0 ? true : false;
}


console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true