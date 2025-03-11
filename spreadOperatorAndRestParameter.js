//!SPREAD OPERATOR
//*ARRAYS
let arr1 = ["HTML","CSS","JS"]
let arr2 = ["REACT"]
let arr3 = [...arr1,...arr2]
console.log(arr3) //["HTML","CSS","JS","REACT"]
//*OBJECTS
let obj1 = {
    name:"Abc",
    age:20
}
let obj2 = {
    place:"Hyd"
}
let obj3 ={
   ...obj1,
   ...obj2
}
console.log(obj3) //{name:"Abc",age:20,place:"Hyd"}
//*ARRAY TO OBJECT
let arr = ["Chai","Biscuit","Samosa","🚬"]
//#way 1
let resultantObj1 = {}
Object.assign(resultantObj1,arr)
console.log(resultantObj1) //{0: 'Chai', 1: 'Biscuit', 2: 'Samosa', 3: '🚬'}
//#way 2
let resultantObj2 = {...arr}
console.log(resultantObj2) //{0: 'Chai', 1: 'Biscuit', 2: 'Samosa', 3: '🚬'}

//!REST PARAMETER
function cold(a,b,c,...rest){
   console.log(a) //1
   console.log(b) //2
   console.log(c) //3
   console.log(rest) //[4,5,6,7,8,9]
}
cold(1,2,3,4,5,6,7,8,9)