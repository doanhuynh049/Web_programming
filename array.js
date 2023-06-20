var ourArray = ["John", 23];
var myArray = ["Quincy", 1];
console.log(ourArray);

//Nested array
var ourArray = [["the universe", 42], ["everything", 1010101]];
var myArray = ourArray[0];
console.log(ourArray);
console.log(myArray);

// push array, add element at the end of array
myArray.push(["Dog", 3]);
console.log(myArray);

// remove the last element
myArray.pop();
console.log(myArray);

// pop remove the first element
myArray.shift();
console.log(myArray);

// unshift add the element at the beginning of the array
myArray.unshift("add unshift");
console.log(myArray)
