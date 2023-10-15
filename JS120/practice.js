const { afterEach } = require('mocha');
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

// let ninjaA;

// {
//   const Ninja = function() {
//     this.swung = false;
//   };

//   ninjaA = new Ninja();
// }

// // let ninjaB = new ninjaA.constructor();
// let ninjaB = Object.create(ninjaA);
// // create a `ninjaB` object here; don't change anything else

// console.log(ninjaA.constructor === ninjaB.constructor) // => true

// let PetPrototype = {
//   sleep() {
//     console.log("I am sleeping.");
//   },
//   wake() {
//     console.log("I am awake!");
//   },
//   init(animal, name) {
//     this.animal = animal;
//     this.name = name;
//     return this;
//   }
// }

// let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
// console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// pudding.sleep(); // I am sleeping
// pudding.wake();  // I am awake

// let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
// console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
// neptune.sleep(); // I am sleeping
// neptune.wake();  // I am awake

function createStudent (name, year) {
  return {
    name,
    year,
    courses : [],
    info() {
      console.log(`${this.name} is a ${this.year} year student.`);
    },
    addCourse(obj) {
      this.courses.push(obj);
    },
    listCourses() {
      return this.courses;
    },
    addNote(code, note) {
      this.courses.forEach(subArr => {
        if (subArr.code === code) {
          if(subArr.hasOwnProperty('note')) {
            subArr.note += `; ${note}`;
          } else {
            subArr.note = note;
          }
        }
      },this)
    },
    updateNote(code, msg) {
      this.courses.forEach(subArr => {
        if (subArr.code === code) {
          subArr.note = msg;
        }
      },this)
    },
    viewNotes() {
      this.courses.forEach(subArr => {
        if (subArr.hasOwnProperty('note')) {
          console.log(`${subArr.name}: ${subArr.note}`);
        }
      },this);
    }
  }
}

// let foo = createStudent('Foo', '1st');
// foo.info();
// // "Foo is a 1st year student"
// console.log(foo.listCourses());
// // [];

// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// console.log(foo.listCourses());
// // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// // // "Math: Fun course; Remember to study for algebra"
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// // // "Math: Fun course; Remember to study for algebra"
// // // "Advance Math: Difficult subject"



// foo.updateNote(101, 'Fun course');
// foo.viewNotes();
// // // "Math: Fun course"
// // // "Advanced Math: Difficult subject"

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "strolls";
//   }

//   walk() {
//     return `${this.name} ${this.gait()} forward.`
//   }
// }

// class Cat extends Person {
//   constructor(name) {
//     super(name);
//   }

//   gait() {
//     return "saunters";
//   }
// }

// class Cheetah extends Person {
//   constructor(name) {
//     super(name);
//   }

//   gait() {
//     return "runs";
//   }
// }

// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike strolls forward"

// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"

// let flash = new Cheetah("Flash");
// console.log(flash.walk());
// // "Flash runs forward"

// class Car {
//   constructor(make, model, wheels) {
//     this.make = make;
//     this.model = model;
//     this.wheels = wheels;
//   }

//   getWheels() {
//     return this.wheels;
//   }

//   info() {
//     return `${this.make} ${this.model}`;
//   }
// }

// class Motorcycle extends Car {
//   constructor(make, model,wheels) {
//     super(make, model,wheels);
//   }

// }

// class Truck extends Car {
//   constructor(make, model, wheels, payload) {
//     super(make,model,wheels);
//     this.payload = payload;
//   }
// }

// let newM = new Motorcycle('make', "model", 10);
// console.log(newM);
// console.log(Object.getPrototypeOf(newM));
// console.log(newM.info());
// console.log(newM.getWheels())


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

//factory function

// function createCar(make,model,year) {
//   return {
//     make,
//     model,
//     year,
//     started : false,
//     start() {
//       this.started = true;
//     },
//     stop() {
//       this.started = false;
//     }
//   };
// }

// let newCar = createCar("Toyota", "Corolla", 2016);
// console.log(newCar);
// newCar.start();
// console.log(newCar);

//class Declaration - not hoisted, so are set to undefined until the code tells it what to set the value as, until it gets to that code, it is living in the Temporal Dead Zone in JS.



// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
// console.log(Owner.keepTrack)

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
//2 i can ecplicity set the exectuion context myself

// function newPrice(obj, newPrice) {
//    if (newPrice < 0) {
//     throw new Error("Please enter a valid number.");
//    }
//    obj.price = newPrice;
//    return obj;
// }

// function describeProduct(obj) {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key));
//     console.log(` => ${key.toUpperCase()} : ${obj[key]}`);
//   }
// }


// function Person(name) {
//   this.name = name;
//   this.school = undefined;
// }

// Person.prototype.speak = function() {
//   return `Hello, my name is ${this.name}.`;
// };

// function Child(name, school) {
//   this.name = name;
//   this.school = school;
// }
// Child.prototype = Object.create(Person.prototype)
// Child.prototype.learn = function learn() {
//   console.log("I'm going to school!");
// }
// Child.prototype.constructor = Child;


// Child.prototype.learn = function() {
//   return "I'm going to school!";
// };

// let child = new Child("Suzy", "PS 33");
// console.log(child instanceof Child);                               // true
// console.log(child instanceof Person);                              // true
// console.log(Object.getPrototypeOf(child) === Child.prototype);     // true
// console.log(Object.getPrototypeOf(child).constructor === Child);   // true
// console.log(child.school === "PS 33");                             // true
// console.log(child.learn() === "I'm going to school!");             // true
// console.log(child.speak() === "Hello, my name is Suzy.");          // true
// console.log();

// let person = new Person("Pete");
// console.log(person instanceof Child === false);                    // true
// console.log(person instanceof Person);                             // true
// console.log(Object.getPrototypeOf(person) === Person.prototype);   // true
// console.log(Object.getPrototypeOf(person).constructor === Person); // true
// console.log(person.school === undefined);                          // true
// console.log(person.speak() === "Hello, my name is Pete.");         // true
// console.log(person.learn === undefined);                           // true


/*
TIC TAC TOE OOP STYLE

Nouns:
1) 2 players - human and computer
2) board - 3 X 3 grid
3) markers : "X" & "O"



Verbs:
1) marking a square
2) win (3 in a row: Horizontal, Vertical, or Diag)

Firs thing that came to mind when I thought of a tic-tac-toe board in JS.

[
  ["","",""],
  ["","",""],
  ["","",""]
]

Second thought after thinking: 

{
  a:  ["","",""],
  b:  ["","",""],
  c:  ["","",""],
}


*/

// class Board {
//   constructor() {
//     // We need a way to model the 3x3 grid. Perhaps "squares"?
//     // What data structure should we use? An Array? An Object? Something else?
//     // What should the data structure store? Strings? Numbers? Square objects?
//   }

//   display() {

//     console.log(`      |      |      `);
//     console.log(` ${""}     |${""}      |${""} `);
//     console.log(`      |      |      `);
//     console.log(`------+------+-------`);
//     console.log(`      |      |      `);
//     console.log(` ${""}     |${""}      |${""} `);
//     console.log(`      |      |      `);
//     console.log(`------+------+-------`);
//     console.log(`      |      |      `);
//     console.log(` ${""}     |${""}      |${""} `);
//     console.log(`      |      |      `);
//   }
// }

// class Square {
//   constructor() {
//     // We need some way to keep track of this square's marker.
//   }
// }

// class Row {
//   constructor() {
//     // We need some way to identify a row of 3 squares
//   }
// }

// class Marker {
//   constructor() {
//     // A marker is something that represents a player's "piece" on the board.
//   }
// }

// class Player {
//   constructor() {
//     // maybe a "marker" to keep track of this player's symbol (i.e., 'X' or 'O')
//   }

//   mark() {
//     // We need a way to mark the board with this player's marker.
//     // How do we access the board?
//   }

//   play() {
//     // We need a way for each player to play the game.
//     // Do we need access to the board?
//   }
// }

// class Human extends Player {
//   constructor() {
//   }
// }

// class Computer extends Player {
//   constructor() {
//   }
// }

// class TTTGame {
//   constructor() {
//     this.board = new Board();
//     // Need a board and two players
//   }

//   play() {
//     this.displayWelcomeMessage();

//     while (true) {
//       this.board.display();

