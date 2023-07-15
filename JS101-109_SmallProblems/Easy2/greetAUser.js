// Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

const readline = require("readline-sync");

const name = readline.question("What is your name?");

if(name.endsWith("!")) {
  console.log(`HELLO ${name.split("").splice(0,name.length - 1).join("").toUpperCase()}, WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
