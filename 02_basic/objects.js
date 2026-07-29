// singleton = conster se banega atbhi vo singleton banta hai
//Object.create//yahi hai constructor method

// object literals

const mysym = Symbol("key1")//ye symbol hai agar isko muje object me use krna ho to aishe karenge


const JsUser = {
    name : "Radha",
    age : 19,
    [mysym]:"key1",//ye ek symbol hai
    Location : "Brij",
    email : "radha242@gmail.com",
    isLoggedIn : false,
    lastloggin : ["Mon", "Tue", "Wed"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log((JsUser[mysym]));

JsUser.email = "radha770@gmail.com"
//Object.freeze(JsUser)// ye basicaly object ko freeze krne ke liye use kiya jata hai means => iske bad hm hm isme kuch changes nhi kr skte
console.log(JsUser["email"]);
JsUser.email = "radha770@gmail.....com"
console.log(JsUser["email"]);


JsUser.greeting = function() {
    console.log("Radhe radhe Js user");
}

console.log(JsUser.greeting());