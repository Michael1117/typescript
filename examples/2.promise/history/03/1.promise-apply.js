let fs = require('fs')

/* fs.readFile('./name.txt', 'utf8', function(err, data){
    fs.readFile(data, 'utf8', function(err,data){
        console.log(data)
    }) 
})   */

function readFile(url) {
    return new Promise((resolve, reject)=>{
        fs.readFile(url, 'utf8', function(err, data){
            if(err) reject();
            resolve(data);
        })
    })
}

// 链式调用 的特点 
// 1) 如果一个then方法，返回一个普通值， 这个值会传递给下一次then中作为成功的结果
// 2）不是普通值  (promise 或者报错了)
/* readFile('./name.txt').then((data) => {
    //console.log(data)
    // readFile(data).then(data => {
    //     console.log(data)
    // })
    return 100;
},(err) => {
    console.log(err)
}).then(data=> {
    console.log(data)
}, function(err) {

}) */

// 2）不是普通值  (promise 或者报错了)
/* readFile('./name.txt').then((data) => {
    //throw new Error('出错了')
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve("哈哈")
        },1000)
    })
},(err) => {
    console.log(err)
}).then(data=> {
    console.log('s '+ data)

}, function(err) {
    console.log('e '+ err)
}) */

// 3) 如果返回的是一个Promise 会根据返回的promise是成功还是失败 决定下一个then是成功还是失败


/* readFile('./name.txt').then((data) => {
    return readFile(data)
},(err) => {
    console.log(err)
}).then(data=> {
    //console.log('s '+ data)
    return 100;
}, function(err) {
    console.log('e '+ err)
}).then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
}) */
/* 
readFile('./name.txt').then((data) => {
    return readFile(data + '1')
},(err) => {
    console.log(err)
}).then(data=> {
    //console.log('s '+ data)
    return 100;
}).then(data=>{
    console.log(data)
},err=>{
    console.log(err+'1')
}).catch(err=>{
    console.log(err)
}) */

// 4) 捕获错误机制， (1. 默认会找离自己最近的then的失败) 找不到就向下找
readFile('./name.txt').then((data) => {
    return readFile(data + '1')
},(err) => {
    console.log(err)
}).then(data=> {
    //console.log('s '+ data)
    return 100;
}).then(data=>{
    console.log(data)
}).catch(err=>{
    console.log('catch '+ err)
}).then((data)=>{
    console.log(data)
},err=>{
    console.log(err)
})
// 5) jquery 链式调用  返回this  promise 调用then后 会返回一个新的promise

// then后必须返回的是新的promise
p = new Promise((resolve, reject)=>{
    resolve(123)
})
p.then(data=>{
    throw err
})

// 支持了异步的promise
// promise的优点  就是链式调用