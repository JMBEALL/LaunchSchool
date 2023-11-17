
// let foo = {
//   name: 'test',
//   bar: function(greeting) {
//     console.log(greeting + ' ' + this.name);
//   },
// };

// let baz = {
//   qux: delegate(foo, 'bar', 'hello'),
// };

// baz.qux();   // logs 'hello test';

// foo.bar = function() { console.log('changed'); };

// baz.qux();          // logs 'changed'

// function delegate(obj, method, ...args) {
//   return function() {
//     let func = obj[method]
//     return func.apply(obj, args);
//   }
// }



const Account = {
  init(email,password,firstName,lastName) {
    this.Email = email;
    this.password = password;
    this.FirstName = firstName;
    this.lastName = lastName;
    this.displayName = createDisplayName();
    return this;
  },
  reanonymize(password) {
    if(password === this.password) {
      this.displayName = createDisplayName2();
      return true;
    } else {
      return `Invalid Password`;
    }
  },
  resetPassword(password, newPassword) {
    if(password === this.password) {
      // let newPassword = readline.question("What would you like your new password to be?");
      this.password = newPassword;
      return true;
    } else {
      return `Invalid Password`;
    }
  },
  firstName(password) {
    if (password === this.password) {
      return this.FirstName;
    } else {
      return `Invalid Password`;
    }
  },
  lastName(password) {
    if (password === this.password) {
      return this.lastName;
    } else {
      return `Invalid Password!`;
    }
  },
  email(password) {
    if (password === this.password) {
      return this.email;
    } else {
      return `Invalid Password`;
    }
  },
  displayName() {
    return this.displayName;
  }
}


function createDisplayName() {
  return "JordanB123456"
}

function createDisplayName2() {
  return "JordanB1234567"
}


// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar)
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// let displayName = fooBar.displayName;
// console.log(fooBar.reanonymize('abc'));                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false