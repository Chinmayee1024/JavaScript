// Q.1  PRACTICE ALL EVEN NUMBER FROM 0 TO 100.

// for(let i=0;i<=100;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i);
        
//     }
// }
// OR 
// ====

// let j=0
// while(j<=100)
// {
//     if(j%2==0)
//         {
//             console.log(j);
            
//         } 
//         j++
// }




// Q.2   CREATE A GAME WHERE YOU START WITH ANY RANDOM GAME Number. ASK THE USER TO KEEP GUESSING THE GAME NUMBER UNTILL THE USER ENTERS CORRECT VALUE. 

let gameNum=25;
let userNum=prompt("guess the game number : ")
while(gameNum!=userNum)
{
    userNum=prompt("You entered wrong number .Guess the game number again : ")
}
console.log("congratulations,you guess the right number");
