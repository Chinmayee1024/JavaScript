//DOM Manipulation
// ======================

// Attributes
// ==========

//1. getAttribute( attr ) //to get the attribute value
// ==================================================

let div= document.querySelector("div");
console.log(div);//<div id="box">this is a div</div>
let id=div.getAttribute("id");
console.log(id);//box
let paragraph= document.querySelector("p");
console.log(paragraph);//<p class="para">this is a simple line</p>
let classValue=paragraph.getAttribute("class");
console.log(classValue);//para

// 2. setAttribute( attr, value ) //to set the attribute value
// ========================================================
let heading=document.querySelector("h1");
console.log(heading);//<h1 id="newHeading">hello javascript!</h1>
let changeAttributeValue=heading.setAttribute("id","newHeading")
console.log(changeAttributeValue);


// Style 
// ======
// node.style
// ==========

let divBox=document.querySelector("div");
console.log(divBox);
   console.log(divBox.style);
    div.style.backgroundColor=" blue";
div.style.fontSize="25px";
// div.innerText="hello";
// div.style.visibility="hidden";


// DOM Manipulation
// =================

// Insert Elements  : 
// ===================

// First step (create the element)
// ===============================
let el = document.createElement("div")

// second step(add the Element)
// ============================

// node.append( el ) //adds at the end of node (inside) 

// node.prepend( el ) //adds at the start of node (inside)

// node.before( el ) //adds before the node (outside)
// node.after( el ) //adds after the node (outside)

// Example
// ========
let newBtn=document.createElement("button");
newBtn.innerText="click me";
console.log(newBtn);


let heading2=document.createElement("h2");
heading2.innerText="this is heading 2 ";
console.log(heading2);

let heading3=document.createElement("h3");
heading3.innerText="this is heading 3 ";
console.log(heading3);

let heading4=document.createElement("h4");
heading4.innerText="this is heading 4 ";
console.log(heading4);


div=document.querySelector("div");
div.append(newBtn);//adds button at the end of div (inside) 

div.prepend(heading2);//adds heading2 at the start of div (inside) 

div.before(heading3);//adds  heading3 before the div (outside)

div.after(heading4);//adds heading4 after the div (outside)




// Delete Element 
// ===================

// node.remove( ) //removes the node

let para=document.querySelector("p");
para.remove();//

