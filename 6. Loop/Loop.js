// LOOPS IN JS
// ===========

// Loops are used to execute a piece of code again and again.

// for LOOP
// =========

// print 1 to 5
// ================

// for(let i=1; i<=5;i++)
// {
//     console.log("chinmayee");
    
// }

 //print numbers from 1 to 10
 //==============================
 
for(let i=1; i<=10;i++)
{
    console.log(i);
    
}

//CALCULATE SUM OF 1 to 5
//=======================

let sum=0;
for(let i=1; i<=5;i++)
{
  sum=sum+i; 
}
console.log("sum of 1 to 5 is",sum);


// WHILE LOOP:
// ===========

// Syntax
// =======


// initialization;
// while(condition)
// {
//code to be executed
// updation;
// }



// print 1 to 5
// =============

let i=1;
while(i<=5)
{
    console.log(i);
    i++;
}


// DO-WHILE LOOP
// ================

// Syntax
// =======

// do{
//   //code to be executed
// }
// while(condition);

// example
// ========

// let j=1;
// do{
//   console.log("chinmayee");
//   j++;
// }
// while(j<=10);


// for-of loop(use for string and array)
// ============

// for(let val of strVar){
 //code to be executed
// }


let str="chinmayee mohanty";
let size=0;

for(let i of str)
{
  console.log(i);
  size++;
  
}
console.log("string size=",size);//17


// for-in Loop :(used for object)
// =============
// using for in loop we can get the key value of object 

// for (let key in objVar)
// {
//   //code to be executed
// }

// example:
// ========


let student={
  name:"chinmayee",
  age:22,
  cgpa:7.5,
  isPass:true
};
for (let key in student)
{
  console.log(key,"=",student[key]);
  
}