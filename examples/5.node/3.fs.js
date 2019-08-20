// fs 模块 file system  各种文件  文件夹 权限

let fs = require('fs')

// 同步读取文件
/* let buffer = fs.readFileSync('./name.txt', 'utf8');

console.log(buffer) */

/* fs.exists('./name.txt',(exists)=>{
    console.log(exists)
}) */

let buffer = fs.readFileSync('./name.txt', 'utf8')

console.log(buffer)

try {
    fs.accessSync('./name1.txt')
} catch (e) {
    console.log(e)
}