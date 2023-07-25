// Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

function centerOf(str) {
  if (str.length % 2 === 0 ) {
    console.log(str[(str.length / 2) - 1] + str[(str.length / 2)]);
  } else {
    console.log(str[Math.floor(str.length / 2)]);
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"