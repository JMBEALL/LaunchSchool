// Create a function that takes an array as an argument and returns the same array with all elements sorted in descending order. For example:


function sorting(arr) {
  return arr.sort((a,b) => b - a);
}
console.log(sorting([3,5,1,2,11,456])); //=> [456,11,5,3,2,1];
