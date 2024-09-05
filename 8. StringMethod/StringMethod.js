// STRING METHOD IN JS
// ====================

// these are built in functions to manipulate a string.

// str.toUpperCase()
// =====================


let str="chinmayee mohanty";
let newStr=str.toUpperCase()
console.log(newStr);//CHINMAYEE MOHANTY


// str.toLowerCase()
// ========================

let str1=newStr.toLowerCase();
console.log(str1);//chinmayee mohanty



// str.trim()//remove white space
// ==============================


let str2="    chinmayee   ";
console.log(str2.trim());


// str.slice(start,end)//return part of string
// =============================================
let str3="chinmayee";
console.log( str3.slice(3,7));//nmay
console.log( str3.slice(5));//ayee
console.log( str3.slice(2,5));//inm
 

// str1.concat(str2)//join str2 with str1
// =========================================

let str4="chinmayee";
let str5="mohanty";

console.log(str4.concat(str5));//chinmayeemohanty
console.log(str5.concat(str4));//mohantychinmayee
console.log(str4+str5);//chinmayeemohanty
console.log("My name is "+ str4+str5);//chinmayeemohanty


// str.replace(searchVal,newVal)  and str.replaceAll(searchVal,newVal)
// ===============================

let str6="chinmoyee mohonty";
console.log(str6.replace("o","a"));//chinmayee mohonty replace only first matches value

 console.log(str.replaceAll("o","a"));//chinmayee mahanty replace all search value with new value
  

// str.charAt(index)
// =====================

let str7="i love javascript";
console.log(str7.charAt(0));//i
console.log(str7.charAt(5));//e
console.log(str7.charAt(9));//v
console.log(str7.charAt(11));//s
console.log(str7.charAt(16));//t

//STRING ARE IMMUTABLE(ORIGINAL STRING VALUE CAN'T BE CHANGE)
//=============================================================

let str8="i love js";
str8[0]="you";
console.log(str8);//i love js  it can't change the original value of the string. we can see the changes by using another variable to store.
let str9=str8.replace("i","you");
console.log(str9);//you love js





