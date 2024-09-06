///Q.1  PROMPT THE USER TO ENTER  THEIR FULL NAME . GENERATE A USER NAME FOR THEM BASED ON THE INPUT. START USERNAME WITH @ , FOLLOWED BY THEIR FULL NAME AND ENDING WITH THE FULL NAME LENGTH.

//EXAMPLE : user name="chinmayeemohanty",user name should be "@chinmayeemohanty16"


let fullName=prompt("Enter your full name without spaces");//chinmayee

let username="@"+fullName+fullName.length;
console.log(username);//@chinmayee9

