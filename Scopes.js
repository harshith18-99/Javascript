//!GLOBAL SCOPE
// var name1 = "Srisailam";
// let name2 = "Nikhila";
// const name3 = "Praveen";

//*ACCESSING DIRECTLY (ALL ARE ACCESSIBLE)
// console.log("DIRECTLY ACCESSING")
// console.log(name1);
// console.log(name2);
// console.log(name3);

//*ACCESSING INSIDE FUNCTION (ALL ARE ACCESSIBLE)
// function test2() {
//   console.log("INSIDE FUNCTION");
//   console.log(name1);
//   console.log(name2);
//   console.log(name3);
// }
// test2();

//*ACCESSING INSIDE BLOCK (ALL POSSIBLE)
// {
//   console.log("INSIDE BLOCK");
//   console.log(name1);
//   console.log(name2);
//   console.log(name3);
// }

//!LOCAL OR FUNCTION SCOPE
function home() {
  var kid1 = "Chichu";
  let kid2 = "Chintu";
  const kid3 = "Pandu";
  // *INSIDE FUNCTION (ACCESSIBLE)
  console.log(kid1);
  console.log(kid2);
  console.log(kid3);
}
home();
//*ACCESSING DIRECTLY (NOT ACCESSIBLE)
console.log(kid1);
console.log(kid2);
console.log(kid3);

//*ACCESSING INSIDE BLOCK (NOT ACCESSIBLE)
{
  console.log("INSIDE BLOCK");
  console.log(kid1);
  console.log(kid2);
  console.log(kid3);
}

//!BLOCK SCOPE
{
  var girl1 = "Riya";
  let girl2 = "Domini";
  const girl3 = "Honey";

  //*INSIDE BLOCK (ACCESIIBLE)
  console.log(girl1)
  console.log(girl2)
  console.log(girl3)
}

//*ACCESSING DIRECTLY (VAR KEYWORD DOESNOT FOLLOW)
console.log("DIRECT ACCESSING")
console.log(girl1)
console.log(girl2)
console.log(girl3)

//*ACCESSING INSIDE FUNCTION (VAR KEYWORD DOESNOT FOLLOW)
function marriage() {
  console.log("INSIDE FUNCTION");
  console.log(girl1);
  // console.log(girl2)
  console.log(girl3);
}
marriage();
