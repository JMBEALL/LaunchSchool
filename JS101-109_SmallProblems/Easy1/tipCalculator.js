// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

const readline = require("readline-sync");

const billAmount = +readline.question("What is the bill?\n");

const tipPercentage = +readline.question("What is the tip amount?\n");

const tipAmount = billAmount * (tipPercentage / 100);
const totalBill = billAmount + tipAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}.`);
console.log(`The total is $${totalBill.toFixed(2)}.`);