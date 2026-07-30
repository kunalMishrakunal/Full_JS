function sum(num1, num2){//yha pr parameter hota hai
    //console.log(num1 + num2);
}sum(2, 2)// yha pe argument hota hai

 // agar ansewr ko kishi dusre variable me store krana ho to hm ye method use krte hai
function sub(num1, num){
    const answer = num1 - num
   // console.log(answer)
    return answer
}
sub(2, 2)
//agar function ke scope ke bahar apko print krna hai to hm ye use ksrenge

function multiply(num1, num2){
    let answer = num1 * num2
    return answer

}
answer = multiply(2, 2)
//console.log(answer)


function calculatecartprice(...num1){
    return num1
}
console.log(calculatecartprice(200, 400, 500))


//how to pass value using object in function
const user = {
    username:"Radha",
    price:199
}
function obj(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price} `)
}
obj(user)

//how to pass value using array in function

const myarr = [200, 33, 33, 4]
    
function arrva(getarr){
    return getarr[1]
}
console.log(arrva(myarr))




