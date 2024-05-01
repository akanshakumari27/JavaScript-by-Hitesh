const arr = [2, 4, 8, true, "akansha"]  //we can write non similar element in array in any language
const arr2 = new Array(2,5,8,1,3)

// Js arrays are Resizeable and can Contain mix Datatypes
// Array perform 'Shallow Copy'
// Shallow Copy -> of an Object is Copy whose properties share Same Reference Point (if perform any change, Original Content will also Change)
// Deep Copy -> .. properties who don't share the Same Reference (if perform any Change, Original Content will not change)

console.log(arr2.push(7))   //add elemnt in last
arr2.pop()          //pop last element 

arr.unshift(9)      //add element in starting of Array, cause all elemnt to shift one place behind
arr.shift()         //remove element from first

arr.includes(10)  //false  ,as this element doesn't exist
arr.indexOf(10)   //-1  ,as this element doesn't exist

console.log(arr.join())          //2,4,8,true,akansha   ,it will convert Array to String
console.log(typeof arr.join())   //string


// ****** Slice Vs Splice *******

const Arry1 = [1,2,3,4,5,6,7,8,9]

const result1 = Arry1.slice(1,5)
console.log("A", result1)    //A [ 2, 3, 4, 5 ]  
console.log(Arry1)           //  [ 1, 2, 3, 4, 5,6, 7, 8, 9]

const result2 = Arry1.splice(1,5)
console.log("B", result2)    //B [ 2, 3, 4, 5, 6 ]
console.log(Arry1)           //  [ 1, 7, 8, 9 ]

// *** In 'Slice' it will give Elements (1-4) excluding '5' last element BUT won't alter Original Array!! ***
// *** In 'Splice' it will give Elements (1-5) All including last element BUT cutoff it from Original Array!! ***


// ******* Merging of 2 Arrays ***********

const Arry2 = ['a', 'b', 'c', 'd']
const Arry3 = ['a1', 'b1', 'c1', 'd1']

Arry2.push(Arry3)         //this will push one Array into Another, Inserted Array #DON'T WORK
console.log(Arry2)        //[ 'a', 'b', 'c', 'd', [ 'a1', 'b1', 'c1', 'd1' ] ]
console.log(Arry2[4][2])  //c1

console.log(Arry2 + Arry3)  //a,b,c,da1,b1,c1,d1 ,will return in String #DON'T WORK

let Merge2 = Arry2.concat(Arry3)   //for Concat to Work, need to store new Array in 'new Variable' 
console.log(Merge2)                //Proper Merged Array

let Merge3 = [...Arry2, ...Arry3]   //Spread Method, will Spread all Elements of Arrays and as written with [,] it will display like Array
console.log(Merge3)                 //Proper Merged Array

// *Conclusion: 2 Methods to Mege Array -> 'Concat and Spread'


const Arry4 = [2,1,4,[3,6,],6,[6,3,9,[3,8,2,1,6,0]]]

let getSingelArry = Arry4.flat(Infinity)   //can give any number tho, according we want to open Braces, Infinity-> will open all braces 
console.log(getSingelArry)

console.log(Array.isArray("Akansha"))       //false  ,to check it's Array or Not
console.log(Array.from("Akansha"))          //['A', 'k', 'a','n', 's', 'h','a']
console.log(Array.from({Name:"Akansha"}))   //[]  ,will return Empty Array, coz JS won't able to Recognise how to convert Object(key:value pair) into Arry!


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))   //[ 100, 200, 300 ]
console.log(Array.of("Akansha"))              //[ 'Akansha' ]
console.log(Array.from("Akansha"))            //['A', 'k', 'a','n', 's', 'h','a']

console.log(Array.from(score1))               //[]  ,it's only work for String, NOT Num

// Array.from() will break every single element and Create new  Array of it whereas
// Array.of()  won't break, it will make Array of Existing given whole Values
