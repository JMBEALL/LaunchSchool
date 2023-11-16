// 'use strict';
// let arr = [1,2,3,4];
// function forEach(arr, callback, context) {
//   for (let index = 0; index < arr.length; index++) {
//     // console.log(callback(arr[index]));
//     callback.call(context, arr[index]);
//   }
// }

// // function squared(num) {
// //   return num ** 2;
// // }
// // // function isOdd(num) {
// // //   return num % 2 === 1
// // // };

// class Foo {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }

//   showItem(item) {
//     console.log(this.prefix, item);
//   }
// }

// let foo = new Foo("Item: ");

// forEach(arr, foo.showItem, foo);


function filter(arr, callback) {
  let filteredArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (callback(arr[index])) {
      filteredArr.push(arr[index]);
    }
  }
  return filteredArr;
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]


function map(arr, callback) {
  let mappedArr = [];
  for (let index = 0; index < arr.length; index++) {
    mappedArr.push(callback(arr[index]));
  }
  return mappedArr;
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]



// let arr = [1,2,3,4,5];

// // let answer = arr.reduce((accum, el) => accum + el);
// let answer = arr.reduce((arr , currentEl) => {
//   if (!(currentEl <= 3)) {
//     arr.push(currentEl * 2);
//   }
//   return arr;
// }, []);

// console.log(answer);

function reduce(arr, callback, startVal) {
  let start = startVal || arr[0];
  for (let index = 0; index < arr.length; index++) {
    start = callback(start, arr[index]);
  }
  return start;
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
// console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
// console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // => undefined

// let stooges = ["Mo", "Larry", "Curly"];
// console.log(reduce(stooges, (reversedStooges, stooge) => {
//   reversedStooges.unshift(stooge);
//   return reversedStooges;
// }, []));
// // => ["Curly", "Larry", "Mo"]

// function delayLog() {
//   for(let index = 0; index <=10; index++){
//     setTimeout(() => console.log(index), index * 1000);
//   }
// }

// delayLog();


// function filter(arr, callback) {
//   let newArr= [];
//   for(let index = 0; index < arr.length; index++) {
//     if (callback(arr[index])) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }
// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]




// This class represents a todo item and its associated
// data: the todo title and a flag that shows whether the
// todo item is done.

// This class represents a todo item and its associated
// data: the todo title and a flag that shows whether the
// todo item is done.

function makeList() {
  let items = [];
return {

  list() {
    items.forEach(el => console.log(el))
  },
  add(arg) {
    items.push(arg);
    console.log(`${arg} added`);
  },
  remove(arg) {
    let index = items.indexOf(arg);
    items.splice(index, 1);
    console.log(`${arg} removed!`);
  }
}

//   return function(newItem) {
//     let index;
//     if (newItem) {
//       index = items.indexOf(newItem);
//       if (index === -1) {
//         items.push(newItem);
//         console.log(newItem + " added!");
//       } else {
//         items.splice(index, 1);
//         console.log(newItem + " removed!");
//       }
//     } else if (items.length === 0) {
//       console.log("The list is empty.");
//     } else {
//       items.forEach(item => console.log(item));
//     }
//   };
}




// function foo(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// }

// let bar = foo(2);
// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

//shorthand notation

// //rest paramter, which is somewhat similiar to the arguments object which is an array like object. however, the rest parameter is a true array and can be treated like one, so all methods can bec alled on it. the syntax is...aargs qhere parameters go
// function sum(...args) {
//   // values = Array.prototype.slice.call(arguments);

//   return args.reduce(function(a, b) {
//     return a + b;
//   });
// }

// console.log(sum(1, 4, 5, 6)); // 16




//using and IIFE to create provate scope

// let name = 'Taylor';
// let age = 32;

// let final = (function() {
//   let name = "Jordan"
//   return name.split("").includes("J")
// }())

// console.log(final)


//function declaration

function newStack() {
  let stack = [];
  return {
    push(val) {
      stack.push(val);
    },
    pop() {
      stack.pop()
    },
    printStack() {
      stack.forEach(el => console.log(el));
    }
  }
}

let test = newStack();
console.log(test);
test.push("jordan");
test.push('taylor');
test.printStack();
test.pop();
test.printStack();