//!VARIABLES
// console.log(a); //undefined
// var a =10;

// console.log(b) //Uncaught ReferenceError: Cannot access 'b' before initialization
// let b=20;

// console.log(c) //Uncaught ReferenceError: Cannot access 'c' before initialization
// const c = 30;

//!FUNCTIONS
//*FUNCTION DECLARATION
normal()  //"FIRST"
function normal(){
  console.log("FIRST")
}
//*FUNCTION EXPRESSION
expression() //Uncaught ReferenceError: Cannot access 'expression' before initialization
var expression = ()=>{
  console.log("SECOND")
}