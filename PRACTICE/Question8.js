// Q.1 FOR A GIVEN ARRAY OF NUMBERS ,PRINT THE SQUARE OF EACH VALUE USING THE forEach LOOP  


let nums=[2,3,4,5,6,7];
nums.forEach((num)=>{
    console.log(num*num);
    
})


// OR 
// ==(arrow function)

let numbers=[11,12,13,14];
let calcSquare=(num)=>{
    console.log(num*num);
    
}
numbers.forEach(calcSquare);