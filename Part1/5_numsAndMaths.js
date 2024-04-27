const score = 400
console.log(score)   //400

const score2 = new Number(300)  //doing this in Console(inspect) we will get protopye(properties of Number)
console.log(score2)  //[Number: 300]  ,as "new" will convert it to Number Object(key-value pair)

console.log(score.toString().length)  //3
console.log(score2.toFixed(2))      //300.00


const num = 123.8696
console.log(num.toPrecision(3))   //124  ,means it will 'print 3 digits' after round off as required and give most relatble result in Precised form

const num1 = 1123.8696
console.log(num1.toPrecision(3))  //1.12e+3

const num2 = 12.8696
console.log(num2.toPrecision(3))  //12.9

const num3 = 100000000000
console.log(num3.toLocaleString('en-IN'))  //1,00,00,00,00,000 (Indian Standards)
//when keep parantheses empty, it will return default value (US standards)


// +++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++

console.log(Math)  //Object [Math] {}, As it's Object, we can Check it's protoype in Console(in  spect)

console.log(Math.abs(-4))  //4 ,it gives absolute Value(-4 => 4) & (4 => 4)
console.log(Math.round(2.5)) 
console.log(Math.ceil(4.2))   //5 ,but in case you want to Restrict Round off to only Upper Version
console.log(Math.floor(4.6))  //4 ,Restrict Round off to only Lower Version
console.log(Math.min(2,5,1,8,4))
console.log(Math.max(2,5,1,8,4))

console.log(Math.random()) //it will Generate num range (0 < num < 1)

console.log(Math.floor(Math.random()*10)+1) //1 to 10 (this will work, only if minimum number 1), adding 1 at last coz initial num be from '0 to 9'

const min = 16
const max = 30

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //adding min at end, for minimum starting from min(16)