// Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.


function union(arr1, arr2) {
let newArr = [...arr1];
arr2.forEach(el => {
  if (!newArr.includes(el)) {
    newArr.push(el);
  }
})

return newArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]