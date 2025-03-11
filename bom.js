//!Browser object model(BOM)
//*The browser object model (BOM) is a programming interface that provides objects and methods to interact with browser window.
//*To access the properties of browser we have window object.
//!Window
//*Window: The top-level browser window object. It represents the entire browser window and provides methods and properties to control and interact with it.
// console.log(window)
//!Window Object methods
//*To access the methods of window object there is no need of specifying window. each and every time.
//*Some of the methods of window object are –
//!ALERT()
//*The alert() method in JavaScript is used to display a dialog box with a specified message and an OK button. It is commonly used to provide users with information or to prompt them for input in a simple and straightforward manner. The syntax for the alert() method is as follows:
//*Syntax: alert(message)
//*Example
// let bom1 =()=>{
//     alert("I LOVE YOU ,YOU SHOULD LOVE ME")
// }
//!CONFIRM()
//*The confirm() method in JavaScript is used to display a dialog box with a specified message and two buttons: OK and Cancel. It is commonly used to prompt users for a binary choice, typically to confirm or cancel an action. The syntax for the confirm() method is as follows:
//*Syntax: confirm(message)
//*Example
// let bom2 =()=>{
//    confirm("DO YOU REALLY LOVE ME?")
// }
//!COMBINING ALERT() AND CONFIRM()
// let bom3=()=>{
//     let output = confirm("DO YOU REALLY LOVE ME?")
//     if(output){
//       alert("WHEN SHALL I TALK TO YOUR PARENTS?")
//     }else{
//       alert("NO WORRIES IN THIS WORLD ARE YOU THE ONLY GIRL")
//     }
// }
//!OPEN()
//*In JavaScript, the open() method is used to open a new browser window or tab, or to navigate the current window to a new URL. It is commonly used to dynamically open new windows for various purposes such as displaying content, handling pop-up dialogs, or navigating to external links.
//*Syntax: open(url, target, features);
//*Example:
// let a;
// let bom4=()=>{
//   a=open("https://chat.qspiders.com/","_blank","height=320,width=300,top=150,left=500")
// }
//!CLOSE()
//*In JavaScript, the close() method is used to close the current browser window or tab. It's typically invoked on the window object.
//*Example
// let bom5=()=>{
//    a.close()
// }
//!PROMPT()
//*The prompt() method in JavaScript is used to display a dialog box that prompts the user for input. It typically consists of a message, an input field, and two buttons: OK and Cancel. The user can input text into the field and then choose to submit or cancel the input.
//*The value collected from the user will be by default taken as String
//*Syntax: prompt(message)
//*Example
// let bom6=()=>{
//     let name = prompt("Enter your name")
//     let age = prompt("Enter your age")
//     let place = prompt("Enter your place")
//     console.log(`My name is ${name} and my age is ${age} and I am from ${place}`)

//     let num1 = Number(prompt("Enter number1"))
//     let num2 = Number( prompt("Enter number2"))
//     console.log(num1+num2)
// }
//!INNERHEIGHT AND OUTERHEIGHT
//*innerHeight: This property represents the inner height of the browser window's content area in pixels. It includes the height of the viewport but excludes the height of any browser chrome (such as toolbars and scrollbars). This property is useful for determining the available space for displaying content within the viewport.
// console.log(`INNER HEIGHT IS ${innerHeight}`)
//* outerHeight: This property represents the outer height of the browser window in pixels. It includes the height of the viewport as well as any additional browser chrome (such as toolbars and scrollbars). This property gives the total height of the browser window including its chrome.
// console.log(`OUTER HEIGHT IS ${outerHeight}`)
//!INNERWIDTH AND OUTERWIDTH
//*innerWidth: Similar to innerHeight, this property represents the inner width of the browser window's content area in pixels. It includes the width of the viewport but excludes the width of any browser chrome. It's useful for determining the available space for displaying content horizontally within the viewport.
// console.log(`INNER WIDTH IS ${innerWidth}`)
//*outerWidth: Similar to outerHeight, this property represents the outer width of the browser window in pixels. It includes the width of the viewport as well as any additional browser chrome. This property gives the total width of the browser window including its chrome.
// console.log(`OUTER WIDTH IS ${outerWidth}`)

//!WEB STORAGE SYSTEMS
//*  sessionStorage and localStorage are two mechanisms provided by modern web browsers to store key-value pairs locally within the user's browser
//*sessionStorage
//!SESSION STORAGE
//*The data stored in sessionStorage is scoped to the current browser tab or window session. It persists only as long as the tab or window is open. When the tab or window is closed, the data is deleted.
//*Methods of Session Storage are:
//!SETITEM()
// sessionStorage.setItem("name","Rahul")
// sessionStorage.setItem("age",24)
// sessionStorage.setItem("place","Hyd")
//!GETITEM()
// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("age"))
// console.log(sessionStorage.getItem("place"))
//!REMOVEITEM()
// sessionStorage.removeItem("age")
//!CLEAR()
// sessionStorage.clear()

//!LOCAL STORAGE
//*The data stored in localStorage persists even after the browser is closed and reopened. It remains available until explicitly cleared by the user or the web application that stored the data.
//*Methods of Local Storage are:
//!SETITEM()
// localStorage.setItem("name","Rahul")
// localStorage.setItem("age",24)
// localStorage.setItem("place","Hyd")
//!GETITEM()
// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))
// console.log(localStorage.getItem("place"))
//!REMOVEITEM()
// localStorage.removeItem("age")
//!CLEAR()
// localStorage.clear()

//!HISTORY OBJECT
//*Represents the browser's history stack, allowing you to navigate backward and forward through the user's browsing history.
//*Some of the methods and properties are:
//!FORWARD()
//*Goes forward by 1 tab
// let bom7=()=>{
//     history.forward()
// }
//!BACK()
//*Goes backward by 1 tab
// let bom8=()=>{
//     history.back()
// }
//!LENGTH
//*Tells the total number of tabs opened in a browser
// console.log(history.length)
//!GO()
//*method of the History object, which allows you to manipulate between mutiple tabs of browser's session history
//*go() forward 4tabs
// let bom9 = ()=>{
//     history.go(4)
// }
//*go() backward 2tabs
// let bom10 = ()=>{
//     history.go(-2)
// }

//!LOCATION OBJECT
//*The location object provides a variety of properties and methods that allow you to interact with the browser's address bar, including getting the current URL, setting a new URL, reloading the page
//!HREF
//*Fetches the entire url of a website
console.log(location.href)
//!RELOAD()
//*Reloads a page
let bom11=()=>{
    location.reload()
}
//!ASSIGN()
//*Current url will assigned to new url but has the chance to go back to previous page
let bom12=()=>{
    location.assign("https://chat.qspiders.com/")
}
//!REPLACE()
//*Current url will be replaced with new url but cannot come back to the previous page
let bom13=()=>{
    location.replace("https://w3schools.com/")
}

//!NAVIGATOR
//*TO KNOW THE LOCATION OF THE USER
let bom14=()=>{
    navigator.geolocation.getCurrentPosition((rahul)=>{
       console.log(rahul.coords.latitude)
       console.log(rahul.coords.longitude)
    })
}