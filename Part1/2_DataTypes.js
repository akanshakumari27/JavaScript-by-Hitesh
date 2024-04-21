// Globally Declaring
"use strict";  //To treat all JS code as newer Version 

// Functionally declaring
let x = 3.14; // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  let y = 3.14; // This will cause an error
}

// Difference between Null and 0, example Temp '0' is still a Value, but in case if we didn't get any temprature value, therfor "Null"
// number => 2 to power 53
// bigint
// string = ""
// boolean => true/false
// null => standalone value
// undefined
// symbol => unique
// Object

console.log(typeof null);  //Object
console.log(typeof undefined);  //undefined

let score = 33
let score2 = "33"
console.log(typeof score)
console.log(typeof(score))  //number
console.log(typeof score2)  //string

