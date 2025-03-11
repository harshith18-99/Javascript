//!FUNCTION TAKING MULTIPLE ARGUMENTS
function add1(a,b,c){
    return a+b+c;
}
console.log(add1(10,20,30)) //60

//!NESTED SERIES OF FUNCTION TAKING SINGLE ARGUMENT
function add2(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(add2(10)(20)(30)) //60
//!IMPLICIT RETURN ARROW FUNCTION
let add3=a=>b=>c=>a+b+c;
console.log(add3(10)(20)(30)) //60