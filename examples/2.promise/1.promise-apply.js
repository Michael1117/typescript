// let Promise = require('./promise')
// 1) new Promise 中可以夹杂着异步逻辑
// 2) 同一实例可以多次then
let Promise = require('./promise')
let p = new Promise(function(resolve, reject){ 
    resolve('成功了') 
});

// 判断then函数的执行结果 和 Promise2 的关系
/* let promise2 = p.then((data)=>{ // 如果自己等待着自己完成  那么当前就应该走向失败
    //return promise2; 
    return new Promise((resolve, reject)=> {
        setTimeout(function(){
            //resolve(1000)
            reject(1000)
        },1000)
    })        
}) */

let promise2 = p.then((data)=>{ // 如果自己等待着自己完成  那么当前就应该走向失败
    //return promise2; 
    return new Promise((resolve, reject)=> {
        setTimeout(function(){
            resolve(new Promise((resolve, reject)=>{
                setTimeout(function(){
                    setTimeout(function(){
                        resolve(3000)
                    },1000)
                },1000)
            }))
        },1000)
    })        
})
promise2.then((data) => {
    console.log(data)
}, err=>{
    console.log('err', err)
})
/* let promise2 = p.then((data)=>{
    //return data;
    throw data;
}) */
/* promise2.then(data => {
    console.log(data)
}, err=>{
    console.log('err', err)
}) */

// 链式调用 的特点 
// 1) 如果一个then方法，返回一个普通值， 这个值会传递给下一次then中作为成功的结果
// 2）不是普通值  (promise 或者报错了)
// 3) 如果返回的是一个Promise 会根据返回的promise是成功还是失败 决定下一个then是成功还是失败
// 4) 捕获错误机制， (1. 默认会找离自己最近的then的失败) 找不到就向下找
// 5) jquery 链式调用  返回this  promise 调用then后 会返回一个新的promise

// then后必须返回的是新的promise
// 支持了异步的promise
// promise的优点  就是链式调用