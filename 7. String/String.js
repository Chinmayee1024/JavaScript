// STRING IN JAVASCRIPT
// =======================

// CREATE STRING
// ==============

let str1 = "chinmayee mohanty";
let str2 = "eli";

// STRING LENGTH
// ==============
console.log(str1.length);

console.log(str2.length);

// STRING INDICES
// ==============
console.log(str1[0]);
console.log(str1[0], str1[1], str1[2]);
console.log(str2[0], str2[1], str2[2]);


// TEMPLATE  LITERALS(using back tics)
// ==================================

// A WAY TO HAVE EMBEDED EXPRESSIONS IN STRINGS 

//        `This is a template literals`


// EXAMPLE
// ========

let specialString=`This is a template literals`;
console.log(specialString);
console.log(typeof specialString);

let obj={
    item:"pen",
    price:10
};
console.log("The cost of ",obj.item,"is",obj.price,"rupees");//The cost of  pen is 10 rupees
console.log(`The cost of ${obj.item} is ${obj.price} rupees`);//The cost of  pen is 10 rupees



// STRING INTERPOLATION
// ====================

// TO CREATE STRING BY DOING SUBSTITUTION OF PLACEHOLDER

// `string text ${expression} string text`


// EXAMPLE
// =======

let string=`This is a template literals ${1+2+3+4}`;
 console.log(string);//This is a template literals 10
 
// ESCAPE CHARACTER
// ================

// \n--> next line
// \t--> tab space
console.log("chinmayee\nmohanty");
console.log("chinmayee\t mohanty");

let str3="chinmayee\tmohanty";
console.log(str3.length);//17






