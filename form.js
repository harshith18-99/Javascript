let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let name = document.getElementById("name").value
    let nameField = document.querySelector("#name")
    let phoneField = document.querySelector("#phone")
    let phone = document.getElementById("phone").value
    let password = document.getElementById("password").value
    let passwordField = document.getElementById("password")
    let cpasswordField = document.getElementById("cpassword")
    let cpassword = document.getElementById("cpassword").value
    // !NAME FIELD VALIDATION
    if(name.length<3 || name.length>10){
        alert("ENTER YOUR NAME BETWEEN 3 TO 10 CHARACTERS")
        nameField.style.border="1px solid red"
    }else{
        console.log(name)
        nameField.style.border="1px solid green"
    }
    // !PHONE NUMBER FIELD VALIDATION
    let result = isNaN(phone)
    if(result){
        alert("SPECIFY ONLY NUMERCIAL VALUES")
        phoneField.style.border="1px solid red"
    }else{
        console.log(phone)
        phoneField.style.border="1px solid green"
    }
    if(phone.length!=10){
        alert("ENTER 10 DIGIT NUMBER")
        phoneField.style.border="1px solid red"
    }
    //!PASSWORD AND CPASSWORD VALIDATION
    if(password!=cpassword){
        alert("Check your password")
        passwordField.style.border="1px solid red"
        cpasswordField.style.border="1px solid red"
    }
    else{
         console.log(password)
    console.log(cpassword)
            passwordField.style.border="1px solid green"
        cpasswordField.style.border="1px solid green"
    }
  
})

let eye1 = document.getElementById("password_eye")
let passwordField = document.getElementById("password")
let passwordVisible = false
eye1.addEventListener("click",()=>{
    if(passwordVisible){
       passwordField.type="password"
       passwordVisible=false
    }else{
        passwordField.type="text"
         passwordVisible=true
    }
})

let eye2 = document.getElementById("cpassword_eye")
let cpasswordField = document.getElementById("cpassword")
let cpasswordVisible = false
eye2.addEventListener("click",()=>{
    if(cpasswordVisible){
       cpasswordField.type="password"
       cpasswordVisible=false
    }else{
        cpasswordField.type="text"
         cpasswordVisible=true
    }
})