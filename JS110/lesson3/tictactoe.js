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
  let board = {};

  for (let index = 1; index <= 9; index++) {
    board[index] = " ";
  }

  return board;
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function playerChoosesSquare(board) {
  prompt("Choose a square: 1-9.");
  let square = readline.question();
  board[String(square)] = "X";
}

let gameBoard = initializeBoard();
displayBoard(gameBoard);
playerChoosesSquare(gameBoard);
displayBoard(gameBoard);