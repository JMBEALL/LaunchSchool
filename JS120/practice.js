// function createCar(make, fuelLevel, engineOn) {
//   return {make, fuelLevel, engineOn}
// }

// let raceCar1 = createCar('BMW', 0.5, false);
// console.log(raceCar1);
// // raceCar1.drive();

// let raceCar2 = createCar('Ferrari', 0.7, true);
// console.log(raceCar2)
// // raceCar2.drive();

// let book1 = {
//   "Title" : "Mythos",
//   "Author": "Stephen Fry" ,

//   getDescription() {
//     console.log(`${this.Title} was written by ${this.Author}`);
//   }
// }

// let book2 = {
//   "Title" : "Me Talk Pretty One Day",
//   "Author": "David Sedaris" ,

//   getDescription() {
//     console.log(`${this.Title} was written by ${this.Author}`);
//   }
// }

// let book3 = {
//   "Title" : "Aunts aren't Gentlemen" ,
//   "Author": "PG Wodehouse",

//   getDescription() {
//     console.log(`${this.Title} was written by ${this.Author}`);
//   }
// }

// console.log(book1);
// console.log(book1.getDescription());

// console.log(book2);
// console.log(book2.getDescription());

// console.log(book3);
// console.log(book3.getDescription());


function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription() {
      console.log(`${this.title} was written by ${this.author} and I ${this.read ? "have" : "haven't"} read it.`);
    },

    readBook() {
      this.read = true;
    }
  }
}

let book1 = createBook("Mythos", "Stephen Fry");
console.log(book1);
console.log(book1.getDescription());

let book2 = createBook("Me Talk Pretty One Day", "David Sedaris");
console.log(book2);
console.log(book2.getDescription());

let book3 = createBook("Aunts aren't Gentlemen", "PG Wodehouse");
console.log(book3);
console.log(book3.getDescription());
