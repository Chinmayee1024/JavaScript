const accountId=144556
let accountEmail="chinmayee123@gmail.com"
var accountPassword="12345"
accountCity="jaipur"
let accountState;
//const accountNumber;// Missing initializer in const declaration


// accountId=5   //const value cant be updated
console.log(accountId);

accountEmail="eli123@gmail.com"
accountPassword="777777777"
accountCity="bengalur"
console.table([accountId, accountEmail,accountPassword,accountCity]);
console.log(accountState);
//console.log(accountNumber);//: Missing initializer in const declaration


/* Note :
========
prefer not to use var because of issue in block scope and functional scope.
*/