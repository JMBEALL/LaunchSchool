
// class ScrabbleScore {
//   constructor(word) {
//     this.word = word.toLowerCase();
//     this.letters = this.word.split("");
//   }

//   total = 0;
// }

// let test = new ScrabbleScore("jorDan");
// console.log(test)
// console.log(ScrabbleScore)

// let obj = {
//   1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
//   2: ["D", "G"],
//   3: ["B", "C", "M", "P"],
//   4: ["F","H","V","W","Y"],
//   5: ["K"],
//   8: ["J", "X"],
//   10: ["Q", "Z"]
// }

// function score(word,obj) {
//   let splitted = word.toUpperCase().split("");

// let total = 0;
// for (let el of splitted) {
//   for (let key in obj) {
//     if (obj[key].includes(el)) {
//       total += +key
//     }
//   }
// }
// return total;
// }

class Scrabble {
  //creating an object with the word passed in as an property and initializing a total property to 0.
  constructor(word) {
    this.word = word;
    this.total = 0;
  }

  score() {
    //splitting the word and turning it to uppercase so that it is case insensitive and my obj is all uppercase.
    let splitted = this.word?.toUpperCase().split("");
//making sure splitted is truthy, otherwise we add 0
      if (splitted) {
        //nested loops
        //first: taking each character from thearray
        for (let el of splitted) {
          // second: looping through the properties of the object that keeps score
          for (let key in this.scoreObj) {
            //checking each array to see if it includes the current el, if so, add that key to score, since the key is the number value each cahr gets in the game.
            if (this.scoreObj[key].includes(el)) {
              this.total += +key
            } 
        }
      }
    } else {
      this.total += 0;
  }
  return this.total;
}
// score object sitting on the function prototype
  scoreObj = {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F","H","V","W","Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"],
    0: [" ", "nil"]
  } 

  // static method sitting on the class object itself.
  static score(word) {
    let scrab = new Scrabble(word);
    let splitted = scrab.word.toUpperCase().split("");


  
    if (splitted) {
      for (let el of splitted) {
        for (let key in this.scoreObj) {
          if (this.scoreObj[key].includes(el)) {
            scrab.total += +key
          } 
      }
    }
  }
  return scrab.total;
  }

}



// let test = new ScrabbleScore("cabbage");
// test.score()
// // console.log(test.score());

// console.log(test)

module.exports = Scrabble;