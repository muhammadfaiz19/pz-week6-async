const name = "krisna"

let number = 10.2
let number2 = 4

// check number
console.log(number > number2)
/* number */

// logika (gerbang logika)
let isActive = true
let exp = false

// && 
console.log(isActive && exp)

// || 
console.log(isActive || exp)

// function -> mempermudah kalian memanggil logika (es5)
function add(a, b) {
    return a + b
}

console.log(add(10, 5));

// arrow function es6
const pengurangan = (a, b) => {
    return a - b
}

console.log(pengurangan(10, 10))

// function
function operation(x) {
    return x + 4
}

let hasil = operation(6)
console.log(hasil)


let result = 1 + "1";
console.log(typeof result)

// operation !4 -> 4x3x2x1
// f(4) = 24

function faktorial(n) {
    if(n < 0) return NaN
    if(n == 1) return 1
    let result = 1
    for (let i = 2; i <= n; i++){
        result *= i
    }

    return result
}

console.log(faktorial(1))

function condition(){
    // 2 
    if(true){
        console.log("ok")
        if(true){
            console.log("ok1")
            if(true) {
                console.log("ok3")
            } else if(false){
                console.log("ok4")
            }
        } else {
            console.log("ok2")
        }
    } else if (true) {
        console.log("maybe")
    } else {
        console.log("tidak ok")
    }

    // 2 kondisi
    const data = true && true;
    switch(data){
        case true:
            console.log(1)
            break;
        case false:
            console.log(2)
            break;
        default:
            console.log(0)
            break
    }
}

condition()