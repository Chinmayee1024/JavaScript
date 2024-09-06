// ARRAYS IN JAVASCRIPT
// ====================

// COLLECTION OF homogeneous ITEMS in linear way.
 
// CREATE ARRAY 
// =============

let heroes=["ironman","hulk","thor","batman"];
let marks=[96,86,85,94,78];
let info=["chinmayee",96,"delhi"];//can possible in js but its not a good Question.


console.log(marks);
console.log(marks.length);
console.log(heroes);
console.log(heroes.length);
console.log(typeof marks);//object
console.log(typeof heroes);//object


// ARRAY INDICES
// =============

// arr[0],arr[1],arr[3]


console.log(marks[0]);//96
console.log(marks[1]);//86
console.log(marks[2]);//85
console.log(marks[3]);//94
console.log(marks[4]);//78
console.log(marks[100]);//undefined

marks[2]=78;
console.log(marks[2]);//78


// LOOPING OVER AN Array
// =====================

// PRINT ALL ELEMENTS OF AN Array

// USING FOR LOOP:
// ===============
heroes=["ironman","hulk","thor","batman"];

for(i=0;i<heroes.length;i++)
{
    console.log(heroes[i]);
    
}

// USING FOR-OF LOOP:
// ==================

for(let hero of heroes)
{
 console.log(hero);
 
}

let cities=["delhi","pune","mumbai","hydrabad","bhubaneswar"];
for(let city of cities){
    console.log(city.toUpperCase());
    
}










