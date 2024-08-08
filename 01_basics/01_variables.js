const accountId = 144553
let accountEmail = "singh@gmail.com"
var accountPassword = "12345"
accountCity = "Agra"
let accountState;

// accountId = 2// not allowed
accountEmail = "hc@gmail.com"
accountPassword ="212121"
accountCity = "Banglore"

console.log(accountEmail);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])