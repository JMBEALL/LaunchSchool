/* collections are made up of individual elements and in order to work with them we must understand how to reference each individual element within the collection. */


// SLICE MEETHOD
//allows you to reference multiple characters within a string.

//accepts two arguments
//slice(inclusive start, exclusive end)

// let grass = str.slice(4,9);

//calling SLICE method with NO ARGS returns a copy of the original string.

//PASSING IN NEGATIVE ARGS TO SLICE
//treats them as string.length + (neg index passed in);


// SLICE and SUBSTRING - how they differ

//when passed a start index that is greater than the end index, slice will return an empty string

//when passing a negative index into slice, it will work its way from the end, using str.length + (-index);

//when passed an index that is greater than the end index, substring will swap the indexes and return that substring. 

// when passed a negative index, substring will treat it as 0 and return the entire string. 


//the slice method returns a new value and does not mutate.
//if called on a string, it will return a new string.
// if called on an array, it will return a new array.

//note that although these methods have the same name and very similiar funcitonality, they are not the same. They are housed in different objects. 

