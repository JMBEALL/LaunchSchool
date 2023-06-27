const readline = require("readline-sync");
const messages = require("../lesson_2/messages.json");

function prompt(mes) {
  console.log(`=> ${mes}`);
}

prompt(messages.mortgageWelcome);

prompt(messages.loanAmount);
let loanAmount = readline.question();

prompt(messages.APR);
let annualPercentageRate = readline.question();

prompt(messages.loanDuration);
let loanDuration = readline.question();

