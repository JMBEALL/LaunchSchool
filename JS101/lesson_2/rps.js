const readline = require("readline-sync");
const VALID_CHOICES = ["rock","paper","scissors"];
let randomIndex = Number(Math.floor(Math.random() * VALID_CHOICES.length));

let computerChoice = VALID_CHOICES[randomIndex];

function prompt(mes) {
  console.log(`=> ${mes}`);
}

prompt(`Please Choose One: ${VALID_CHOICES.join(", ")}`);
let userChoice = readline.question();

while (!VALID_CHOICES.includes(userChoice.toLowerCase())) {
  prompt("Hmmm...that does not look like an option in the game. Please try again.");
  userChoice = readline.question();
}

prompt(`You chose ${userChoice}. The computer chose ${computerChoice}.`);

if ((userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')) {
  prompt('You win!');
} else if ((userChoice === 'rock' && computerChoice === 'paper') ||
           (userChoice === 'paper' && computerChoice === 'scissors') ||
           (userChoice === 'scissors' && computerChoice === 'rock')) {
  prompt('Computer wins!');
} else {
  prompt("It's a tie.");
}

