const user = {
    username: "Radha",
    price: 999,

    welcomemess: function(){
        console.log(`${this.username}, welcome to website`)
    }

}
 //user.welcomemess()
 //user.username = "Krishna"
 //user.welcomemess()

//console.log(this)

// function chai(){
//     let username = "Ram"
//     console.log(this.username);
// }
// chai()

// function chai = () => {
//     let username = "Ram"
//     //console.log(this.username);
// }
// chai()


const addtwo = (num1, num2) => {
    return num1+ num2
}
console.log(addtwo(2, 3))