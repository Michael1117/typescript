/* let isDone:boolean = false;
let decLiteral: number = 20;
let hexLiteral: number = 0x14;
let binaryLiteral: number = 0b10100
let octalLiteral: number = 0o24
 */
//  let name: string = 'bob';
//  //name = 'smith';
//  let age: number = 30;
//  let sentence = `Hello , my name is ${name}
//  I'll be ${age+1} year old next month`
//  let sentence2 = 'Hello, my name is ' + name + '.\n\n' + 'I\'ll be' + (age+1) + ' year old next month';
// =========================
//let list: number[] = [1,2,3]
//let list: Array<number> = [1,2,3];
// let x: [string, number]
// x = ['hello', 10]
// x[3] = 11;
// console.log(x[0])
// console.log(x[3])
// enum Color {
//     Red = 1,
//     Green = 3,
//     Blue = 5
// }
// let colorName: string = Color[1];
// let colorName2: string = Color[3];
// console.log(colorName, colorName2)
// ==========================
// let notSure: any = 4
// notSure = 'maybe a string instead'
// notSure = false
// let list: any[] = [1, true, 'free']
// list[1] = 100
// ============================
// function warnUser(): void {
//     console.log('This i my waring message')
// }
// let unusable: void = false
// ==================
// let u: undefined = undefined
// let n: null = undefined
// let num: number = 3
// num = null
// =========================
// function error(message: string): never {  // never 必须是不能返回的，不能结束的，或者是报错的。
//     throw new Error(message)
// }
// function fail() {
//     return error('something failed')
// }
// function infiniteLoop(): never{
//     while(true) {
//     }
// }
// =========================
//declare function create(o: object | null): void;
// 
// create({prop:0})
// create(null)
// create(42)
// create('string')
// create(false)
// create(undefined)
// ==========================
// let someValue: any = 'this is a string'
// let strLength: number = (<string>someValue).length
// let strLength: number = (someValue as string).length
// ==================
// function f() {
//     var a = 10
//     return function g() {
//         var b = a + 1
//         return b
//     }
// }
// var g = f()
// g()
// function f(shouldInitialize) { 
//     if(shouldInitialize) {
//        var x = 10
//     }
//     return x
// }
// f(true)
// f(false)
/* function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++ ) {
       var currentRow = matrix[i];
       for(var j = 0; j < currentRow.length; j++) {
           sum += currentRow[j]
       }
    }

    return sum;
}

var matrix = [
    [1,2,3],
    [4,5,6]
]

console.log(sumMatrix(matrix)) */
for (var i = 0; i < 10; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 1000 * j);
    })(i);
}
