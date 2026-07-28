//Array = Array is a collection where we can store multiple values in a same variale names

const myArr2 = new Array(1 , 1, 2)
console.log(myArr2)

// Array Methods
myarr = [2,23,3,3]
myarr.push(6)// ye array ke last me element ko add krta hai
myarr.push(7)// push operation element ke last me value add krta hai
console.log(myarr)
myarr.pop()// pop ye last pe value ko remove krta hai
console.log(myarr)
myarr.unshift(9)//ye push ka opogit hai means ye stating me value ko add krta hai
console.log(myarr)
myarr.shift(9)// ye pop ka opoget hai means ye element ke first value ko remove krta hai
console.log(myarr)

//includes()
console.log(myarr.includes(9))//ye btata hai ki element me ye 'value' hai ki nhi or iska answer true or false me hota hai

//indexOf()
console.log(myarr.indexOf(4))


const newarr = myarr.join()//ye array se str me change kr deta hai
console.log(myarr);
console.log(newarr);
console.log(typeof(newarr));

//slice, splice

console.log("A", myarr)

const myn1 = myarr.slice(1, 3)
console.log(myn1)
console.log("A", myarr)

console.log("B", myarr);
const my2= myarr.splice(1, 3)
console.log(my2)
console.log("B", myarr);