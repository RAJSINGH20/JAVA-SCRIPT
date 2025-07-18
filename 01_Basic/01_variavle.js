const accountId = 1234567890;
var accountName = "John Doe";
let accountBalance = 1000.50;
//accountBalance = 1200.75; // Reassigning value to let variable

console.log("Account ID:", accountId);

/*
    Prefer not to use var 
    for variable declaration as it has function scope
    and can lead to unexpected behavior.
*/ 

console.table([
    accountId,
    accountName,
    accountBalance
]);