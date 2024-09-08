// (structure) HTML
// (style) CSS
// (logic) javascript

// Starter Code
//================
// <script> tag connects HTML with JS 
//<style> tag connects HTML with CSS 


{/* <html>
<head>
<title> Website Name </title> 
</head> 
<body>
<!-- Content Tags -->
</body> 
</html> */}


// Window Object 
//==============
// The window object represents an open window in a browser. 
// It is browser’s object (not JavaScript’s) & is automatically created by browser.
//  It is a global object with lots of properties & methods

//console.log--> to print Element;
// console.dir==> show the property and method of an Object
// html can acess by JS

// window object ==>  document ==> all==> html Element

// console.log("hello");
// window.console.log("hello2");
// window.alert("chinmayee")


// What is DOM ? 
// ================
// When a web page is loaded, the browser creates a Document Object Model (DOM) of the page 

// the way to access the html code through javascript is known as DOM

// window.document: to get the html code of ur page at console or by javascript.

// console.dir(window.document)==> show the property and method of the document

console.dir(document.body);//show the property and method of body object
console.log(document.body);// show the code of body

// window object ==>  document ==> all==> html Element

console.log(document.body.childNodes[1]);//<h1>hihgvfhjg</h1>
// DOM Manipulation
// ===============

// Selecting with id
// =================
// document.getElementById(“myId”) 
let header=document.getElementById("heading") ;//<h1 id="heading">welcome to chinmayee's world</h1>

console.dir(header);//h1#heading



// Selecting with class 
// =====================

// document.getElementsByClassName(“myClass”)

let headings= document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);//HTMLCollection(3) [h2.heading-class, h2.heading-class, h2.heading-class]


// Selecting with tag 
// ==================
// document.getElementsByTagName(“p”)
let parahgraph= document.getElementsByTagName("p");
console.dir(parahgraph);

// Query Selector 
// ==============

// document.querySelector(“#myId / .myClass / tag”) //returns first element

let firstElement=document.querySelector("p");
console.dir(firstElement);//returns first element
 firstElement=document.querySelector(".heading-class");
console.dir(firstElement);//returns first element
firstElement=document.querySelector("#heading");
console.dir(firstElement);


// document.querySelectorAll(“#myId / .myClass / tag”) //returns a NodeList 
let allElement=document.querySelectorAll("p");
console.dir(allElement);//NodeList(2)
allElement=document.querySelectorAll(".heading-class");
console.dir(allElement);


// DOM Manipulation Properties
// ===========================

// tagName : returns tag for element nodes 

firstElement=document.querySelector("#heading");
console.dir(firstElement);

console.log(firstElement.tagName);//h1
 
firstElement=document.querySelector("p");
console.dir(firstElement);

console.log(firstElement.tagName);//p
 



// innerText : returns text content of the element and all its children

console.log(document.querySelector("div").innerText);
                                                      //apple
                                                      //bannana
                                                      //lichu
                                                      //coconut
                                                      //cucumber
 console.log(document.querySelector("div").innerHTML);

//  div.innerHTML(returns the html tags)
// ========================================
// '\n        <ul>\n            <li>apple </li>\n            <li>bannana</li>\n            <li>lichu</li>\n            <li>coconut</li>\n            <li>cucumber</li>\n        </ul>\n    '
// div.innerText(returns only text)
// ====================================
// 'apple\nbannana\nlichu\ncoconut\ncucumber'

// innerHTML :  returns the plain text or HTML contents in the element 

console.log(document.querySelector("div").innerText);
                                                      //apple
                                                      //bannana
                                                      //lichu
                                                      //coconut
                                                      //cucumber
 console.log(document.querySelector("div").innerHTML);

//  div.innerHTML(returns the html tags)
// ========================================
// '\n        <ul>\n            <li>apple </li>\n            <li>bannana</li>\n            <li>lichu</li>\n            <li>coconut</li>\n            <li>cucumber</li>\n        </ul>\n    '
// div.innerText(returns only text)
// ====================================
// 'apple\nbannana\nlichu\ncoconut\ncucumber'

// textContent : returns textual content even for hidden elements


console.log(document.querySelector("h1").textContent);

// HOME WORK
// ==========
// THRE TYPES OF NOdeS IN DOM TREE
// ===============================
// 1. text nodes 
// 2. comment nodes
// 3. elements nodes

console.log(document.body.firstChild);
console.log( document.querySelector("div"));//<div>…</div>
console.log( document.querySelector("div").children);//0: h2length: 1[[Prototype]]: HTMLCollection


let div=document.querySelector("div");
console.log(div);

