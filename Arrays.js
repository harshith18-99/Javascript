//*WAYS OF CREATING ARRAY
//!1)LITERAL WAY
// let arr1 = ["Manoj",24,100000,true]
// console.log(arr1) //["Manoj",24,100000,true]
// console.log(typeof arr1) //object
//!2)CONSTRUCTOR OBJECT
// let arr2= new Array(3)
// arr2[0]="HTML"
// arr2[1]="CSS"
// arr2[2]="JS"
// arr2[3]="REACT"
// console.log(arr2) //['HTML', 'CSS', 'JS', 'REACT']
// console.log(typeof arr2) //object

//!INDEXING
// let arr3 = ["PUSHPA",35,"SMUGGLING","SRIVALLI"]
// console.log(arr3[3]) //SRIVALLI
// console.log(arr3[1]) //35
// console.log(arr3[5]) //undefined
// console.log(arr3[-1]) //undefined

//!LENGTH
// console.log(arr3.length) //4
// console.log(arr3[arr3.length-1]) //SRIVALLI
// console.log(arr3[arr3.length-2]) //SMUGGLING

//!MULTIDIMENSIONAL OR NESTED ARRAY
// let employees = [
//     ["Rahul",24,"WebTech",20000],
//     ["Monty",28,"Python",10000],
//     ["Pavan",25,"Java",5000],
//     ["Yasin",30,"SQL",15000]
// ]
// console.log(employees[2][1]) //25
// console.log(employees[3][2]) //SQL
//!ADDING AND DELETING ELEMENTS AT THE STARTING OR ENDING OF THE ARRAY
// let biryani = ["Chicken","Mutton"]
//*push()
// biryani.push("Prawns","Paneer")
// console.log(biryani) //["Chicken","Mutton","Prawns","Paneer"]
//*pop()
// biryani.pop()
// console.log(biryani) //["Chicken","Mutton","Prawns"]
//*unshift()
// biryani.unshift("Fish","Mushroom")
// console.log(biryani) //["Fish","Mushroom","Chicken","Mutton","Prawns"]
//*shift()
// biryani.shift()
// console.log(biryani) //["Mushroom","Chicken","Mutton","Prawns"]

//!BUILT-IN ARRAY METHODS
//*1)toString()
// let arr1 = ["Random","Values","some",10,true]
// console.log(arr1.toString()) //Random,Values,some,10,true
// console.log(typeof arr1.toString()) //string

//*2)concat()
// let arr2=["Tell","Speak","Something"]
// let concat1=["Anything","Anywhere","AnyTime"]
// console.log(arr2.concat(concat1)) // ['Tell', 'Speak', 'Something', 'Anything', 'Anywhere', 'AnyTime']
// console.log(arr2.concat("Apart","From","That")) //['Tell', 'Speak', 'Something', 'Apart', 'From', 'That']

//*3)join(separator)
// let arr3 = ["Chintu","Jiju","Chotu","Bantu","Motu"]
// console.log(arr3.join("🫀")) //Chintu🫀Jiju🫀Chotu🫀Bantu🫀Motu
// console.log(arr3.join(" ")) //Chintu Jiju Chotu Bantu Motu

//*4)flat()
// let arr4 = [1,2,3,[4,5,[6,7,[8,[9,[10]]]]]]
// console.log(arr4.flat()) // [1, 2, 3, 4, 5, Array(3)]
// console.log(arr4.flat(2)) //[1, 2, 3, 4, 5, 6, 7, Array(2)]
// console.log(arr4.flat(Infinity)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//*5)reverse()
// let arr5 = [45,18,true,false,undefined,null,"Model"]
// console.log(arr5.reverse()) //['Model', null, undefined, false, true, 18, 45]

//*6)sort()
// let arr6 = [7,2,4,5,1,6,10,100,20]
// console.log(arr6.sort()) //[1, 10, 100, 2, 20, 4, 5, 6, 7]

//*7)includes()
// let arr7 = ["HMM","THEN","STUPID","FELLOWS","PEOPLE"]
// console.log(arr7.includes("HMM")) //true
// console.log(arr7.includes("HAA")) //false
// console.log(arr7.includes("STUPID",1)) //true
// console.log(arr7.includes("STUPID",3)) //true

//*8)slice(startIndex,endIndex)
// let arr8 = ["Srishailam","Girlfriend","Swati","Muthyam","Love"]
// console.log(arr8.slice(0))//['Srishailam', 'Girlfriend', 'Swati', 'Muthyam', 'Love']
// console.log(arr8.slice(0,3)) //['Srishailam', 'Girlfriend', 'Swati']
// console.log(arr8.slice(2,3))//["Swati"]
// console.log(arr8.slice(-3,-1)) //["Swati","Muthyam"]
// console.log(arr8.slice(5,2)) //[]
//*9)splice(startIndex,deleteCount,ElementsToBeAdded)
// let drinks = ["Teachers","Old Monk","Ballantines","Mansion House"]
// drinks.splice(2,1,"100Pipers","Blue Label")
// console.log(drinks) //['Teachers', 'Old Monk', '100Pipers', 'Blue Label', 'Mansion House']

// drinks.splice(-2,0,"Black Label","Red Label")
// console.log(drinks) //['Teachers', 'Old Monk', 'Black Label', 'Red Label', 'Ballantines', 'Mansion House']

//!ARRAY HIGHER ORDER METHODS
//*1)FOREACH(function(element,index,array))
// let frontendSubjects = ["Html", "Css", "Js", "React"];
//#EXAMPLE1
// frontendSubjects.forEach((element, index, array) => {
//   console.log(element); //HTML CSS JS REACT
//   console.log(index); //0 1 2 3
//   console.log(array); //["Html", "Css", "Js", "React"] (4 TIMES)
// });
//#EXAMPLE2
// let output = frontendSubjects.forEach((element,index,array)=>{
//     return element
// })
// console.log(output) //undefined


//*2)MAP(function(element,index,array))
// let backendSubjects = ["Java","Python","NodeJs","ExpressJs"]
//#EXAMPLE1
// backendSubjects.map((element,index,array)=>{
//    console.log(element) //Java Python NodeJs ExpressJs
//    console.log(index) // 0 1 2 3
//    console.log(array) //['Java', 'Python', 'NodeJs', 'ExpressJs']
// })
//#EXAMPLE2
// let output2 = backendSubjects.map((element,index,array)=>{
//    return element
// })

// console.log(output2) //['Java', 'Python', 'NodeJs', 'ExpressJs']

// *3)filter(function(element,index,array))
// let arr3 = [10,2,4,5,7,6]
// let output3 = arr3.filter((element,index,array)=>{
//    return element>=5
// })
// console.log(output3) //[10,5,7,6]

//*4)some(function(element,index,array))
// let arr4 = [10,2,4,5,7,6]
// let output4 = arr4.some((element,index,array)=>{
//          return element >=5
// })
// console.log(output4) //true
//*5)every(function(element,index,array))
// let arr5 = [10,2,4,5,7,6]
// let output5 = arr5.every((element,index,array)=>{
//    return element >=5
// })
// console.log(output5) //false
//*6)reduce(function(accumalator,element,index,array),initialValue)
let arr = [1,2,3,4,5]
let sum = 0;
for(let i=0;i<=arr.length-1;i++){
  sum+=arr[i]
}
console.log(sum) //15

let output6 = arr.reduce((accumalator,element,index,array)=>{
    return accumalator+=element
},0)
console.log(output6) //15