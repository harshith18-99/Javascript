//!PROMISES
//*Promises are Object used to handle asynchronous operations(those operations which take some time to perform the task)
//!TYPES(STATES/PHASES)
//*Promises in JS have 3 states
//*1)Pending State
//*2)Resolved State
//*3)Rejected State
//*To handle the resolved state promise we have then() method similarly to handle catch method we have catch()
//*then() and catch() are higherOrderMethods which take the promise result of resolved and rejected Promises respectively
//!EXAMPLE
let p = new Promise((resolve,reject)=>{
     let takeYouPeopleToCapital = false
     if(takeYouPeopleToCapital){
        resolve("PROMISE WAS RESOLVED")
     }else{
        reject("PROMISE GOT REJECTED")
     }
})
console.log(p)
// console.log(typeof p)
p.then((res)=>console.log(`${res},COME GUYS LETS GO INSIDE AND EAT SOMETHING`))
.catch((err)=>console.log(`${err},SORRY GUYS I WAS BUSY AT THE MOMENT`))