// section 1
// what is OOP
// encapsulation
// collaborator objects
// functions as object factories
// ============================
// section 2
// object prototypes
// function expressions
// HO functions
// global object
// implicit / explicit execution context
// bind / call / apply
// context loss;
// ============================
// section 3
// constructors 
// constructors w prototypes
// static / instance properties and methods
// built-in constructors
// classes
// ============================
// section 4
// subtyping w/ constructors & prototypes
// subtyping w/ classes
// mixins 
// polymorphism


//collaborator objects

const cat = {
  name: 'garfield',
};

const thingsPeteOwns = {
  home: 'house',
  vehicle: 'car',
  pets: [],
}

thingsPeteOwns.pets.push(cat);
console.log(thingsPeteOwns.pets); // [{name: 'garfield'}];



let gradesObj = {
  JS101: 100,
  JS201: 100,
  JS301: 100,
  JS401: 100
}

let student = {
  name: "Jordan",
  age : 29,
  school : "Launch School",
  grades: gradesObj
}

// object prototypes

let parent = {
  eyes: 'blue',
};

let child = Object.create(parent);
console.log(child.hasOwnProperty('eyes'));
console.log(child.eyes);


// Function Expression
// NFE Named Function expression
//remember, addition is not in scope on any other line, so you get a reference error when you try to invoke it on line 80

let sum = function addition (num1, num2) { // <<<<<<<<<
  return num1 + num2;
};

console.log(addition(2, 2));
// console.log(sum(3,3,))


//Higher Order Functions
/*
important because they can abstract the implemntation details and make code more powerful for programmers.
 */

// HO functions
// 1) take a function as an argument
// 2) return a function

let obj = {
  method: function (that) {
    return that += 1;
  }
};

let arr = [1, 2, 3];

console.log(arr.map(obj.method));



//call
// a way for developers to explicitly set the execution context of a function or method invocation
//the first argument passed to call will be the execution context you want to use.
//immidately invoke the funciton;

let student = {
  name : "Ava"
}

let teacher = {
  name : "Jordan",
  logName(word) {
    return this.name + " " + word;
  }
}

function logger() {
  return this.name;
}

//someObj.someMethod.call(executionContext, arg1);

console.log(teacher.logName.call(student, 'sucks'));

//functionName.call(executionContect,arg1);

console.log(logger.call(teacher));


//CONTEXT LOSS

// method being copied / saved to a variable

let obj = {
  name: 'Chase',
  method: function () {
    console.log(this.name);
  }
}

let someVariable = obj.method;
someVariable(); // `this` now references global obj

// inner function losing the surrounding context

let obj2 = {
  name: 'Chase',
  method: function () {

    function inception () {
      console.log(this.name);
    }

    inception();
  }
}

obj2.method(); // `this` refers to global

// function passed as argument losing surrounding context


let obj3 = {
  name: 'Chase',
  petsArr: ["Jordan", "Chase"],
  method: function () {
    let that = this;
    that.petsArr.forEach(function(pet) {console.log( `${that.name} owns ${pet}`)});
  },
}

obj3.method();






// classes . super . sub 
//

const swipeAttackMixin = {
  swipe: function () {
    console.log('Take that mazafaka');
  }
};

class Pokemon {
  constructor (name, color) {
    this.name = name;
    this.color = color;
  }
  specialAbility () {
    return `this is special`;
  }
};

class FirePokemon extends Pokemon {
  constructor (name, color, specialAttack) {       //
    super(name, color);    // 
    this.specialAttack = specialAttack;
  }
  specialAbility () {
    return `${super.specialAbility()} FIRE`;
  }
};

class EarthPokemon extends Pokemon {

};

class WaterPokemon extends Pokemon {

};

Object.assign(EarthPokemon.prototype, swipeAttackMixin);
Object.assign(FirePokemon.prototype, swipeAttackMixin);


let charCholic = new FirePokemon('Charcoholic', 'Fireball Orange', 'Morning Breath');
console.log(charCholic.specialAbility());
console.log(charCholic.specialAttack); // 'Morning Breath'

charCholic.swipe();
let diglet = new EarthPokemon;
diglet.swipe();







// OLOO

const PokemonPrototype = {
  init (name, color) {
    this.name = name;
    this.color = color;
    return this;
  },

  swipe () {
    return `swiping `;
  }
};

let regular = Object.create(PokemonPrototype).init('Bluetastic', 'cyan');

console.log(regular)

const firePokemonPrototype = {
  init (name, color, fireAttack) {
    PokemonPrototype.init.call(this, name, color);
    this.fireAttack = fireAttack;
    return this;
  },
  swipe () {
    console.log(`${PokemonPrototype.swipe()}` + `this`);
  }
};

let fireball = Object.create(firePokemonPrototype).init('fireball', 'red', 'flamethrower');

console.log(fireball);
console.log(fireball.fireAttack);
console.log(fireball.swipe());