// Create a function that takes an array of objects as argument and return the same array with all the elements sorted according to it's value in ascending order.

function sorting(arr) {

return arr.sort((a,b) => a.a - b.a);

}
console.log(sorting([{a: 1}, {a: 0}, {a : 3}])); //=> [{a:0}, {a:1}, {a:3}];
