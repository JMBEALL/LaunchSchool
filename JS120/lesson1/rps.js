const readline = require('readline-sync');

const RPS_GAME = {
  human: createHuman('human'),
  computer: createComputer('computer'),

  displayWelcomeMessage() {
    console.log("Welcome to Rock, Paper, Scissors! Best of luck.");
  },

  displayGoodbyeMessage() {
    console.log("Thanks for playing! Until next time!");
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose ${humanMove}`);
    console.log(`The computer chose ${computerMove}.`);

    if ((humanMove === 'rock' && computerMove === 'scissors') || (humanMove === 'paper' && computerMove === 'rock') || (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log(`You won! Way to go. :)`);
    } else if ((computerMove === 'rock' && humanMove === 'scissors') || ( computerMove === 'paper' && humanMove === 'rock') || (computerMove === 'scissors' && humanMove === 'paper')) {
      console.log(`The computer won. Sorry. Better luck next time.`);
    } else {
      console.log(`It's a tie!`);
    }
  },

  playAgain() {
    console.log(`Would you like to play again?`);
    let playAgain = readline.question();
    return playAgain.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while ( true) {

      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  }
};

// function createPlayer(playerType) {
//   return {
//     playerType ,
//     move: null ,
// choose() {
//   if (this.isHuman()) {
//     let choice;

//     while (true) {
//       choice = readline.question(`Please pick between rock, paper, or scissors.\n`);
//       if (['rock', 'paper', 'scissors'].includes(choice.toLowerCase())) break;
//       console.log('Sorry, invalid input. Please try again!')
//     }

//     this.move = choice;

//   } else {
//     const CHOICES = ['rock', 'paper', 'scissors'];
//     let randomIndex = Math.floor(Math.random() * CHOICES.length);
//     this.move = CHOICES[randomIndex];
//   }
// },

// isHuman() {
//   return this.playerType === 'human';
// }
//   }
// }
function createComputer() {
  return {
    move: null,

    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };
}

function createHuman() {
  return {
    move: null,

    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };
}


RPS_GAME.play();