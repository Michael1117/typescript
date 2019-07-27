// function f(input: boolean) {
//     let a = 100
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//     if(input) {
//         let b = a + 1;
//         return b
//     }
//     return b
// }
// ===========================
/* function f(condition , x) {
    if(condition) {
        let x = 100;
        return x
    }
    return x
}

f(false, 0)
f(true, 0) */
// ===========================
/* function sumMatrix(matrix: number[][]) {
    let sum = 0
    for(let i = 0; i < matrix.length ;i++) {
        let currentRow = matrix[i]
        for(let j = 0; j < currentRow.length; j++) {
            sum += currentRow[j];
        }
    }

    return sum;
}

let matrix = [
    [1,2,3],
    [4,5,6]
]

console.log(sumMatrix(matrix)) */
// ===================
/* for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i)
    }, 100 * i)
} */
/* const numLivesForCat = 9

const Kitty = {
    name: 'Kitty',
    numLives: numLivesForCat
}

Kitty.name = 'Jerry'
Kitty.numLives -- */
// ==========================
/* let input: [number, number] = [1,2]
let first = input[0]
let second = input[1]

function f([first, second]: [number, number]) {
    console.log(first)
    console.log(second)
}

f(input) */
// ==========================
/*
let [first, ...rest] = [1,2,3,4];
console.log(first)
console.log(rest) */
// =====================
/* let o = {
    a: 'foo',
    b: 12,
    c: 'bar'
}

let {a, ...passthrough} = o

let total = passthrough.b + passthrough.c.length
console.log(total) */
// ================
/* let o = {
    a: 'foo',
    b: 12,
    c: 'bar'
}

//let {a: newName1, b: newName2} = o
let {a,b}: {a: string, b: number} = o;
let newName1 = o.a
let newName2 = o.b

console.log(newName1, newName2)
 */
// ======================
/*
type C = {a: string, b?:number}

function f({a, b} = {}): void{

} */
/* let first = [1,2]
let second = [3,4]

let bothPlus = [0, ...first, ...second, 5]

console.log(bothPlus) */
var defalults = {
    food: 'spicy',
    price: '$10',
    ambiance: 'noisy'
};
var search = __assign({}, defalults, { food: 'rich' });
console.log(search);
