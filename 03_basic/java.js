// for of

const arr = [1, 2, 3, 4]

for(const num of arr){
    console.log(num)
}

//Maps = take unique value


const map = new Map()
map.set("Ram", "Sheeta")
map.set("Radha", "Krishna")
map.set("Shiv", "Parvati")
map.set("Lakshman", "Urmila")

console.log(map)

for(const [a, b] of map){
    console.log(a,b)
}