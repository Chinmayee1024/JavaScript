// Arithmatic operators
// =====================

let a=5;
let b=2;

console.log("a=", a,"and b=",b);
console.log("a + b =",a+b);
console.log("a - b =",a-b);
console.log("a * b =",a*b);
console.log("a / b =",a/b);
console.log("a % b =",a%b);
console.log("a ** b =",a**b);//5^2=25

// unary operator
// ==============

a++;
console.log("now a=",a);
a--;
console.log("now a=",a);

let x =6;
let y=2;
console.log(x++);//6
console.log(x);//7
console.log(++x);//8
console.log(y--);//2
console.log(y);//1
console.log(--y);//0

// ## ASSIGNMENT OPERATOR 
// ======================
//   =  
//  +=   a+=4 i.e a=a+4
//  -+   a-+4 i.e a=a-4
//  *=   a*=4 i.e a=a*4
//  %=   a%=4 i.e a=a%4
// **=   a**=4 i.e a=a^4

let c=6;
let d=4;

c+=4 ;//c+=4 i.e c=c+4
console.log("c=",c);//10
c-=4 ;
console.log("c=",c);//6
c*=4 ;
console.log("c=",c);//24
c/=4 ;
console.log("c=",c);//6
c%=4 ;
console.log("c=",c);//2
c**=4 ;//c**=4 i,e c=c^4
console.log("c=",c);//16

// ## COMPARISION OPERATOR
// ========================

// EQUAL TO   ==
// EQUAL TO & TYPE   ===
// NOT EQUAL TO  !=
// NOT EQUAL TO & TYPE   !==
// GREATER THAN    >
// GREATER THAN EQUAL TO    >=
// LESS THAN    <
// LESS THAN EQUAL TO    <=

let e=5;
let f=7;
console.log("5==7",e==f);//false
console.log("5!=7",e!=f);//true

let g=5;
let h="5";
console.log(g==h);//true
console.log(g!=h);//false
console.log(g===h);//false
console.log(g!==h);//true

console.log("5<7",e<f);//true
console.log("5<=7",e<=f);//true
console.log("5>7",e>f);//false
console.log("5>=7",e>=f);//false

// ## logical Operator
// ====================

// logical AND  &&
// logical OR   ||
// logical NOT   !

let m=5;
let n=2;
console.log(m>n&&n<m);//true
console.log(m<n&&n<m);//false
console.log(m>n&&n>m);//false
console.log(m<n&&n>m);//false


console.log(m>n||n<m);//true
console.log(m<n||n<m);//true
console.log(m>n||n>m);//true
console.log(m<n||n>m);//false


console.log(!(n>m));//true
console.log(!(m>n));//true


// Ternary Operator(simpler or compact if-else statement)
// ================


//  a?b:c
// condition? "true output" : "false output"

let age=28;
let result=age>18? "adult" : "not adult"
console.log(result);





