// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

const readline = require("readline-sync");

const length = Number(readline.question("What is the length of the room in meters?\n"));

const width = +readline.question("What is the width of the room in meters?\n");

console.log(`The area of the room is ${(length * width).toFixed(2)} square meters. (${((length * width) * 10.7639).toFixed(2)} square feet).`);