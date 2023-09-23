const readline = require('readline-sync');
function createHuman() {
  return {
    move : null,
    previousMoves : [],
    score : 0,
    prompt(msg) {
      console.log(`=> ${msg}`);
    },
    choose() {
      this.prompt(`Please choose one: rock, paper, or scissors...`);
      let choice = readline.question().toLowerCase();
      while (!['rock', 'paper', 'scissors'].includes(choice)) {
        this.prompt("Please enter a valid entry...");
        choice = readline.question();
      }
      this.move = choice.toLowerCase();
      this.previousMoves.push(choice);
    }
  };
}

function createComputer() {
  return {
    move : null,
    previousMoves : [],
    score : 0,
    prompt(msg) {
      console.log(`=> ${msg}`);
    },
    choose() {
      let choices = ['rock', 'paper', 'scissors'];
      let randomNumber = Math.floor(Math.random() * choices.length);
      let choice = choices[randomNumber];
      this.move = choice;
      this.previousMoves.push(choice);
    }
  };
}


const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log(`Welcome to Rock, Paper, Scissors on Jordan's MacBook Pro. Best of luck!`);
  },

  displayGoodbyeMessage() {
    console.log(`Thanks for playing Rock, Paper, Scissors. See you next time!`);
  },
  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    let humanMoves = this.human.previousMoves ;
    let computerMoves = this.computer.previousMoves ;
    console.log(`You chose: ${humanMove}. Your previous moves are ${humanMoves.join(", ")}.`);
    console.log(`The computer chose: ${computerMove}. The computer has chosen ${computerMoves.join(", ")}.`);
    if ((humanMove === 'rock' && computerMove === 'scissors') ||
          (humanMove === 'paper' && computerMove === 'rock') ||
          (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
      this.human.score++;
    } else if ((humanMove === 'rock' && computerMove === 'paper') || (humanMove === 'paper' && computerMove === 'scissors') || (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
      this.computer.score++;
    } else {
      console.log("It's a tie");
    }
    console.log(`Your score: ${this.human.score}`)
    console.log(`computer score: ${this.computer.score}`)
  },
  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer === 'y';
  },
  checkScore() {
    if (this.computer.score >= 3) {
      console.log('Computer wins!');
      this.computer.score = 0;
      this.human.score = 0;
      return;
    } else if (this.human.score >= 3) {
      console.log('You win!');
      this.human.score = 0;
      this.computer.score = 0;
      return;
    }
  },
  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      this.checkScore();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();

