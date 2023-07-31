function multiplyAllPairs(arr1, arr2) {
let productsArr = [];
for (let index = 0; index < arr1.length; index++) {
  for (let j = 0; j <arr2.length ; j++) {
    productsArr.push(arr1[index] * arr2[j]);
  }
}
return productsArr.sort((a,b) => a-b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]