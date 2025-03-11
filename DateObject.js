let date = new Date()
console.log(date) //Tue Nov 26 2024 16:16:29 GMT+0530 (India Standard Time)
//!DATE METHODS
console.log(date.toDateString()) //Tue Nov 26 2024
console.log(date.getDate()) //26
console.log(date.getMonth()) //10
console.log(date.getFullYear()) //2024
console.log(date.getDay()) //2
//!TIME METHODS
console.log(date.getHours()) //16
console.log(date.getMinutes()) //17
console.log(date.getSeconds()) //31
console.log(date.getMilliseconds()) //870
console.log(date.getTime()) //1732618077487(Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.)
//!SET METHODS
date.setDate(30) 
date.setMonth(3)
date.setFullYear(2000)
console.log(date) //Sun Apr 30 2000 16:18:16 GMT+0530 (India Standard Time)