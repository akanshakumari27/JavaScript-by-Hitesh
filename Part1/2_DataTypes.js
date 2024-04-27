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

// Primitive DataTypes (Call by Value, means copy is being made and send to make any changes or alteration, means we don't make in Original part)
// 7 Types: String, Int, Boolean, null, undefined, Symbol(when want to make any Component/button Unique, So we wrapped that in Symbol), Bigint

// Non-Primitive (Reference type, here in memory direct reference is allocated)
// Arrays, Objects, Functions 


//Examples of Primitive
const name = "Akansha"    //string
let bigNum = 648936251791022n  //Bigint

let id1 = Symbol("2d")  
const id2 = Symbol("2d")
//Defination of Symbol, that it provide Uniquness to all Declared Variables, wether there value same or not

console.log(id1 == id2)  //false


// Example of Non-Primitive
const Arry = ["Akansha", "Amit", "Anjala"]

const Obj = {        //Storing Object in variable name 'Obj'
  name: "akansha",
  age: 21,
  registration_no: 12020064
}

const Funct = function(){   //Storing function in Variable name 'Funct'
  console.log("helo!")
}

console.log(typeof Arry)  //Object
console.log(typeof Obj)   //Object
console.log(typeof Funct)  //function ,but actually we say 'Function Object'
console.log(typeof bigNum)  //bigint

// ** For all Non-Primitive, it's type comes out "Object" **