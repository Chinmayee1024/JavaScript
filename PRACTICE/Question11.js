// Qs 1. Create a new button element. Give it a text “click me”, background color of red & text color of white. 


// Insert the button as the first element inside the body tag



let btn=document.createElement("button");
btn.innerText="click me";
btn.style.color="black";
btn.style.backgroundColor="cyan";
let body=document.querySelector("body");
body.prepend(btn)




// Qs 2. Create a <p> tag in html, give it a class & some styling. 
//Now create a new class in CSS and try to append this class to the <p> element.

// Did you notice, how you overwrite the class name when you add a new one? 
//Solve this problem using classList. 




let paragraph=document.querySelector("p");
console.log(paragraph);

console.log(paragraph.getAttribute("class"));
paragraph.classList.add("newClass");
console.log(paragraph.classList);
