// Events in JS
// ==================

// Events are fired to notify code of "interesting changes" that may affect code execution. 

//The change in the state of an object is known as an Event.


// Mouse events (click, double click etc.) 
// =============
//Keyboard events (keypress, keyup, keydown) 
// ==============
//Form events (submit etc.)
// =========
//Print event & many more Apna College
// ===========





// Event Handling in JS
// ========================

// node.event = ( ) => {   
//      handle here
//      }

// example
// =======
// btn.onclick = ( ) => {  
    //   console.log(“btn was clicked”); 
    // }  
let btn1=document.querySelector("button");
btn1.onclick=()=>{
    alert("u pressed the btn1");
    console.log("congratulations");
    
}
let div=document.querySelector("div");
div.onmouseover=()=>{
    alert("u are inside the div");
    console.log("congratulations ! u entered into the div");
}

// Event Object 
// =================

// It is a special object that has details about the event. 

//All event handlers have access to the Event Object's properties and methods.

// node.event = (e) => {  
      //handle here 
//   }

// let btn2=document.querySelector("#button2");
// btn2.ondblclick=(evt)=>{
//     alert("u pressed the btn2 twice");
//     console.log("congratulations");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
      
// }

let div2=document.querySelector("#div2");
div2.onmouseover=(e)=>{
    alert("u are inside the div2");
    console.log("congratulations ! u entered into the div2");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
}

// e.target, e.type, e.clientX, e.clientY Apna College


// Event Listeners
// ====================
// node.addEventListener( event, callback ) 

let btn2=document.querySelector("#button2");

btn2.addEventListener("click",()=>{
 
    console.log("button was clicked-handler1");
    
      
})
btn2.addEventListener("click",(evt)=>{
 
    console.log("button was clicked again -handler2");
    console.log(evt);
    console.log(evt.type);
          
})
const handler3=()=>{ 
    console.log("button was clicked-handler3");
}
btn2.addEventListener("click",handler3)

btn2.addEventListener("click",()=>{
 
    console.log("button was clicked-handler4");
    
      
})
// node.removeEventListener( event, callback ) 

// *Note : the callback reference should be same to remove Apna College

btn2.removeEventListener("click",handler3)