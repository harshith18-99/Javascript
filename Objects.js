//!WAYS OF CREATING A OBJECT
//*1)LITERAL WAY
// let bioData1 = {
//     name:"Srisailam",
//     age:22,
//     hadExGirlfriends:false,
//     badHabits:null,
//     goodHabits:["HelpingOthers","Flirting","CareTaker"],
//     fun:()=>{
//         console.log("Ready to Marry💍")
//     }
// }
//*2)CONSTRUCTOR OBJECT
// let bioData2 = new Object()
// bioData2.name="Praveen"
// bioData2.age=32
// bioData2.hadExGirlfriends=true
// bioData2.badHabits=null
// bioData2.goodHabits=["TimeManagement","ChitChattingWithGirls","Dancer"]
// bioData2.fun=()=>console.log("DIVORCED PERSON BUT STILL READY TO MARRY")

//!ACCESSING THE PROPERTIES OF AN OBJECT
// let bioData = {
//     name:"Srisailam",
//     age:22,
//     hadExGirlfriends:false,
//     badHabits:null,
//     goodHabits:["HelpingOthers","Flirting","CareTaker"],
//     fun:()=>{
//         console.log("Ready to Marry💍")
//     }
// }
//*1)DOT NOTATION
// console.log(bioData.name) //Srisailam
// console.log(bioData.age) //22 
// console.log(bioData.hadExGirlfriends) //false
// console.log(bioData.badHabits) //null
// console.log(bioData.goodHabits) //["HelpingOthers","Flirting","CareTaker"]
// bioData.fun() //Ready to Marry💍
//*2)BOX NOTATION
// console.log(bioData["name"]) //Srisailam
// console.log(bioData["age"]) //22
// console.log(bioData["hadExGirlfriends"]) //false
// console.log(bioData["badHabits"]) //null
// console.log(bioData["goodHabits"]) //["HelpingOthers","Flirting","CareTaker"]
// bioData["fun"]() //Ready to Marry💍

//!DEALING WITH CONST KEYWORD
//*ARRAYS
// const simpleArr = ["Saturday","Cricket","Century","Tmr Biriyani","Sleep"]
// simpleArr[2]="DOUBLE CENTURY"
// console.log(simpleArr) //Modifying the element of an array is possible
// simpleArr = ["HTML"]
// console.log(simpleArr) //Reassigning new value to it is not possible
//*OBJECTS
// const simpleObj = {
//     name:"Rahul",
//     age:24
// }
// simpleObj.age=23
// console.log(simpleObj) ////Modifying the property of an object is possible
// simpleObj={
//     name:'Monty',
//     age:27
// }
// console.log(simpleObj) //Reassigning new value to it is not possible

//!OBJECT PROPERTIES AND METHODS
// let obj = {
//     name:"Vamshi",
//     age:40,
//     isMarried:true,
//     skills:["Cooking","Singing","Dancing","Sleeping"],
//     fun:()=>{
//       console.log("VAMSHI OBJECT CREATED")
//     }
// }
//*1)DELETE
// delete obj.isMarried
// delete obj.age
// console.log(obj) //{name:"Vamshi",skills:["Cooking","Singing","Dancing","Sleeping"],fun:()=>console.log("VAMSHI OBJECT CREATED")}

//*2)KEYS()
// console.log(Object.keys(obj)) //['name', 'age', 'isMarried', 'skills', 'fun']

//*3)VALUES()
// console.log(Object.values(obj)) // ['Vamshi', 40, true, Array(4), ƒ]

//*4)ENTRIES()
// console.log(Object.entries(obj))

//*5)FROMENTRIES()
// let nestedArr = [
//     ["place","Hyd"],
//     ["location","Chaitanyapuri"],
//     ["pincode",500060]
// ]
// console.log(Object.fromEntries(nestedArr)) //{place:"Hyd",location:"Chitanyapuri",pincode:500060}

//*6)ASSIGN()
// let str = 'MONDAY'
// let arr = ["Sunday","Class","Sleep","Eat",'Cricket',"Water"]
// let obj = {
//       name:"Kl Rahul",
//       team:"DC",
//       price:"14cr"
// }
// let resultantObj = {}

// Object.assign(resultantObj,str)
// console.log(resultantObj)  //{0: 'M', 1: 'O', 2: 'N', 3: 'D', 4: 'A', 5: 'Y'}

// Object.assign(resultantObj,arr)
// console.log(resultantObj) //{0: 'Sunday', 1: 'Class', 2: 'Sleep', 3: 'Eat', 4: 'Cricket', 5: 'Water'}

// Object.assign(resultantObj,obj)
// console.log(resultantObj) //{name: 'Kl Rahul', team: 'DC', price: '14cr'}

//*7)SEAL()
// let obj = {
//       name:"Kl Rahul",
//       team:"DC",
//       price:"14cr"
// }
// Object.seal(obj)

// obj.age=31
// console.log(obj) //{name: 'Kl Rahul', team: 'DC', price: '14cr'}

// delete obj.team
// console.log(obj) //{name: 'Kl Rahul', team: 'DC', price: '14cr'}

// // obj.price="15cr"
// // console.log(obj) //{name: 'Kl Rahul', team: 'DC', price: '15cr'} (modification possible)

//*8)FREEZE()
// let obj = {
//       name:"Kl Rahul",
//       team:"DC",
//       price:"14cr"
// }
// Object.freeze(obj)

// obj.age=31
// console.log(obj) //{name: 'Kl Rahul', team: 'DC', price: '14cr'}

// delete obj.team
// console.log(obj) //{name: 'Kl Rahul', team: 'DC', price: '14cr'}

// obj.price="15cr"
// console.log(obj) //{name: 'Kl Rahul', team: 'DC', price: '14cr'}


