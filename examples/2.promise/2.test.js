let fs =require('fs'); // promise 回调地狱
let Promise = require('./promise')
/* function read(url){
    return new Promise((resolve, reject)=>{
        fs.readFile(url, 'utf8', (err, data)=>{
            if(err) reject(err);

            resolve(data);
        })
    })
} */

function read(url){
    let defer = Promise.defer(); 
    fs.readFile(url, 'utf8', (err, data)=>{
        if(err) defer.reject(err);
        defer.resolve(data);
    })
    return defer.promise;  
}

read('./age.txt').then(data=>{
    console.log(data)
})