// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

let age = Math.floor(Math.random() * 120 ) + 1;

if( age < 20 || age > 120 ) {
  age = Math.floor(Math.random() * 120 ) + 1;
} else {
  console.log(`Teddy is ${age} years old!`);
}
