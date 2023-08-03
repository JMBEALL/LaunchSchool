// Create a function that takes an multidimensional array as an argument and returns the same array sorted according to the product of elements of inner arrays in descending order.

function sorting(arr) {
  return arr.sort((a,b) => {
    return b.reduce((accum, el) => accum * el) - a.reduce((accum, el) => accum * el)
  })
}

console.log(sorting([[1,2,3], [0,1], [2,1]])); //=> [[1,2,3], [2,1], [0,1]]
