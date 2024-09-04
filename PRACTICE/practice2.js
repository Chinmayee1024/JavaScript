//Q.1   Get user to input a number using prompt("enter a number:").check if the number is a multiple of 5 or not.

// alert("hello")//one time pop-up
//prompt("hello")//pop-up and take some input
//  let hii=prompt("hello");
//  console.log(hii);
 

// num=prompt("enter a number:");
// if(num%5==0)
// {
//     console.log(num,"is a muliple of 5");
    
// }
// else{
//     console.log(num,"is not a muliple of 5");
// }


// Q.2   WRITE A CODE WHICH CAN GIVE GRADES TO STUDENTS ACCORDINGLY TO THEIR SCORES.

// 80-100,A
// 70-79,B
// 60-69,C
// 50-59,D
// 0-49,F

score=prompt("enter the scores of the student");

if(score>=90 && score<=100)
    {
        console.log("grade O"); 
    }
    if(score>=80 && score<90)
        {
            console.log("grade A"); 
        }
    
    else if( score>=70 && score<80)
        {
            console.log("grade B"); 
        }
        else if(score>=60 && score<70)
            {
                console.log("grade C "); 
            }
            else if(score>=50 && score<60)
            {
                console.log("grade D"); 
            }
            else if(score>=0 && score<50)
            {
                console.log("grade F"); 
            }
            
           
            