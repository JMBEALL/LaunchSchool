// Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.


function swapCase(str) {
return str.split("").map(el => {
    if (el === el.toUpperCase()) {
      return el.toLowerCase();
    } else if (el === el.toLowerCase()) {
      return el.toUpperCase();
    } else {
      return el;
    }
  }).join("");

}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"