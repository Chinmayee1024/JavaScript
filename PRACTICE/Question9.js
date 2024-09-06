//Q.1  Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.

let marks=[96,85,75,87,93,79,83,98];
let toppers=marks.filter((value)=>{
    return value>90;
})
console.log(toppers);//[ 96, 93, 98 ]


// Qs. Take a number n as input from user. Create an array of numbers from 1 to n. 
let num=prompt("Enter a number :");
let arr=[];
for(let i=1;i<=num;i++){
    arr[i-1]=i;
}
console.log(arr);

// Use the reduce method to calculate sum of all numbers in the array


let sum=arr.reduce((prev,curr)=>{
    return prev+curr;
})
console.log("sum=", sum);


// Use the reduce method to calculate product of all numbers in the array.
let factorial=arr.reduce((prev,curr)=>{
    return prev*curr;
})
console.log("factorial=" , factorial);