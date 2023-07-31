function sequence(num) {
  let newArr = [];
  let counter = 1;
  while (counter <= num) {
    newArr.push(counter);
    counter++;
  }
  return newArr;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]