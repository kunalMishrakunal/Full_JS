const user = {
    username: "Radha",
    price: 999,

    welcomemess: function(){
        console.log(`${this.username}, welcome to website`)
    }

}
user.welcomemess()
user.username = "Krishna"
user.welcomemess()