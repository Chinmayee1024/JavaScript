// DATA TYPES IN JAVASCRIPT :
// ==========================

// PRIMITIVE                                              NON PRIMITIVE
// ==========                                           ===================
// N=null
// N=Number                                                OBJECTS
// S=String
// S=Symbol
// B=BigInt
// B=Boolean
// U=undefined

let age=24;
console.log(age);
typeof age;//number
let fullName="chinmayee mohanty";
console.log(fullName);//chinmayee mohanty
typeof fullName;//string
let isFollow=true;
console.log(isFollow);//true
typeof isFollow;//boolean
let x;
console.log(x);// undefined 
typeof age;//undefined
let y=null;
console.log(y);//null
typeof y;//object

let z=BigInt("123");
console.log(z);//123n
typeof z;//BigInt

let a=Symbol("Hello");
console.log(a);//Symbol (Hello)
typeof z;//Symbol


const student ={
    name:"eli",
    age:20,
    cgpa:8.2,
    isPass:true
   };
   console.log(student);//{name: 'eli', age: 20, cgpa: 8.2, isPass: true} 
typeof student;//object
console.log(student["name"])//eli
console.log(student.age)//20
student["age"]=student["age"]+1;
console.log(student.age);//21


