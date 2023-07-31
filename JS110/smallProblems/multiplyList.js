// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.


function multiplyList(arr1,arr2) {
  let multArr = [];

  arr1.forEach((el,idx) => {
    multArr.push( el * arr2[idx]);
  })

  return multArr;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]