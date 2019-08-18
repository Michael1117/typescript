// let Promise = require('./promise')
// 1) new Promise 中可以夹杂着异步逻辑
// 2) 同一实例可以多次then
let Promise = require('./promise')
let p = new Promise(function(resolve, reject){
    setTimeout(function() {
        //reject('情人节快乐')
        resolve('成功了')
    },1000)
});

p.then((value)=>{
    console.log('success', value)
}, (reason) => {
    console.log('error', reason)
})

p.then((value)=>{
    console.log('success', value)
}, (reason) => {
    console.log('error', reason)
})

console.log('end')

