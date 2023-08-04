# JS110 Written Assessemt Markdown Practice
## Problem 1:
```
let arr1 = ["a", "b", "c"];
let arr2 = arr1.map((letter, idx) => arr1.unshift(idx));
console.log(arr1); 
console.log(arr2);
```

On line 1 we are delcaring a variable `arr1` in global memory that is initialized to an `array literal` with a `length property` of 3. The elements in this array are all of the `string` data type and are `'a','b', and 'c'`. 

On line two we declare a variable labeled `arr2` and initialize it to the return value of invoke `map` on `arr1` (the caller) and adding the index to `arr1` on each iteration. 

With `map` we know it will return a `ne array` of the exact same length of the original array that was used as the caller. so, the nvalue saved to `arr2` will be an array literal with the length of 3. 

`map` takes in a callback. With that callback, it is accepting `two parameters` in this example - `letter` and `idx`. 

On each iteration, `map` is worried with the `return value` of the callback as it is used to `trasndform`. 

We know that `unshift` adds an element to the front of an array and `returns the new length`. So `arr2` will be set to an `array` constining the elements `4,5,6` as with each iteration the length of arr1 is being increased since `unshift` is a destrutive method. 

## Problem 2:
```
let arr1 = ["a", "b", "c"];
let arr2 = arr1.map((letter, idx) => {
  arr1.unshift(idx);
  return letter;
});
console.log(arr1); 
console.log(arr2);
```


On line 1 we are declaring a variable `arr1` that is stored in global memory and initilizes to an array literal with the `length property` initlized to 3. The three elements that it contains are all of the `string data type`. The elements are `'a','b','c'`. 

Next an `arr2` variable is created and initiliazed to the `return value` of invoking `map` on `arr1`. `map` is taking in `two parameters` and the `callback` is adding the index to the beginning of `arr1` with each iteration, which is a `destructive` method on arrays. So, `arr1` will contain `[2,1,0,'a','b','c']` after the function is finished.

However, notice that there is no `explicit return` for the `unshift` method. So, that is simply mutating `arr1`. We return the letter that is being used in each iteration and use that for the return value that is stored in the `new array` that is created and returned when invoking `map`.

So, `arr2`, when logged to the console will be `['a','a','a']. 


## Problem 3:

```
let players = [["Joe", 25], ["Andy", 31], ["Ralph", 18], ["Mark", 28]];
​
let lastYearsTeam = players
  .slice() 
  .sort() 
  .filter(player => {
    if (player[1] < 30) return true;
  });
​
players.splice(2, 1);
players.forEach(player => player[1] += 1);
​
// console.log(players);
// console.log(lastYearsTeam);
// ```