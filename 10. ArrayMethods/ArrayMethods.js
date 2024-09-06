// ARRAY METHODS
// ==============

// push() :add to end
// =========================

let fruits=["apple","bannana","orange", "lichhy"];
fruits.push("carrot","guava");
console.log(fruits);//[ 'apple', 'bannana', 'orange', 'lichhy', 'carrot', 'guava' ]

// pop() :delete from end and return
// ========================================


 let deletedFruits=fruits.pop();
console.log( "deletedFruits=",deletedFruits);//deletedFruits= guava
console.log(fruits);//[ 'apple', 'bannana', 'orange', 'lichhy', 'carrot' ]

// toString(): converts array to String
// =======================================

console.log(fruits);//[ 'apple', 'bannana', 'orange', 'lichhy', 'carrot' ]
console.log(fruits.toString());//apple,bannana,orange,lichhy,carrot

let marks=[78,90,67,97,85,79];
console.log(marks);//[ 78, 90, 67, 97, 85, 79 ]

console.log(marks.toString());//78,90,67,97,85,79


// concat():JOINS MULTIPLE  ARRAYS AND RETURN RESULT
// =================================================
marks=[78,90,67,97,85,79];
fruits=["apple","bannana","orange", "lichhy"];
let fm=marks.concat(fruits);
console.log(fm);


// unshift():ADD TO START
// =======================
marks=[78,90,67,97,85,79];
marks.unshift(98);
console.log(marks);// [98, 78, 90, 67, 97, 85, 79]



// shift() : delete from start and return
// =======================================

marks=[98,78,90,67,97,85,79];
let shiftedMarks=marks.shift();
console.log(shiftedMarks);//98

console.log(marks);// [78, 90, 67, 97, 85, 79]


// slice() : returns a piece of the Array
// ======================================
  
// slice(startidx,endidx)
marks=[78,90,67,97,85,79];
console.log(marks);// [78, 90, 67, 97, 85, 79]


console.log(marks.slice(2,6));//[ 67, 97, 85, 79 ]


// splice() :change original Array(add,remove,replace)
// ==================================================

// slice(startidx,delidx,newEle)

marks=[78,90,67,97,85,79];
console.log("deletedMarks=",marks.splice(2,2,56,87));//deletedMarks= [ 67, 97 ]

console.log(marks);//[ 78, 90, 56, 87, 85, 79 ]


let arr=[9,4,3,8,6,5,7];

// ADD Element
// ============

arr.splice(2,0,11);
console.log(arr);// [9, 4, 11, 3, 8, 6, 5, 7]



// DELETE Element
// ==================
arr=[9, 4, 11, 3, 8, 6, 5, 7];
arr.splice(4,2);
console.log(arr);//[ 9, 4, 11, 3, 5, 7 ]


// REPLACE ELEMENT
// ==================
arr=[ 9, 4, 11, 3, 5, 7 ];
arr.splice(3,1,15);
console.log(arr);//[ 9, 4, 11, 15, 5, 7 ]