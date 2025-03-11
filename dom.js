//!DOCUMENT OBJECT MODEL
//*When our browser renders our html page it creates a tree like sturucture interally knows "DOM"
//*DOM is a standard for how to get, change, add, or delete HTML elements.
// console.dir(document)

//!ACCESSING THE HTML ELEMENTS
//*TO ACCESS THE HTML ELEMENTS DOM PROVIDES 2 WAYS
//*1)DIRECT ACCESS
//*2)INDIRECT ACCESS

//!DIRECT ACCESS
// console.log(document.all)
// console.log(document.head)
// console.log(document.title)
// console.log(document.body)
// console.log(document.links)
// console.log(document.images)
// console.log(document.forms)

//!INDIRECT ACCESS
//*IT PROVIDES 6 DIFFERENT INBUILT METHODS TO ACCESS THE HTML ELEMENTS
//*1)getElementById()
//*2)getElementsByClassName()
//*3)getElementsByTagName()
//*4)getElementsByName()
//*5)querySelector()
//*6)querySelectorAll()

//!1)getElementById()
//* getElementById is a method in JavaScript that allows you to access an HTML element in a document by its unique id attribute
//*EXAMPLES:
// let h1 = document.getElementById("heading")
// console.log(h1)
// h1.style.color="white"
// h1.style.backgroundColor="lightseagreen"
// h1.style.textAlign="center"

// let btn = document.getElementById("btn")
// console.log(btn)
// btn.style.color="white"
// btn.style.backgroundColor="red"
// btn.style.padding="20px 120px"

//!2)getElementsByClassName()
//* getElementsByClassName is another method in JavaScript that allows you to select elements in the DOM based on their class names. This method returns a live HTMLCollection of all elements in the document that have the specified class name
//*EXAMPLE:
// let group = document.getElementsByClassName("group")
// for(let i=0;i<group.length;i++){
//     group[i].style.border="10px solid green"
// }

//!3)getElementsByTagName()
//*getElementsByTagName is a method in JavaScript that allows you to select elements in the DOM based on their tag name. This method returns a live HTMLCollection of all elements in the document that have the specified tag name
//*EXAMPLE:
// let inputs = document.getElementsByTagName("input")
// for(let i=0;i<inputs.length;i++){
//     inputs[i].style.color="white"
//     inputs[i].style.backgroundColor="black"
// }

//!4)getElementsByName()
//* getElementsByName() is a method in JavaScript that allows you to select elements in the DOM based on their name attribute. This method returns a live NodeList of all elements in the document that have the specified name attribute.
// let elements = document.getElementsByName("common")
// for(let i=0;i<elements.length;i++){
// elements[i].style.border="2px solid red"
// }

//!5)querySelector()
//*querySelector() is a method in JavaScript that allows you to select the first element within the document that matches a specified CSS selector.
//*ID
// let h1 = document.querySelector("#heading")
// h1.style.color="white"
// h1.style.backgroundColor="lightseagreen"
// h1.style.textAlign="center"

//*CLASS
// let group = document.querySelector(".group")
// group.style.borderRadius="50%"

//*TAGNAME
// let input = document.querySelector("input")
// input.style.borderRadius="20px"

//!6)querySelectorAll()
//*querySelectorAll() is a method in JavaScript that allows you to select all elements within the document that match a specified CSS selector. This method returns a static NodeList containing references to all matching elements.All()
//*ID
// let h1 = document.querySelectorAll("#heading")
// console.log(h1)

//*CLASS
// let group = document.querySelectorAll(".group")
// console.log(group)

//*TAGNAME
// let input = document.querySelectorAll("input")
// console.log(input)

//!Difference between queryselector() and queryselectorall()
//*querySelector() is used when you need to select a single element or the first element that matches a CSS selector, while querySelectorAll() is used when you need to select multiple elements that match the CSS selector.

//!write() and writeln()
//*write() and writeln() methods are used to write content to the HTML document. However, they differ in how they handle line breaks
//!write()
//* The write() method writes the specified content to the document without appending a newline character at the end.
// document.write("HELLO FROM DOM")
// document.write("<h1>HELLO FROM DOM</h1>")
//#DIFFERENCE
// document.write("Hello")
// document.write("Hello")
//!writeln()
//*The writeln() method writes the specified content to the document appending a newline character at the end.
// document.writeln("HELLO FROM DOM")
// document.writeln("<h1>HELLO FROM DOM</h1>")
//#DIFFERENCE
// document.writeln("Hello")
// document.write("Hello")

//!ACCESSING THE TEXT CONTENT WRITTEN BETWEEN THE TAGS
// let division = document.getElementById("target");
// console.log(division);
//!INNERTEXT
//*can access only content which is visble on the ui.
// console.log(`INNERTEXT:${division.innerText}`);
//!TEXTCONTENT
//* can access all the content if it is hidden.
// console.log(`TEXTCONTENT:${division.textContent}`);
//!INNERHTML
//*can access all the html Structure along with the text Content inside it.
// console.log(`INNERHTML:${division.innerHTML}`);

//!SETTING THE CONTENT INSIDE HTML ELEMENT
// let container = document.getElementById("container")
// let addContent = ()=>{
//     container.innerText="<h1>HELLO FROM INNERTEXT</h1>"
//     container.innerHTML=`<h1>HELLO FROM INNERHTML</h1>
//     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, magnam ipsam? Iure beatae explicabo excepturi qui quibusdam? Consequuntur quod ullam labore adipisci dolor. Nesciunt perspiciatis optio harum repellat architecto non necessitatibus quas tenetur, praesentium, vitae minima ullam ratione soluta adipisci!</p>
//     `
//     container.textContent="<h1>HELLO FROM TEXTCONTENT</h1>"
// }

