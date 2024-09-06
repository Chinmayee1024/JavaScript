// Q1. CREATE AN ARRAY TO STORE COMPANIES-->"BLOOMBERG","MICROSOFT","UBER","GOOGLE","IBM","NETFLIX".



// a. REMOVE THE FIRST COMPANY FROM THE Array
// ===============================================

let companies=["BLOOMBERG","MICROSOFT","UBER","GOOGLE","IBM","NETFLIX"];
companies.shift();
console.log(companies);//[ 'MICROSOFT', 'UBER', 'GOOGLE', 'IBM', 'NETFLIX' ]


//b. REMOVE "UBER" AND ADD  "OLA"  IN ITS PLACE
// ================================================
companies=[ 'MICROSOFT', 'UBER', 'GOOGLE', 'IBM', 'NETFLIX' ];
companies.splice(1,1,"OLA");
console.log(companies);//[ 'MICROSOFT', 'OLA', 'GOOGLE', 'IBM', 'NETFLIX' ]

//c. ADD "AMAZON" AT THE END
// ================================
companies=[ 'MICROSOFT', 'OLA', 'GOOGLE', 'IBM', 'NETFLIX' ];
companies.push("Amazon");
console.log(companies);//[ 'MICROSOFT', 'OLA', 'GOOGLE', 'IBM', 'NETFLIX', 'Amazon' ]




// NOTE 
// ======

// push ---add element at the end
// unshift--add element at the start

// pop ---delete element at the end
// shift--delete element at the start


