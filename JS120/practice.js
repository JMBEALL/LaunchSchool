const readline = require('readline-sync');



function createPlayer(playerType) {
  return {
    playerType,
    move : null,
    isHuman() {
      return this.playerType === 'human';
    },
    prompt(msg) {
      console.log(`=> ${msg}`);
    },
    choose() {
      if (this.isHuman()) {
        this.prompt(`Please choose one: rock, paper, or scissors...`);
        let choice = readline.question().toLowerCase();
        while (!['rock', 'paper', 'scissors'].includes(choice)) {
          this.prompt("Please enter a valid entry...");
          choice = readline.question();
        }
        this.move = choice.toLowerCase();
      } else {
        const choices = ['rock', 'paper', 'scissors'];
        let randomNum = Math.floor(Math.random() * choices.length);
        this.move = choices[randomNum];
      }
    }
  };
}


const RPSGame = {
  human: createPlayer('human'),
  computer: createPlayer('computer'),

  displayWelcomeMessage() {
    console.log(`Welcome to Rock, Paper, Scissors on Jordan's MacBook Pro. Best of luck!`);
  },

  displayGoodbyeMessage() {
    console.log(`Thanks for playing Rock, Paper, Scissors. See you next time!`);
  },
  displayWinner() {
      let humanMove = this.human.move;
      let computerMove = this.computer.move;
    
      console.log(`You chose: ${humanMove}.`);
      console.log(`The computer chose: ${computerMove}.`);
    
      if ((humanMove === 'rock' && computerMove === 'scissors') ||
          (humanMove === 'paper' && computerMove === 'rock') ||
          (humanMove === 'scissors' && computerMove === 'paper')) {
        console.log('You win!');
      } else if ((humanMove === 'rock' && computerMove === 'paper') ||
                 (humanMove === 'paper' && computerMove === 'scissors') ||
                 (humanMove === 'scissors' && computerMove === 'rock')) {
        console.log('Computer wins!');
      } else {
        console.log("It's a tie");
      }
  },
  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
      return answer === 'y';

  },
  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();

