// immediately invoked function expression (IIFE)

function chai(){
    console.log(`DB connected`)
}
chai();

(function code(){
    console.log(`Jai mata di`)
})();

// using arrow function

((name) => {
    console.log(`hey ${name} this is usin arrow function`)
})("ram");