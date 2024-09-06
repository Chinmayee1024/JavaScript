// FUNCTION IN JAVASCRIPT
// =======================

// BLOCK  OF CODE THAT PERFORMS A SPECIFIC TASK,CAN BE INVOKED WHENEVER NEEDED.

// FUNCTION DEFINITION
// ===================

// function function_name(){
//     //code
// }
// function function_name(parameter1,parameter2,...){
//     //code
// }
// FUNCTION CALL(invoke)
// ==============
// function_name();
// function_name(parameter1,parameter2,..);

function chinmayee() {
  console.log("WELCOME TO CHINMAYEE'S WORLD");
  console.log("WE ARE GOING TO LEARNING JAVASCRIPT");
}

chinmayee(); //WELCOME TO CHINMAYEE'S WORLD
//WE ARE GOING TO LEARNING JAVASCRIPT

function greetings(msg) {
  console.log(msg);
}

greetings("chinmayee"); //argument


// EXAMPLE
// =========

// WRITE A FUNCTION TO CALCULATE THE SUM OF TWO Number


function sum(a,b){
    // a&b are local variable
    // console.log(a+b);
    // or
    c=a+b;
    return c;
}
let sumOfNum=sum(10,15);
console.log("sum Of Number=",sumOfNum);




// ARROW FUNCTIONS
// ================

// COMPACT WAY OF WRITING A FUNCTION


// const function_name=(parameter1,parameter2...)=>{
//   //code  
// }

const addition=(a,b)=>{
    return a+b;
}

// let value = addition(10,10);
console.log(addition);
let d=addition(10,10);
console.log(d);


// =======================================

const printHello=()=>{
    console.log("hello");
    
}


// SOME MORE ARRAY METHODS
// ===========================

// map
// =====

// CREATES A NEW ARRAY WITH THE RESULT OF SOME OPERATIONS.THE VALUE OF ITS CALLBACK RETURNS ARE USED TO FORM A NEW ARRAY.

// arr.map(callbackFunc(value,idx,arr))
// let newArr=arr.map((value)=>{
//   console.log( val*2);
  
// })

let numbers=[10,12,14,15,16]
let newArray=numbers.map((value)=>{
 return value * value;
  
})
console.log(newArray);


// filter method
// =============

// CREATES A NEW ARRAY OF ELEMENTS THAT GIVE TRUE FOR A CONDITION OR FILTER.

// EXAMPLE
// ========
//  ALL EVEN ELEMENTS

let arr=[1,2,3,4,5,6,7,8,9,10,11,12]
 let evenArr=arr.filter((value)=>{
  return value%2==0;
 })
 console.log(evenArr);


 //reduce METHOD
//  ============

// PERFORMS SOME OPERATIONS AND REDUCES THE ARRAY TO A SINGLE VALUE.IT RETURNS THAT SINGLE VALUE.
 
arr=[1,2,3,4];
const output=arr.reduce((res,curr)=>{
  return res+curr;
})
console.log(output);//10


numbers=[1,7,9,5,2,3,4];
const greaterNum=numbers.reduce((prev,curr)=>{
  return prev > curr ? prev:curr;
})
console.log(greaterNum);//9