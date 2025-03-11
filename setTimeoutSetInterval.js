//!setTimeout(fn,time)
// setTimeout(()=>{
//    console.log("Execute only once")
// },3000)

//!setInterval(fn,time)
// setInterval(()=>{
//   console.log("Execute Multiple times")
// },1000)

//!clearInterval()
let count = 0;
let time = setInterval(()=>{
    console.log("MONTY SIR HERO")
    count++
    if(count==5){
        clearInterval(time)
        console.log("ADI TELUSU NAKU VERE YEMAINA CHEPANDI")
    }
},1000)

//!clearTimeout()
let shoot = setTimeout(()=>{
     console.log("SHOOT AT RAHUL SIR")
},5000)

let stopMission = setTimeout(()=>{
     clearTimeout(shoot)
     console.log("RAHUL SIR IS VERY GUD DONT SHOOT AT HIM")
},3000)