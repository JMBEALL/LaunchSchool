// // Create a function that takes an array of objects as argument and return the same array with all the elements sorted according to it's key in descending order. For example:


// function sorting(arr) {
//   return arr.sort((a,b) => a - b);
// }
// console.log(sorting([{0: 1}, {3: 1}, {1 : 1}])); //[{3:1}, {1:1}, {0:1}]

// Create a function that takes an multidimensional array as an argument and returns the same array sorted according to the sum of elements of inner arrays., in ascending order For example:
function sorting(arr) {
return arr.sort((a,b) => {
  return a.reduce((accum,el ) => accum + el) - b.reduce((accum,el) => accum + el);
})
}
console.log(sorting([[1,2,3], [0,1], [2,1]])); //=> [[0,1], [2,1], [1,2,3]]
