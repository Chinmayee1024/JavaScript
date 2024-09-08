//Qs. Create a H2 heading element with text - “Hello Students !”. Append “Let Us Learn JavaScript” to this text using JS.
// ===========================================================================================================================

let h2=document.querySelector("h2");
console.log(h2);//<h2>Hello Students !</h2>
console.dir(h2);//h2 properties

console.log(h2.innerText);//Hello Students !

h2.innerText=h2.innerText+"Let Us Learn JavaScript";
console.log(h2.innerText);//Hello Students !Let Us Learn JavaScript



//Qs. Create 3 divs with common class name - “box”. Access them & add some unique text to each of them. 
// =========================================================================================================


let divs= document.querySelectorAll(".box");
console.dir(divs);
console.log(divs[0]);
console.log(divs[1]);
console.log(divs[2]);


divs[0].innerText="new Unique Value1";
divs[1].innerText="new Unique Value2";
divs[2].innerText="new Unique Value3";
// or
// ==
let idx=1;
for(div of divs)
{
    div.innerText=(`new unique value ${idx}`);
    idx++
    
}


