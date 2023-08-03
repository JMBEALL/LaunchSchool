// Create a function that takes an array of strings as an argument and returns the same array with all elements sorted according to length of the string in descending order. 

function sorting(arr) {
  return arr.sort((a,b) => b.length - a.length);
}

console.log(sorting(['o', 'hello', 'llo', 'ello','lo' ])); //=> ['hello', 'ello', 'llo', 'lo', 'o']

