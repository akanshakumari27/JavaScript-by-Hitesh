// # Conversion into Number #

// After conversion all will show in "typeof" ~ number ,but to check it's actual value we will console.log it

let score = true         //After converting to Number ~ 1
let score2 = undefined   //After converting to Number ~ NAN
let score5 = "akansha"   //After converting to Number ~ NAN
let score3 = null        //After converting to Number ~ 0
let score4 = "33"        //After converting to Number ~ number

let score1 = "33a"       //After converting to Number ~ NAN
console.log(typeof score1) 

let valueNumber = Number(score1)  // N should be capital.
console.log(typeof valueNumber)   // number
console.log(valueNumber)          // NAN, because we actually can't convert "33a" to Real Number.


// # Conversion into Boolean #
let marks = 33     //true
let marks1 = null  //false
let marks2 = "akansha"  //true
let marks3 = undefined  //false

let valueBool = Boolean(marks3)
console.log(typeof valueBool)
console.log(valueBool)


// # Conversion into String #
let shape = 33
let shape2 = undefined
let shape3 = null

let valueShape = String(shape3)
console.log(typeof valueShape)
console.log(valueShape)


// # Converstions #
let val = 33
let subVal = -val
console.log(subVal)

console.log(2**3) //power
console.log(2%3)  //remainder
console.log(3/2)  //ans, only integer

console.log(2 + 2 + "3")  // 43
console.log("2" + 2 + 3)  // 223

console.log(true)   // true
console.log(+true)  // 1, it will not increment but return 1
console.log(+"")    // 0

//Prefix and Postfix
let gameCounter = 100
console.log(gameCounter++)  // Postfix
console.log(++gameCounter)  // Prefix
console.log(gameCounter+1)  // Infix


