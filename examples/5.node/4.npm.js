//let mz = require("mz");  // 第三方模块 不能出现 ./ ../的路径
let mz = require('./hf')
console.log(module.paths)   // 模块的查找路径