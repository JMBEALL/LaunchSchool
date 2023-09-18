const readline = require("readline-sync");
let VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt(`Pick one: ${VALID_CHOICES.join(', ')}`);
let userChoice = readline.question();

while (!VALID_CHOICES.includes(userChoice.toLowerCase())) {
  prompt('That is not a valid choice. Please try again!');
  userChoice = readline.question();
}

let computerChoice = VALID_CHOICES[Math.floor(Math.random() * VALID_CHOICES.length)];

prompt(`You chose ${userChoice}. Computer chose ${computerChoice}.`);