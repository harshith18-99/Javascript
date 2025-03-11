//!ARITHEMATIC OPERATORS
//! +(ADDITION)
console.log(2+3) //5
console.log(typeof (2+3)) //number
console.log(2+"3") //23
console.log(typeof (2+"3")) //string
console.log("2"+"3") //23
console.log(2+true) //3
console.log(2+false) //2
console.log(2+"2"+false) //22false
console.log(2+5+"2"+true) //72true
console.log(2+10+'abc') //12abc

//! -(SUBTRACTION)
console.log(2-3) //-1
console.log(typeof (2-3)) //number
console.log(2-"3") //-1
console.log(typeof (2-"3")) //number
console.log("2"-"3") //-1
console.log(2-true) //1
console.log(2-false) //2
console.log(2-"2"-false) //0
console.log(2-5-"2"-true) //-6
console.log(2-10-'abc') //NaN


//! *(MULTIPLICATION)
// console.log(2*3) //6
// console.log(typeof (2*3)) //number
// console.log(2*"3") //6
// console.log(typeof (2*"3")) //number
// console.log("2"*"3") //6
// console.log(2*true) //2 
// console.log(2*false) //0
// console.log(2*"2"*false) //0
// console.log(2*5*"2"*true) //20
// console.log(2*10*'abc') //NaN

//! /(DIVISION)
// console.log(4/2) //2
// console.log(typeof (4/2)) //number
// console.log(4/"2") //2
// console.log(typeof (4/"2")) //number
// console.log("10"/"5") //2
// console.log(2/true) //2
// console.log(2/false) //Infinity
// console.log(2/"2"/false) //Infinity
// console.log(10/5/"1"/true) //2
// console.log(2/10/'abc') //NaN

//! %(MODULUS)
// console.log(4%2) //0
// console.log(typeof (4%2)) //number
// console.log(4%"2") //0
// console.log(typeof (4%"2")) //number
// console.log("10"%"5") //0
// console.log(2%'abc') //NaN

//!COMPARISON OR RELATIONAL OPERTORS
//! (>,<,>=,<=,==,!=,===)
// let p = 1
// let q = 2
// let r = "2"

// console.log(p>q)  //false
// console.log(p>r) //false
// console.log(p<r) //true
// console.log(q>=r) //true
// console.log(q<=p) //false
// console.log(p!=q) //true
// console.log(r!=q) //false
// console.log(p==r) //false
// console.log(q==r) //true
// console.log(q===r) //false

//!LOGICAL OPERATOR
//!(|| , && , !)
// let a = 1
// let b = 2
// let c = "2"

// console.log(a>b || b>c) //false
// console.log(a>b || b==c) //true
// console.log(a>b && b>c) //false
// console.log(a>b && b==c) //false
// console.log(a<b && b==c) //true
// console.log(!(a==b)) //true
// console.log(!(b==c)) //false

//!ASSIGNMENT OPERATORS
//!(= ,+= ,-= ,*= ,/= ,%= )
// let a = 20;
// let b = "10";
// console.log(a+=b) //2010
// console.log(a-=b) //2000
// console.log(a*=b) //20000
// console.log(a/=b) //2000
// console.log(a%=b) //0

//!CONDITIONAL / TERNARY OPERATOR
let proposalAcceptance = false
let output1 = proposalAcceptance?"WHEN SHALL I TALK TO YOUR PARENTS?":"ASK YOUR SISTER ONCE"
console.log(output1) //ASK YOUR SISTER ONCE

let comeToClassRegularly = true
let output2 = comeToClassRegularly?"YOU WILL GO TO HEAVEN":"YOU WILL DIE TODAY ITSELF"
console.log(output2) //YOU WILL GO TO HEAVEN