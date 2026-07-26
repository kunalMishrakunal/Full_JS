const accountid = 123321 // We can not change the value of a constant variable
let accountname = "John Doe"
var accountpassword = "password123"
//prefer not to use var, because of issue in block scope and function scope
accountcity = "Prayagraj" // This will create a global variable if not declared with var, let, or const
let name

//accountid = 1
accountname = "Radha"
accountpassword = "newpassword456"
accountcity = "Lucknow"

console.table([accountid, accountname, accountpassword, accountcity, name])