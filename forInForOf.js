let str = 'EARLY'
let arr = ["DONT","IGNORE"]
let obj = {
    name:"Puspha",
    job:"Smuggler",
    wife:"Srivalli"
}

//!FOR-IN
//*STRING
for(let val in str){
    console.log(val) //0 1 2 3 4
    console.log(str[val]) // E A R L Y
}
//*ARRAYS
for(let val in arr){
    console.log(val) //0 1
    console.log(arr[val]) //DONT IGNORE
}
//*OBJECTS
for(let val in obj){
    console.log(val) //name job wife
    console.log(obj[val]) //Pushpa Smuggler Srivalli
}
//!FOR-OF LOOP
//*STRINGS
for(let val of str){
    console.log(val) //E A R L Y
}
//*ARRAYS
for(let val of arr){
    console.log(val) //DONT IGNORE
}
//*OBJECTS
for(let val of obj){
    console.log(val) //Uncaught TypeError:obj is not itterable
}