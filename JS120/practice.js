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
// console.log('playAgain' in RPSGame);
// RPSGame.play();

// let a = {
//   foo : 1,
//   bar : 2
// };

// let b = Object.create(null);
// // console.log(Object.getPrototypeOf(b));
// Object.setPrototypeOf(b, a);
// // console.log(Object.getPrototypeOf(b));
// console.log(b.foo);
// b.foo = 100;
// console.log(b);
// console.log(b.foo);
// console.log(b.bar);
// a.bar = 10;
// console.log(b.bar);


// let a = {
//   foo: 1,
// };

// let b = {
//   foo: 2,
// };

// Object.setPrototypeOf(b, a);

// let c = Object.create(b);
// function repeatThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings: function() {
//     repeatThreeTimes(func => {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     });
//   },
// };

// john.greetings();

// // => hello, undefined undefined
// // => hello, undefined undefined
// // => hello, undefined undefined


// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.'
//   }
// };

// function logReturnVal(func,context) {
//   let returnVal = func.bind(context);
//   console.log(returnVal());
// }

// logReturnVal(turk.getDescription, turk);

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(title => {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

// let foo = {
//   a: 0,
//   incrementA: function() {
//   () => {
//       this.a += 1;
//     }

//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// console.log(foo.a)

// function createInvoice(obj = {}) {
//   return {
//     phone : (obj.phone ? obj.phone : 3000),
//     internet : (obj.internet ? obj.internet : 5500 ),
//     total() {
//       return this.phone + this.internet;
//     }
//   }
// }


// function invoiceTotal(invoices) {
//   let total = 0;

//   for (let index = 0; index < invoices.length; index += 1) {
//     total += invoices[index].total();
//   }

//   return total;
// }

// let invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({ internet: 6500 }));
// invoices.push(createInvoice({ phone: 2000 }));
// invoices.push(createInvoice({
//   phone: 1000,
//   internet: 4500,
// }));

// console.log(invoiceTotal(invoices)); // 31000

// function createPayment(services = {}) {
// return {
//   phone : services.phone ? services.phone : 0,
//   internet : services.internet ? services.internet : 0,
//   amount: services.amount ? services.amount : 0,

//   total() {
//     if (services.amount) {
//       return this.amount;
//     } else {
//       return this.phone + this.internet;
//     }
//   }
// }
// }

// function paymentTotal(payments) {
//   return payments.reduce((sum, payment)  => sum + payment.total(), 0);
// }

// let payments = [];
// payments.push(createPayment());
// payments.push(createPayment({
//   internet: 6500,
// }));

// payments.push(createPayment({
//   phone: 2000,
// }));

// payments.push(createPayment({
//   phone: 1000,
//   internet: 4500,
// }));

// payments.push(createPayment({
//   amount: 10000,
// }));

// console.log(paymentTotal(payments));      // => 24000



// function prompt(msg) {
//   console.log(`=> ${msg}`);
// }

// let drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45,

//   describeProduct () {
//     for (let key in this) {
//       if (typeof this[key] !== 'function') {
//         this.prompt(`${key}: ${this[key]}`);
//       }
//     }
//     },
//     prompt(msg) {
//       console.log(`=> ${msg}`);
//     }
// };
// console.log(drill.describeProduct());


// let RECTANGLE = {
//   area: function() {
//     return this.width * this.height;
//   },
//   perimeter: function() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// let rect1 = new Rectangle(2, 3);

// console.log(rect1.area);
// console.log(rect1.perimeter);

function Ninja() {
  this.swung = false;
}
// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// }
// // Add a swing method to the Ninja prototype which
// // modifies `swung` and returns the calling object

// let ninjaA = new Ninja();
// let ninjaB = new Ninja();

// console.log(ninjaA.swing().swung);      // logs `true`
// console.log(ninjaB.swing().swung);      // logs `true`

// function createPet(animal, name) {
//   return {
//     animal,
//     name,
//     sleep() {
//       console.log(`I am sleeping!`);
//     },
//     wake() {
//       console.log(`I am awake!`);
//     }
//   }
// }

// let pudding = createPet("Cat", "Pudding");
// console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// pudding.sleep(); // I am sleeping
// pudding.wake();  // I am awake

// let neptune = createPet("Fish", "Neptune");
// console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
// neptune.sleep(); // I am sleeping
// neptune.wake();  // I am awake


// let book1 = {
//   title : 'Mythos' ,
//   author : 'Stephen Fry' ,
//   getDescription() {
//     return `${this.title} was written by ${this.author}.`
//   }
// }

// let book2 = {
//   title : 'Me Talk Pretty One Day' ,
//   author : 'David Sedaris' ,
//   getDescription() {
//     return `${this.title} was written by ${this.author}.`
//   }
// }

// let book3 = {
//   title : "Aunts aren't Gentleman" ,
//   author : "PG Wodehouse" ,
//   getDescription() {
//     return `${this.title} was written by ${this.author}.`
//   }
// }

function repeatThreeTimes(func) {
  func();
  func();
  func();
}

let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings: function() {
    let final = () => {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    };
    repeatThreeTimes(final);
  },
};

john.greetings();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined
