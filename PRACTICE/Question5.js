//Q.1  FOR A GIVEN ARRAY WITH MARKS OF STUDENTS-->[85,97,44,37,76,60]. FIND THE AVAERAGE MARK OF THE ENTIRE CLASS.
let marks=[85,97,44,37,76,60];
let sum=0;

for(let value of marks)
{
    console.log(value);
    sum=sum+value;
    
}
console.log("sum of marks =",sum);
let avg=sum/marks.length;
console.log("average marks=",avg);



// for(i=0;i<marks.length;i++)
// {
//     sum=sum+marks[i];
// }
// console.log(sum);



// Q.2  FOR A GIVEN ARRAY WITH PRICE OF 5 ITEMS-->[250,645,300,900,50]. ALL ITEMS HAVE AN OFFER OF 10% OFF ON THEM.CHANGE THE ARRAY TO STORE FINAL PRICE AFTER APPLYING OFFER.


// BY USING FOR-OF LOOP
// ====================
let items=[250,645,300,900,50];
 let i=0;
for(let price of items )
{
    console.log("price at index ",i,"=",price);
    let offer=price/10;
    items[i]=items[i]-offer;
    console.log( "after 10% discount final amount is" ,items[i]); 
    i++; 
}
console.log(items);

// BY USING FOR LOOP
// ====================
items=[250,645,300,900,50];

for( let j=0;j<items.length;j++)
{
    //console.log(items[j]=items[j]-items[j]*1/10);
    
    //  or,
    
    let offer=items[j]/10;
    items[j]=items[j]-offer;
    // console.log(items[j]);
    
}


console.log(items);




// console.log(items[i]=items[i]-items[i]*1/10);