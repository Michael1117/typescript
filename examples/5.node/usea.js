/* let r = require('./a')      // 策略 默认会增加.js .json

console.log(r)

 */
let path = require('path');
let fs = require('fs')
let vm = require('vm')

function Module(id) {
    this.id = id;
    this.exports = {};
}

Module.wrapper = [
    "(function(exports,module,require,__dirname,__filename) {",

    "})"
]
Module._extensions = {
    '.js'(module) {
        let content = fs.readFileSync(module.id, 'utf8');
        let fnStr = Module.wrapper[0] + content + Module.wrapper[1];
        let fn = vm.runInThisContext(fnStr)
        fn.call(module.exports, module.exports, module, req)
    },
    '.json'(module) {
        //console.log(pathname)
        let json = fs.readFileSync(module.id, 'utf8');
        module.exports = json; // 把文件的结果放到exports属性上
    }
}

function tryModuleLoad(module) {
    let extension = path.extname(module.id)
    // 通过后缀加载当前模块
    Module._extensions[extension](module)
    //console.log(extension)
}

Module._cache = {};

function req(modulePath) {
    // 获取当前要加载的绝对路径
    let absPathname = path.resolve(__dirname, modulePath);
    let extNames = Object.keys(Module._extensions);
    let index = -1;
    let old = absPathname;
    function find(absPathname) {
        if (index === extNames.length) {
            throw new Error("文件不存在")
            return absPathname;
        }
        try {
            // 找到后就终止查找
            fs.accessSync(absPathname)
            return absPathname;
        } catch (e) {
            let ext = extNames[index++]     // .js
            let newPath = old + ext;
            return find(newPath)
        }

    }

    absPathname = find(absPathname);  // 找当前路径是否存在
    try {
        fs.accessSync(absPathname)
    }catch (e) {
        throw new Error("error")
    }
    if (Module._cache[absPathname]) {    // 如果文件已经存在 直接将exports 对象返回即可
        return Module._cache[absPathname].exports
    }
    // console.log(absPathname)
    let module = new Module(absPathname);
    Module._cache[absPathname] = module;
    tryModuleLoad(module); // 尝试加载当前模块
    return module.exports; // req方法默认会返回exports 对象
}

//let obj = req('./a.json')
//let obj = req('./a.js')
let obj = req('./a')
console.log(obj)
console.log(global.a);
// module.exports 和 exports 区别

// exports是module.exports的别名，但是不能直接改变exports对象的引用，因为不会影响module.exports对象的值
/* module.exports = exports = {}

exports.a = "xxxx";
return module.exports */

// global.a = 10;
// 自定义模块