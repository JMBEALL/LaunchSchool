// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.
function smallerNumbersThanCurrent(arr) {
  
}
// Examples:

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]

//input: array of integers
//output: array of the same length
//Rules:  
  //explicit: count will only include numbers smaller than the current number
  //if the number that is smaller occirs again in the array, it will not add to the running total

// Algorithm:
  //Iterate through the array and with each element we want to filter though the numbers and see if it is less than the current element.
  // if it is, we want to add that to the count only if it is not a duplicate.
  //keep a running list of numbers that have been considered and as we iterate and make the decision ensure that it is not already included on the list.

