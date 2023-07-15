// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.


const readline = require("readline-sync");

const num = +readline.question("Please enter a number greater than 0.");

const sumOrProduct = readline.question("Please enter 's' to calculate the sum or 'p' to calculate the product.").toLowerCase();
let sum = 0;
let product = 1;

for (let index = 1; index <= num ; index++){
  if(sumOrProduct === "s"){
    sum+= index;
  } else if (sumOrProduct === "p") {
    product *= index;
  }
  console.log(sum);
  console.log(product);
}

