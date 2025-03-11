//!FUNCTION DECLARATION
// !GENERAL/NORMAL/COMMON FUNCTION
// function anything(){
//     console.log("I AM GENERAL FUNCTION")
// }
// anything()
// anything()
// anything()

//!BEHAVIOR OF FUNCTION
//*FUNCTION WITHOUT PARAMETER WITHOUT RETURN KEYWORD
// function add1(){
//     console.log(2+3) //5
// }
// add1()
//*FUNCTION WITHOUT PARAMETER WITH RETURN KEYWORD
// function add2(){
//     return 10+20
// }
// console.log(add2()) //30
//*FUNCTION WITH PARAMETER WITHOUT RETURN KEYWORD
// function add3(a,b){
//    console.log(a+b)
// }
// add3(24,30) //54
// add3(20,22) //42
//*FUNCTION WITH PARAMETER WITH RETURN KEYWORD
// function add4(val1,val2){
//    return val1+val2
// }
// console.log(add4(20,25)) //45

//!FUNCTION WITH EXTRA ARGUMENTS
// function extra1(a,b){
//   console.log(a+b); //30
// }
// extra1(10,20,30)

//!FUNCTION WITH EXTRA PARAMETERS
// function extra2(a,b,c){
//    console.log(a+b) //30
//    console.log(a+c) //NaN
// }
// extra2(10,20)

//!FUNCTION EXPRESSION

//!ANONYMOUS FUNCTION
// let anonymous = function(){
//     console.log("IM ANONYMOUS FUNCTION")
// }
// anonymous()

//!ARROW FUNCTION
// let something = ()=>{
//     console.log("5 MORE DAYS FOR SUNDAY")
// }
// something()

//*TYPES BASED ON RETURN KEYWORD
//!EXPLICIT RETURN ARROW FUNCTION
// let add1 = (a,b)=>{
//   return a+b;
// }
// console.log(add1(10,20)) //30
//!IMPLICIT RETURN ARROW FUNCTION
// let add2 = (a,b)=> a+b;
// console.log(add2(5,5)) //10

//!BEHAVIOUR OF ARROW FUNCTION
//*SINGLE PARAMETER (skip parenthesis)
// let saySomething = val =>val
// console.log(saySomething("STUPID FELLOWS")) //STUPID FELLOWS

//*NO PARAMETER (skip parenthesis REPLACE with underscore)
// let donno = _ =>console.log("IM JUST A PUPPET") //IM JUST A PUPPET
// donno()

//!IIFE(IMMEDIATE INVOKED FUNCTION EXPRESSION)
//*EXAMPLE1
// (function(){
//   console.log("SOMETHING WE SHALL WE TAKE")
// })() //SOMETHING WE SHALL WE TAKE

//*EXAMPLE2
// ((a,b)=>{
//   console.log(a+b)
// })(10,20) //30

//!HIGHER ORDER FUNCTION
// let add = (a,b)=>a+b
// let sub = (a,b)=>a-b
// let mul = (a,b)=>a*b
// let div = (a,b)=>a/b

// let common=(val1,val2,task)=>{
//    return task(val1,val2)
// } 
// console.log(common(10,20,mul)) //200
// console.log(common(10,20,div)) //0.5