//!FETCH
//*The fetch method in JavaScript is used to make network requests to fetch resources (like JSON data, images, or any other files) from a server.
//*In Simpler Words , it helps us to extract the data from the api
//!handling promise using then()
let products = fetch("https://fakestoreapi.com/products")
products.then((res)=>{
    return (res.json())
}).then((res)=>{
    console.log(res)
})

//!ASYNC AND AWAIT
//*async and await are keywords introduced in ECMAScript 2017 (ES8) that work together to simplify asynchronous JavaScript code
//*They help us to handle the promises gracefully
//!async - The async keyword is used to declare an asynchronous function. An asynchronous function returns a promise implicitly, which resolves to the value returned by the async function.
//!await - The await keyword can only be used inside an async function. It pauses the execution of the async function until the promise passed to await is settled.
//!handling using async and await
let fetchData = async()=>{
        let products = await fetch("https://fakestoreapi.com/products")
        let finalProducts = await products.json()
        let container = document.getElementById("container")
        console.log(container)
        finalProducts.forEach((elements,index,array)=>{
          container.innerHTML+=`
          <h1>${elements.id}</h1>
          <h1>${elements.title}</h1>
          <img src=${elements.image}>
          <p>${elements.description}</p>
          <p>RS:${Math.round(elements.price*84.86)}/-</p>
          `
        })
}
fetchData()
//*NOTE:
//*json() method is used when working with the fetch API or any other mechanism that returns a promise representing a response from a server. It is specifically used to extract the JSON body content from the response object, converting it into a JavaScript object that can be easily manipulated and used within your application.

//!Example 2
let fetchData2 = async () => {
  let randomNumber = Math.ceil(Math.random() * 1000);
  let image = await fetch(`https://picsum.photos/id/${randomNumber}/info`);
  let randomImage = await image.json();
  let container = document.getElementById("container");
  container.innerHTML = `
        <img src=${randomImage.download_url} style="width:98vw;height:600px;">
    `;
};

//!EXAMPLE 3
let fetchData3 = async () => {
  let dog = await fetch("https://dog.ceo/api/breeds/image/random");
  let finalDogImage = await (dog.json())
  let container = document.getElementById("container")
  container.innerHTML=`
  <img src=${finalDogImage.message} style="height:400px;width:350px;">
  `
};

//!EXAMPLE 4
let fetchData4=async()=>{
     let data = await fetch("https://dummyjson.com/recipes")
    let recipes = await data.json()
    let finalRecipes = recipes.recipes
    console.log(finalRecipes)
    let container = document.querySelector("tbody")
     finalRecipes.forEach((ele,ind,arr)=>{
      container.innerHTML+=`
       <tr>
       <td>${ele.id}</td>
       <td>${ele.name}</td>
       <td>${ele.ingredients}</td>
       <td>${ele.instructions}</td>
       <td><img src=${ele.image}></td>
       </tr>
      `
     })
}
fetchData4()

//!EXAMPLE 5
let fetchData5 = async()=>{
   let data = await fetch("https://foodish-api.com/api/")
   let finalData = await data.json()
   let img = finalData.image
   let container = document.getElementById("food_container")
   container.innerHTML=`
   <img src=${img} height="100%" width="100%" style="border-radius:30px">
   `

}