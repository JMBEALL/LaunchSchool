const readline = require('readline-sync');



function displayBoard(board) {
console.log('');
console.log('      |      |');
console.log(`   ${board['1']}  |   ${board['2']}  |  ${board['3']}`);
console.log('      |      |');
console.log(' ---- + ---- + ----');
console.log('      |      |');
console.log(`   ${board['4']}  |   ${board['5']}  |  ${board['6']}`);
console.log('      |      |');
console.log(' ---- + ---- + ----');
console.log('      |      |');
console.log(`   ${board['7']}  |   ${board['8']}  |  ${board['9']}`);
console.log('      |      |');
console.log('');
}


function initializeBoard() {
  let gameBoard = {};
  let counter = 1;

  while ( counter <= 9) {
    gameBoard[counter] = " ";
    counter++;
  }
  return gameBoard;
}


function prompt(msg) {
  console.log(`=> ${msg}`);
}

function playerChoosesSquare(board) {
  let playerChoice = readline.question('Choose a number between 1-9:\n');
  while (playerChoice < 1 || playerChoice > 9) {
    prompt('Please enter a valid number between 1-9.');
    playerChoice = readline.question("Choose a number between 1-9.\n");
  }
while (board[playerChoice] === " ") {
    board[playerChoice] = "X";
  }

  prompt(`You chose square ${Number(playerChoice)}.`);
  console.log(board);
}


let board = initializeBoard();
displayBoard(board);
playerChoosesSquare(board);
displayBoard(board);
