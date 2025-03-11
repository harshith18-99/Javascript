//!DECLARATION WITHOUT INITIALIZATION
// var a;
// console.log(a) //undefined

// let b;
// console.log(b) //undefined

// const c;
// console.log(c) //Uncaught SyntaxError: Missing initializer in const declaration 

//!REINITIALZATION
// var a = 10;
// a = "Rahul"
// console.log(a) //Rahul

// let b = 20;
// b=true;
// console.log(b)//true

// const c = 30;
// c="Javascript"
// console.log(c) //TypeError: Assignment to constant variable.

//!REDECLARATION
// var a =10;
// var a = "Summer"
// console.log(a) //Summer

// let b = 20;
// let b = true;
// console.log(b); //Uncaught SyntaxError: Identifier 'b' has already been declared

// const c = 20;
// const c = "Juice"
// console.log(c) //Uncaught SyntaxError: Identifier 'c' has already been declared