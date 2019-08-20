// let Promise = require('./promise')
// 1) new Promise 中可以夹杂着异步逻辑
// 2) 同一实例可以多次then
//let Promise = require('./promise')
let p = new Promise(function(resolve, reject){ 
    //resolve('成功了') 
    //throw new Error("错误")
    //resolve("123")
    reject("123")
});

// 值的穿透

/* p.then(function(data){
    return data;
}).then(function(data){
    return data;
}).then((data)=>{
    console.log(data)
}) */

// reject
p.then().then().then(1, (data)=>{
    console.log(data, "456")
})


 // resolve()
/* p.then().then().then((data)=>{
    console.log(data, "777")
}) */