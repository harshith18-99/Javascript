//!EXAMPLE1
// console.log("START")
// var a = 10;
// let b = 20;
// const c = 30;
// function example1(){
//     var d = 40;
//     console.log(a+b+d);
// }
// example1()

//!EXAMPLE2
// console.log("START")
// function a(){
//     b()
//     console.log("A FUNCTION EXECUTED")
// }
// function b(){
//     c()
//     console.log("B FUNCTION EXECUTED")
// }
// function c(){
//     console.log("C FUNCTION EXECUTED")
// }
// a()

//!EXAMPLE3
// console.log("START")
// let a =()=>{
//     console.log("A FUNCTION EXECUTED")
// }
// function b(){
//     var num1=20;
//     let num2=30;
//     console.log(num1+num2)
//     console.log("B FUNCTION EXECUTED")
// }
// b()
// a()
//!EXAMPLE4
console.log("START")
function outer(){
    var a = 10;
    let b = 20;
    const c = 30;
    function inner(){
        var d = 40;
        console.log(a+d)
    }
    inner()
}
outer()