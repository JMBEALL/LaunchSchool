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

