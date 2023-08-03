// Create a function that takes an multidimensional array and returns an array sorted in descending order according to length of the array. For example:

function sortArrLength(arr) {
  return arr.sort((a,b) => b.length - a.length);
}

console.log(sortArrLength([[1,2,undefined], [null, 0, 'hello wolrd', 11], [{1:1}]])); //[[null, 0, 'hello wolrd', 11], [1,2,undefined], [{1:1}] ];
console.log(sortArrLength([['a'], ['ab', 'a', null], [101, 1]])); //[['ab', 'a', null], [101, 1], ['a']]
