// global 可以直接访问global 并且没有window 的概念
// window 代理了 global
// process 进程 (当前运行环境)
// Buffer 读取的内容  都是二进制 buffer主要是内存  缓存 16进制 可以和字符串相互转化
// clearImmediate setImmediate 宏任务
// clearTimeout
// console.dir(global,{showHidden: true})
// eval decode encode
//console.log(this)   // node 的文件 默认在外面套了一层函数，在函数运行时把this指向改变了

// repl Read-eval-print-loop

// process.cwd(); current working directory
// process.env;  enviroment
// process.argv;  arguments
// process.nextTick;  下一队列  微任务

//console.log(process.cwd())  // 在哪执行文件 就可以打印位置 

// webpack 开发环境(process.env.NODE_ENV) 生产环境 

// window set a = 1 export a = 1
/* if (process.env.NODE_ENV === 'production') {
    console.log("生产环境")
} else {
    console.log("开发环境")
} */
//console.log(process.env)

//console.log(process.argv.slice(2)); // node 1.js [--port, 3000]
//let args = process.argv.slice(2)

/* 
    e:\typescript\examples\5.node>node 1.node.js --port 3000 --color red
    开发环境
    [ '--port', '3000' , '--color', 'red' ]
    3000
*/
/* let obj = {};
for (let i = 0; i < args.length; i++) {
    let current = args[i]
    if (current.includes('--')) {
        obj[current.slice(2)] = args[i + 1]
    }

}

console.log(obj.port);
console.log(obj.color) */

Promise.resolve().then(()=>{
    console.log("then")
})

process.nextTick(function() {
    console.log("nextTick")
})