//       this.firstPlayerMoves();
//       if (this.gameOver()) break;

//       this.secondPlayerMoves();
//       if (this.gameOver()) break;
//       break; // <= execute loop only once for now
//     }

//     this.displayResults();
//     this.displayGoodbyeMessage();
//   }

//   displayWelcomeMessage() {
//     console.log("Welcome to Tic Tac Toe!");
//   }

//   displayGoodbyeMessage() {
//     console.log("Thanks for playing Tic Tac Toe! Goodbye!");
//   }

//   displayResults() {
//     // show the results of this game (win, lose, tie)
//   }

//   firstPlayerMoves() {
//     // the first player makes a move
//   }

//   secondPlayerMoves() {
//     // the second player makes a move
//   }

//   gameOver() {
//     return false;
//   }
// }

// let game = new TTTGame();
// game.play();

// class Horse {}

// class Pegasus extends Horse {
//   fly() {
//     console.log("I can fly!");
//   }
// }

// class Unicorn extends Horse {
//   constructor() {
//     super();
//     Unicorn.prototype.instances.push(this);
//   }

//   pierce() {
//     console.log("I can pierce");
//   }

//   static instances() {
//     console.log( Unicorn.prototype.instances.length);
//   }
// }

// Unicorn.prototype.instances = [];

// class Human {}

// class Thief extends Human {
//   steal() {
//     console.log("I am stealing");
//   }
// }

// class Pirate extends Thief {
//   sail() {
//     console.log("I can sail");
//   }
// }

// class Wizard extends Human {
//   cast() {
//     console.log("I can cast spells!");
//   }
// }

// class Centaur {
//   slash() {
//     console.log("I can slash!");
//   }
// }

// let GallopMixIn = {
//   gallop() {
//     console.log("I can gallop");
//   }
// };

// let SpeakMixIn = {
//   speak() {
//     console.log("I can speak");
//   }
// };

// Object.assign(Centaur.prototype, GallopMixIn, SpeakMixIn);
// Object.assign(Horse.prototype,GallopMixIn );
// Object.assign(Human.prototype,SpeakMixIn );


// //Testing:

// let horse = new Horse();
// horse.gallop();

// let pegasus = new Pegasus();
// pegasus.gallop();
// pegasus.fly();

// let unicorn = new Unicorn();
// unicorn.gallop();
// unicorn.pierce();
// Unicorn.instances();
// let unicorn2 = new Unicorn();
// Unicorn.instances();
// let unicorn3 = new Unicorn();
// Unicorn.instances();

// let human = new Human();
// human.speak();

// let thief = new Thief();
// thief.steal();

// let pirate = new Pirate();
// pirate.steal();
// pirate.sail();

// let wizard = new Wizard();
// wizard.cast();
// wizard.speak();
// // wizard.steal();

// let centaur = new Centaur();
// centaur.speak();
// centaur.gallop();
// centaur.slash();


// class Rectangle {
//   constructor(width, length) {
//     this.width = width;
//     this.length = length;
//   }

//   getWidth() {
//     return this.width;
//   }

//   getLength() {
//     return this.length;
//   }

//   getArea() {
//     return this.width * this.length;
//   }
// }


function createStudent(name, year) {
  return {
    name,
    year,
    courses : [],
    info() {
      console.log(`${this.name} is a ${this.year} year student!`);
    },
    listCourses() {
      console.log(this.courses);
    },
    addCourse(obj) {
      this.courses.push(obj)
    },
    addNote(codePassed, note) {
      this.courses.forEach(course => {
        if (course.code === codePassed) {
          if (course.hasOwnProperty('notes')) {
            course.notes += `${note};`;
          } else {
            course.notes = note + "; ";
          }
        }
      })
    },
    viewNotes() {
      this.courses.forEach(course => {
        if (course.notes) {
          console.log(`${course.name}: ${course.notes}`);
        }
      })
    },
    updateNote(codePassed, note) {
      this.courses.forEach(course => {
        if (codePassed === course.code) {
          course.notes = note;
        }
      })
    }
  }
}

let foo = createStudent('Foo', '1st');
foo.info();
foo.listCourses();
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
foo.updateNote(101, 'Fun course');
foo.viewNotes();