const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);

const allheros = marvel_heros.concat(dc_heros)//concat is use to add the 2 or more array in a single array
console.log(allheros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1, 3, 4, [3, 4, 5], 3, [3, 4, 5]]
const real_another_array = another_array.flat(Infinity)// using the flat function we can easily handal the multiple array in only one array means "ek array ke andar bahut sare array honge to hm flat ka use krke usko ek single array me convert kr skte hai"

console.log(real_another_array)


console.log(Array.isArray("Radha"))//hm puch skte hai ki ye array hai ya nhi
console.log(Array.from("Radha"));//hmm array.from ka use krke array bna skte hai

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))