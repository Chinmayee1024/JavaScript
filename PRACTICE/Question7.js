// Q. 1
// CREATE A FUNCTION USING THE "FUNCTION " KEYWORD THAT TAKES A STRING AS AN ARGUMENT  AND RETURNS THE NUMBER OF VOWELS IN THE STRING.

function countVowels(str){
    let count =0;
  for(let char of str){
    console.log(char);
    if (char=="a" ||char=="e" ||char=="i" ||char=="o" ||char=="u" ){
      count++;
    }
  }
  console.log("number of vowel= ", count);
  
}
countVowels("chinmayee");
countVowels("kanakalata");
countVowels("jogeswar");
countVowels("rakesh");

//Q.2  CREATE AN ARROW FUNCTION TO PERFORM THE SAME TASK.

const countVowel=(str)=>{
    let count=0;
    for(let char of str)
    {
      console.log(char);
      if (char=="a" ||char=="e" ||char=="i" ||char=="o" ||char=="u" ){
        count++;
      }
    }
    console.log("number of vowel= ", count);    
}

countVowel("hii");



// forEach Loop in arrays(higher order function or higher order method)
// =====================================================

// arr.forEach(callBackFunction)


// callBackFunction : here it is a function to execute for each  element in the array.

//  A callBackFunction  is a function passed as an argument to another function.

let arr=[1,2,3,4,5];

arr.forEach(function printValue(val){
    console.log(val);// 1
                     // 2
                     // 3
                     // 4
                     // 5
})

let array=["pune","delhi","mumbai"];
array.forEach((val,idx,array)=>{
    console.log(val,idx,array);//pune 0 [ 'pune', 'delhi', 'mumbai' ]
                               // delhi 1 [ 'pune', 'delhi', 'mumbai' ]
                                //mumbai 2 [ 'pune', 'delhi', 'mumbai' ]
    
})