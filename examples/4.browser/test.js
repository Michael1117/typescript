
/* const promise = new Promise((resolve, reject) => {
    console.log(1)
    resolve();
    console.log(2)
})

promise.then(() => {
    console.log(3)
}) */

/* Promise.resolve(1)
.then((x)=> x + 1)
.then((x) => {throw new Error("My Error")})
.catch(()=>1).then((x) => x+1)
.then((x)=> console.log(x))
.catch(console.error) */

/* setTimeout(function(){
    console.log(1)
},0)
new Promise(function(resolve){
    console.log(2);
    for (let i  = 0; i < 10; i++) {
       i == 9 && resolve();         
    }
    console.log(3)
}).then(function(){
    console.log(4)
})
console.log(5) */
async function async1() {
    console.log("async1 start")
    await async2()
    // await xxx()  xxx方法会立即执行   
    // await 后面的代码   是在async2中的then后面执行
    console.log("async1 start2")
}
async function async2() {
    console.log("async2")
}
/* new Promise(function(resolve){
    console.log("promise5")
    //resolve()
}) */
async1();
console.log("script start")
setTimeout(function(){
    console.log("setTimeout")
})

new Promise(function(resolve){
    console.log("promise1")
    resolve()
}).then(function(){
    console.log("promise2")
}).then(function(){
    console.log("promise22")
})
console.log("script end")
