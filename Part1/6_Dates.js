let dates = new Date()
console.log(dates)                  //2024-04-27T19:57:10.840Z
console.log(dates.toString())       //Sat Apr 27 2024 19:57:10 GMT+0000
console.log(dates.toLocaleString())  //4/27/2024, 8:02:24 PM
console.log(typeof dates)            //object
console.log(typeof Date)             //function

//console.log(dates.__) ,writing '.'  will show all availabel options for Date

const date = new Date(2023, 0, 23)  //2023-01-23T00:00:00.000Z (write y-m-d, ** month starts from 0-11)
console.log(date)

const date3 = new Date('01-01-24')
const date2 = new Date('2024-1-23')  //when writing in such format,** Months Start from 1(Jan)
console.log(date3)

const date1 = new Date(2023, 2, 24, 5, 18)
console.log(date1)                   //2023-03-24T05:18:00.000Z ,with time
console.log(date1.toLocaleString())  //3/24/2023, 5:18:00 AM

console.log(date1.getTime())  //1679635080000

// The internal clock in JavaScript starts at midnight January 1, 1970.
// getTime() returns the number of milliseconds since January 1, 1970.

// if, const date = new Date(), then it will calculate till today's date

console.log(Date.now())  //Seconds from, 1 jan 1970

const newDate = new Date()
console.log(newDate.getMonth())  //3 ,(as it's April, starting from 0 to 3)

// console.log(newDate.)  will get to see alot new functions for day, year etc

console.log(`Today's Date is ${newDate.getDate()} and Month ${newDate.getMonth()} of Year ${newDate.getFullYear()}`)

newDate.toLocaleString('default',{    //inside braces we define Object and Parameters, If want to customize more in LocaleString
    weekday: "long", 

    //by clicking "ctrl + space" we get to see all available options
})