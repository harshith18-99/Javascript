//!WAYS OF CREATING STRING
//*1)LITERAL WAY
// var a = "DISTURBANCE"
// var b = 'SOMETHING'
// console.log(a) //DISTURBANCE
// console.log(typeof a) //string
// console.log(b) //SOMETHING
// console.log(typeof b) //string
//*2)CONSTRUCTOR OBJECT
// let day1 = new String("SATURDAY")
// console.log(day1) //String {'SATURDAY'}
// console.log(typeof day1) //object
// let day2 = new String('SUNDAY') 
// console.log(day2) //String {'SUNDAY'}
// console.log(typeof day2) //object
//*3)STRING INTERPOLATION/TEMPLATE STRINGS
// let sub1 = `HTML`
// let sub2 = `CSS`
// let sub3 = `JS`
// console.log(`TO BECOME A FRONTEND DEVELOPER WE NEED TO LEARN ${sub1} ${sub2} ${sub3}`) //TO BECOME A FRONTEND DEVELOPER WE NEED TO LEARN HTML CSS JS

//!ACCESSING THE STRING CHARACTERS AND FINDING THE TOTAL NO OF CHARACTERS IN A STRING
// let str = 'CHAI BANANA ATA'
// console.log(str[5]) //B
// console.log(str[13]) //T
// console.log(str[15]) //undefined
// console.log(str[-1]) //undefined
// *LENGTH
// console.log(str.length) //15
// console.log(str[str.length-1]) //A
// console.log(str[str.length-2]) //T

//!BUILT-IN METHODS
//*1)charAt(index)
// let str1 = "BIRYANI"
// console.log(str1.charAt(0)) //B
// console.log(str1.charAt(5)) //N
// console.log(str1.charAt(7)) //""
// console.log(str1.charAt(-1)) //""
//*2)charCodeAt(index)
// let str2 = "ICECREAM"
// console.log(str2.charCodeAt(0)) //73
// console.log(str2.charCodeAt(4)) //82
// console.log(str2.charCodeAt(10)) //NaN
// console.log(str2.charCodeAt(-1)) //NaN
//*3)toLowerCase() 
// let str3 = "KaNgUvA"
// console.log(str3.toLowerCase()) //kanguva
//*4)toUpperCase()
// let str4 = "AmArAn"
// console.log(str4.toUpperCase()) //AMARAN
//*5)concat()
// let str5 = "HTML"
// let conmbine1 = "CSS"
// let conmbine2 = "JS"
// console.log(str5.concat(conmbine1,conmbine2)) //HTMLCSSJS
// console.log(str5.concat(" ",conmbine1," ",conmbine2)) //HTML CSS JS
//*6)repeat()
// let str6 = "CHAI"
// console.log(str6.repeat(1)) //CHAI
// console.log(str6.repeat(3)) //CHAICHAICHAI
//*7)replace(oldString,newString)
// let str7 = "I LOVE RIYA I LOVE RIYA"
// console.log(str7.replace("RIYA","JAVASCRIPT")) //I LOVE JAVASCRIPT I LOVE RIYA
//*8)replaceAll(oldString,newString)
// let str8 = "I LOVE RIYA I LOVE RIYA"
// console.log(str8.replaceAll("RIYA","JAVASCRIPT")) //I LOVE JAVASCRIPT I LOVE JAVASCRIPT
//*9)split(separator)
// let str9 ="HTML🎧CSS😁JS🎧REACT"
// console.log(str9.split("😁")) //['HTML🎧CSS', 'JS🎧REACT']
// console.log(str9.split("🎧")) //['HTML', 'CSS😁JS', 'REACT']

//*10)includes(searchString,startIndex)
// let str10 = "JAVASCRIPT IS A SCRIPTING LANGUAGE"
// console.log(str10.includes("IS")) //true
// console.log(str10.includes("HTML")) //false
// console.log(str10.includes("IS",12)) //false

//*11)slice(startIndex,endIndex)
let str11 = "HYPER TEXT MARKUP LANGUAGE"
console.log(str11.slice(6)) //TEXT MARKUP LANGUAGE
console.log(str11.slice(4,10)) //R TEXT
console.log(str11.slice(-8,-1)) //LANGUAG
console.log(str11.slice(5,1)) //""

//*12)substring(startIndex,endIndex)
let str12 = "HYPER TEXT MARKUP LANGUAGE"
console.log(str12.substring(6)) //TEXT MARKUP LANGUAGE
console.log(str12.substring(4,10)) //R TEXT
console.log(str12.substring(-8,-1)) //""
console.log(str12.substring(5,1)) //YPER