// !DEALING WITH ATTRIBUTES
// let h1 = document.querySelector("h1")
//!setAttribute()
//*In JavaScript, setAttribute is a method that allows you to set an attribute on a specified element in the HTML DOM (Document Object Model). It is primarily used to dynamically add or modify attributes of HTML elements.
// let addAttribute=()=>{
//     h1.setAttribute("id","head")
//     h1.setAttribute("class","what")
//     h1.setAttribute("rahul","webTech")
// }
//!removeAttribute()
//*In JavaScript, removeAttribute is a method used to remove a specified attribute from an HTML element in the DOM (Document Object Model). This method is commonly used to dynamically manipulate the attributes of HTML elements.
// let deleteAttribute = ()=>{
//     h1.removeAttribute("title")
//     h1.removeAttribute("rahul")
// }

//!DEAL WITH CLASS NAMES
//*className -- fetches the name of the class of the targeted element
// let para = document.querySelector("p")
// console.log(para.className)
//!GETTING THE ATTRIBUTES
//*getAttribute() and getAttributeNode() are methods used to retrieve attribute values of an HTML element, but they serve slightly different purposes
// let h2 = document.getElementById("donno")
//!getAttribute()
//* the getAttribute() method is used to retrieve the value of a specific attribute of an HTML element.
// console.log(h2.getAttribute("id"))
// console.log(h2.getAttribute("class"))
//!getAttributeNode()
//*The getAttributeNode() method is used to retrieve the attribute node itself, rather than just its value.
// console.log(h2.getAttributeNode("id"))
// console.log(h2.getAttributeNode("class"))
//!ATTRIBUTES
//*In JavaScript, the attributes property of an HTML element provides access to a collection of all the attributes of that element. This collection is represented as a NamedNodeMap, which is similar to an array but contains nodes with key-value pairs representing attributes.
// console.log(h2.attributes)

//!CLASSLIST
//*In JavaScript, the classList property provides an interface to manipulate the classes of an HTML element. It offers a convenient way to add, remove, toggle, and check for the presence of CSS classes on an element.
// let h3 = document.querySelector("h3");
// let dealWithClass = () => {
    //*add(class1, class2, ...): Adds one or more classes to the element. If the class is already present, it will not add it again.
  // h3.classList.add("one", "two", "three", "four");
  //*remove(class1, class2, ...): Removes one or more classes from the element.
  // h3.classList.remove("initialClass");
  //*toggle(class): Toggles the presence of a class. If the class is present, it removes it; if it's absent, it adds it.
  // h3.classList.toggle("someValue");
  //*contains(class): Checks if the element has a specific class. Returns true if the class is present, false otherwise.
  // console.log(h3.classList.contains("one")); //true
  // console.log(h3.classList.contains("five")); //false
   //*item(index): Returns the class name at the specified index. This is useful when you want to access a class by its position.
  // console.log(h3.classList.item(1)); //one
  //*length: Returns the number of classes on the element.
//   console.log(h3.classList.length); //5
// };

//!CREATEELEMENT()
//*used to dynamically create HTML elements.
// let h1 = document.createElement("h1")
// let p = document.createElement("p")
// let btn = document.createElement("button")

//!CREATETEXTNODE()
//*used to create a new text node. Text nodes are used to represent textual content within HTML elements.
// let h1Text = document.createTextNode("I am h1 Text")
// let pText = document.createTextNode("I am p Text")
// let btnText = document.createTextNode("I am btn Text")

//!CREATECOMMENT()
//*used to create a comment node in the HTML DOM (Document Object Model). Comment nodes are used to insert comments into the HTML structure, which are not rendered by the browser but can be useful for adding notes or annotations to the HTML code.
// let comment = document.createComment("This is a comment from dom")


//!appendChild()
//*appendChild is a method used to append a single node (element, text node, etc.) as the last child of a parent node.
// h1.appendChild(h1Text)
// para.appendChild(pText)
// btn.appendChild(btnText)

//!append() 
//*append is a newer method introduced in JavaScript, and it is used to append one or more nodes or DOMString objects to a parent node.
// h1.append(h1Text)
// para.append(pText)
// btn.append(btnText)

//!DISPLAYING CONTENT ON UI
// let body = document.body
// console.log(body)
// body.append(h1,para,btn)

//!childNodes and children
// let mother = document.body
//!childNodes
//*contains all child nodes (including element nodes, text nodes, comment nodes, etc.).
// console.log(mother.childNodes)
//!children
//*contains only the element nodes (i.e., the child elements) of the current node.
// console.log(mother.children)
//!insertBefore()
//*insertBefore is a method used to insert a new node before an existing child node of a specified parent node in the HTML DOM (Document Object Model). This method provides a way to dynamically insert elements or nodes at specific positions within a parent node's children.
// let parent = document.body
// let heading = document.querySelector("h1")
// let btn = document.querySelector("button")
// let para = document.querySelector("p")
// parent.insertBefore(btn,heading)
// parent.insertBefore(para,btn)

//!replaceChild(newChild, oldChild)
//*This method replaces an existing child node (oldChild) with a new child node (newChild).
let hospital = document.getElementById("hospital")
let Raj  = document.getElementById("toBeReplaced")
let Bantu = document.createElement("li")
Bantu.textContent="Bantu"
let kidnapOperation=()=>{
    hospital.replaceChild(Bantu,Raj)
}
//!removeChild(child)
//*This method removes a specified child node from the DOM.
let nurse = hospital.children[4]
console.log(nurse)
let killNurse=()=>{
    hospital.removeChild(nurse)
}