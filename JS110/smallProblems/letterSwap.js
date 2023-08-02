function swap(str){
  let arr = str.split("");
  if(str.includes(" ")) {
    return str.split(" ").map(el => el.split("").reverse().join("")).join(" ");
    
  } else {
    return arr.reverse().join("");
  }
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"