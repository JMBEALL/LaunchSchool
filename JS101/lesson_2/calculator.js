const readline = require("readline-sync");
let number1;
let number2;
let operation;
let output;
let newCalculation;

//START
/*prepending an arrow in front of each message the to create distinction*/

function prompt(mes) {
  console.log(`=> ${mes}`);
}

function invalidNumber(num) {
  return Number.isNaN(num);
}

function welcome() {
  prompt("Welcome to Calculator!");
}

function firstInput() {
//Ask the user for the first number
  prompt("What's the first number?");
  number1 = Number(readline.question());

  while (invalidNumber(number1)) {
    prompt("That does not look like a valid number. Please enter another number.");
    number1 = Number(readline.question());
  }
// console.log(number1)
}
//Ask the user for the second number
function secondInput() {
  prompt("what's the second number?");
  number2 = Number(readline.question());

  while (invalidNumber(number2)) {
    prompt("That does not look like a valid number. Please enter another number.");
    number2 = Number(readline.question());
  }
}
//Ask the user for the operation
function operationChoice() {
  prompt("What operation would you like to perform on these two operands?\n1) Add 2) Subtract 3) Multiply 4) Divide");

  operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt("That operation is coming soon! Please review the operations currently supported and try again.");
    operation = readline.question();
  }
}

//Perform the operation and return the value
function performOperation() {
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
}

function calculator() {
  welcome();
  firstInput();
  secondInput();
  operationChoice();
  performOperation();
  newCalculation = readline.question("=> Would you like to perform another calculation? Y or N\n");
}

calculator();
while ( newCalculation.toLocaleLowerCase() === "y" ) {
  calculator();
}
//additional challenge- see if they want to perform another operation.
//GET yes or no from user.
// WHILE user says yes, continue to use the calculator

//END