// Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

function halvsies(arr) {
  let newArr = [[],[]];
  if (arr.length % 2 === 0) {
    newArr[0] = arr.slice(0 , arr.length / 2);
    newArr[1] = arr.slice(arr.length / 2);
} else if (arr.length % 2 === 1) {
  newArr[0] = arr.slice(0, Math.ceil(arr.length / 2));
  newArr[1] = arr.slice(Math.ceil(arr.length / 2));
}
return newArr
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]