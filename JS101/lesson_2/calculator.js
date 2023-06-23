const readline = require("readline-sync");

/*prepending an arrow in front of each message the to create distinction*/

function prompt(mes) {
  console.log(`=> ${mes}`);
}

function invalidNumber(num) {
  return Number.isNaN(num);
}

prompt("Welcome to Calculator!");
//START

//Ask the user for the first number
prompt("What's the first number?");
let number1 = Number(readline.question());

while (invalidNumber(number1)) {
  prompt("That does not look like a valid number. Please enter another number.");
  number1 = Number(readline.question());
}
// console.log(number1)
//Ask the user for the second number
prompt("what's the second number?");
let number2 = Number(readline.question());

while (invalidNumber(number2)) {
  prompt("That does not look like a valid number. Please enter another number.");
  number2 = Number(readline.question());
}

//Ask the user for the operation
prompt("What operation would you like to perform on these two operands?\n1) Add 2) Subtract 3) Multiply 4) Divide");
//Perform the operation and return the value
let operation = readline.question();

while (!["1", "2", "3", "4"].includes(operation)) {
  prompt("That operation is coming soon! Please review the operations currently supported and try again.");
  operation = readline.question();
}

let output;

switch (operation) {
  case "1":
    output = number1 + number2;
    break;
  case "2":
    output = number1 - number2;
    break;
  case "3":
    output = number1 * number2;
    break;
  case "4":
    output = number1 / number2;
    break;
}

prompt(`The result of your input is ${output}.`);

//END