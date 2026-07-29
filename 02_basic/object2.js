const tinderuser = new Object()//singel tone object
const tinderuser2 = {}//non singelton object

tinderuser.id = "123abc"
tinderuser.name = "Kunal"
tinderuser.islogin = false
//console.log(tinderuser);

const regularuser = {
    email : "Some@gmail.com",
    fullname : {
        userfullname : {
            Firstname:"Radha",
            lastname:"Krishna"
        }
    }
}
//console.log(regularuser.fullname.userfullname);

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3)

const users = [
    {
        id:1,
        email:"radha242@gmail.com"
    },
    {

    },
    {

    }
]

users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));