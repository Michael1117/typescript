// promise 是一个类 (解决异步问题的)
// 自己来实现这个流程
// new Promise时， 需要传递一个executor 执行器(函数)  会立即被调用
// promise 承诺 默认的状态是pending  等待态 调用resolve 表示成功了 reject 表示失败了
// 每一个promise都有一个实例方法  then
let Promise = require('./promise')
let p = new Promise(function(resolve, reject){
    console.log('start');
    reject('情人节到了')
    resolve('情人节到了')
})

// 
p.then((value)=>{
    console.log('success', value)
}, (reason) => {
    console.log('error', reason)
})
console.log('end')