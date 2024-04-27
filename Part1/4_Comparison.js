console.log("2" > 1)     // True, because it converts it's in Number first, then check
console.log( null > 0)   // false
console.log( null == 0)   // false
console.log( null >= 0)   // true

// Equalit check "==" and Comparisons " > < => <=" work Differently 
// Comparisons converts Null to Number, therefor treating it as 0, But not Equality check
// That's y (null==0) False, but (null>=0) True

console.log(undefined >= 0)  // false
console.log(undefined == 0)  // false

// # Stricly Checked #
// "==" Only check "values" as discussed above
// "===" Checks "values and Data types" too

console.log("2" == 2)  //true [values]
console.log("2" === 2) //false [values nd Data types]


// ***************************************************************************************************************** //

// Memeory: 2 types "Stack and Heap"

// For "primitive Datatypes " its Data is being stored in form of "Stack Memory"
// For "non primitive Datatypes" its Data is being stored in form of "Heap memory"

// Stack (Primitive),  Heap (Non-Primitive)

// Example 1:
let username1 = "Akansha kumari"
let username2 = username1

username2 = "Amit Anand"

console.log(username1)  //Akansha kumari
console.log(username2)  //Amit Anand

// Summary ~ For Primitive datatypes, firstly username1 stored in stack(0), and when copy the the username1 to username2
//           in Stack original data remain in stack(0) and it's copy copied to stack(1) for username2 
//           and if we again rename username2, the change only come to username2 only and get updated value stored in stack(2)
//           So, in Output username1 will remain unchanged 


//Example 2:
let Obj1 = {
    name: "Akansha",
    user1: "kumariakansha159@gmail.com"
}
let Obj2 = Obj1

Obj2.user1 = "amit123#"

console.log(Obj1.user1)  //amit123#
console.log(Obj2.user1)  //amit123#

// Summary ~ For Non-Primitive Datatypes, Whole Data stored in 'Heap Box' and
//           Obj1 and Obj2 in stack(0) and stack(1) respectively pointing towards Heap (where original data stored)
//           So if we make any changes in any Obj variable, it will directly change my Original value present in Heap.


const name1 = 'helo'
const name2 = String('helo')
const name3 = new String('helo')

console.log(typeof name1)  //String
console.log(typeof name2)  //String
console.log(typeof name3)  //Object

/* new String('hello'): This creates a new String object. It explicitly creates a String object using the String constructor.
The result is an object of type String. Even though it contains the same characters as the primitive string 'hello', it's an object wrapper around that primitive value.
 gives you a special box with extra features (like methods to manipulate the string) */

/* String('hello'): This does not create a new String object. It's called as a function, and it performs a type conversion, 
converting the primitive string 'hello' into an object temporarily, but then immediately returns it back to a primitive string.
just gives you the word "hello" itself, without any extra features attached. */


const n3 = String('helo')
const n4 = String('helo')
console.log(n3 === n4) //True
// Here, hello string will be stored at a location and and s1 will keep a reference to it.

const n1 = new String('helo')
const n2 = String('helo')
console.log(n1 === n2)  //False
// Here will create a new object, will refer to that one and will be stored at a different location.
// The condition, n1===n2 will compare memory locations which are now 2 different locations in memory. So it will come false.


// ** Now, const name3 = new String('helo') is an Object, So write this line in console page(inspect) and check result
// as Its 'Object' so we can see, Every alphabet presents in Key-Value Pair
// and if Expands it's Prototype, can see all Properties of String Available wich we can use and apply to alter/modify my String


const my1 = new String('helo')

console.log(my1[0])             //h
console.log(my1.__prototype__)  //{}

console.log(my1.length)
console.log(my1.toUpperCase())  //used() because it's function, can check in console, prototype

console.log(my1.charAt(2))     //l
console.log(my1.indexOf('o'))  //3

const myName = "Akmnsha"

const newName = myName.substring(0,4)  //Akmn
console.log(newName)  //-ve don't work for Substring

const newName2 = myName.slice(-5, 4)  //mn  {Splice used in Arry}
console.log(newName2)  //means starting from back -1,-2,-3,-4,-5(m) to 0,1,2,3,4(s) So, from 'm to s'
// when we count from start, Js don't consider last digit, it will count till (n-1) therfor ~ mn


const name = "   Damn   "
const get1 =  name.trim()  //it will Trim all Whitespaces from Front and End (But not from Middle)
console.log(get1)  

console.log(name.trimEnd())   //Trim whitespaces from end only
console.log(name.trimStart())  //Trim whitespaces from front only


const url = "kuamriakansha159@gmail.com/helo20?/damn"
console.log(url.replace('20?','--'))  
console.log(url.includes('helo'))   //true
console.log(url.split('/'))       //[ 'kuamriakansha159@gmail.com', 'helo20?', 'damn' ] ,it will split and store in array!





