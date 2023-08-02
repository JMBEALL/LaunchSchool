# JS110 Study Guide

## String.prototype Methods

### - String.prototype.charAt()
- This method takes an argument, number, that acts as an element reference at that specific index of the string. It searches the string for that index and returns the character. If not found, returns an empty string ("").
- If no argument is passed, JS implicitly treats it as if 0 was passed and returns the first character from the string. 

### String.prototype.charCodeAt()
- This method is similiar to charAt() except it uses the passed in argument, number, to reference the specific index and returns the characters unicode code point. 
- If no argument is passed in, JS implicitly returns the unicode code point for the first character of the string. (0th index)
- If passed in argument tries to access an indes that does not exist, it returns NaN.

### String.prototype.concat()
- Since it is called on a string, here, it returns a new string since strings are primitive values in JS and cannot be mutated.
- .concat() accpets infinite arguments and concatantes them together.
- This is another method that works very similarly to '+'.

### String.prototype.includes()
- takes an argument and iterates through the string to see if any indexes are equal to the passed in argument.
- it will return a boolean, true or false.
- can take a second argument denoting what index to begin looking at in the string.

### String.prototype.split()
- This method is called on a string and returns an array of elements based on the argument that is passed in.
- If no arg is passed, split() will return an array with a single element at the 0th index - the entire string.
- If an empty string is passed into .split("") ecah character will be at a single index of the newly returned array.

### String.prototype.trim()
- This method is used a lot when validating and cleaning up user input.
- trim() removes white spaces when called on a string.
- trimStart() and trimEnd() can also be used to clean one side of a string.



## Array.prototype Methods

### Array.prototype.concat()
- This method is called on an array and return a new array, meaning it is not a destructive method.
- This method can accept infinite arguments of different data types and will concatante the arguments onto the end of the calling array.

### Array.prototype.every()
- This method returns a boolean true or false and uses the return value of the callback to decide.
- This method accepts a callback function and iterates through the calling array passing in each element into the callback. If EVERY element returns a truthy value from the callback, every will return true. Otherwise, if a single falsy return value is encountered, it will return false.

### Array.prototype.fill()
- This method is destructive on the calling array and mutates it in place.
- This method accepts up to three arguments. 
- They are: (what to mutate the value to, what index to begin at, what index to end at)
- Examples: 
-- [1,2,3,4,5].fill(1) = [1,1,1,1,1]
-- [1,2,3,4,5].fill(1,2) = [1,1,2,2,2]

### Array.prototype.filter()
- This method return a new array and uses the callbacks return value to decide which elements will be included in the new array.
- It accepts a callback as an argument and invokes the callback on each element in the array. If the return value of the callback is truth, filter will place the original element on the newly returned array.
- The length of the newly returned array will either be the same length or less than the caller.

### Array.prototype.find()
- This method iterates over every element in the calling array and invokes the callback function on it. It returns the first element that returns a truthy value from the callback.
- If no element returns a truthy value after being invoked by the callback, it will return undefined.

### Array.prototype.findIndex()
- This method is very similar to find- it accepts a callback as an argument and iterates over the calling array, passing each element into the callback. The first element that returns a truthy value from the callback will be used. It will return its index.
- If no element returns a truthy value from being invoked with the callback, findIndex() will return -1.

### Array.prototype.forEach
- This methods sole purpose is iteration through arrays.
- This method always returns undefined. 

### Array.prototype.includes();
- This method is similiar to the includes method that is called on strings.
- It takes up to two arguments. The first being what you are looking for, the second instructing what index to begin looking in the array. 
- This method returns a boolean, trur or false, indicating wether what was passed in is found in the array or not.

### Array.prototype.indexOf()
- Accepts up to 2 arguments. The first being what you are looking for, and the second what idnex to begin looking at.
- Will return index if found and -1 if not found.

### Array..prototype.join()






## Object Methods

### Object.keys()
- This method accepts an object as an argument.
- This method returns an array of elements that are the keys within the object that was passed in as an argument. 

### Object.values()
- This method accepts an object as an argument.
- This method returns an array of elements that are the values within the object that was passed in as an argument. 

### Object.entries()
- This method accepts an object as an argument.
- This method returns an array of sub-arrays. 
- Within each sub-array there are two values, the key at index 0, and the value at index 1 for each property of the object that was passed in as an argument.

### Object.assign()