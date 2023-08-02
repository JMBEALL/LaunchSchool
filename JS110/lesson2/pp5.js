//PRACTICE PROBLEM 11 - I AM ONTO SOMETHING

// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// let stringify = JSON.stringify(arr);
// let deepCopy = JSON.parse(stringify);
// let answer = deepCopy.map(obj => {
//   for (let key in obj) {
//     if (obj[key]) {
//       return obj[key]++;
//     }
//   }
// });

// console.log(arr);
// console.log(deepCopy);
// console.log(answer);



let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

arr.map(arr => {
  return arr.filter(el => el % 3 === 0);
})

console.log(alias);

//practice problem 13

// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// let sortedArr = arr.map(sub => {
//   return sub.map(el => )
// })

// console.log(arr);
// console.log(sortedArr);


// let sortedArr = arr.map(sub => {
//   return sub.filter(el => el % 2 === 1).reduce((accum, el) => accum + el).sort((a,b) => a - b);
// })


// practice problem 14

// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// let newArr = [];

// for (let key in obj) {
//   if (obj[key].type === 'fruit') {
//     newArr.push(obj[key].colors.map(word => word[0].toUpperCase() + word.slice(1)))
//   } else {
//     newArr.push(obj[key].size.toUpperCase());
//   }
// }

// console.log(newArr)


//PRACTICE PROBLEM 15 ALMOST THERE

// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// let newArr = arr.filter(obj => {
//   return Object.entries(obj).filter(arr1 => {
//     arr1[1].every(el => {
//       return el % 2 === 0;
//     })
//   })
// })

// console.log(newArr);

//PRACTICE PROBLEM 16

// let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// // expected value of object
// // { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// let obj = {};

// arr.forEach(sub => {
//   obj[sub[0]] = sub[1]
// })

// console.log(obj);

// debug.js
