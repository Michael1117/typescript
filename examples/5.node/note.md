## node module

- 让javascript代码运行在服务端，node 基于v8,并不包含javascript的全局
- DOM BOM EcamScript
- node中 基本包含EcmaScript 读写文件
- 提供简单 高性能服务器  (cpu密集 计算 i/o密集  文件读取)
- 分配单位 靠的是进程   进程中，一个环境，环境中可以开很多线程  (主线程是单线程  node api异步的) 底层还是通过多线程来模拟异步 libuv
- 结果是靠 事件驱动的
- 浏览器 为什么不是多线程的?   防止同时操作dom
- java 多线程 (切换执行上下文 切换的很快) 并发操作同一个文件 锁的概念
- 多进程 增强稳定性 可靠

## node
- 异步/同步     被调用方 可以决定此方法是 同步还是异步的
- 阻塞和非阻塞      调用方的状态就是 阻塞或者非阻塞        **同步阻塞 异步非阻塞**

## node 安装
- nvm 来切换版本  npm install nvm -g nvm use versioin (mac)
- mvn-win 可以切换版本
> npm node package manager(安装包的)
> nvm version 管理版本的
> nrm registry 源  taobao/cnpm

# node 事件环
- 微任务的概念  (promice.then < process.nextTick) 只要队列发生切换就会执行微任务
- 主执行栈
- timers 时间  setTimeout的回调
- poll 轮询 i/o 回调 fs.readFile()  等待时间到达
- check setImmediate 方法

> 默认  会从上 到下依次执行  如果代码执行到poll 发现check阶段没有 那就在poll中等待时间到达后再清空代码

- 切换队列，把队列清空，如果执行了很多回调，超过了最大限制，也会切换队列
- poll阶段下一个阶段是check,如果check队列中有代码执行，会先执行check

- node 11后有更新  
- 目测 (宏任务执行一个就会执行微任务 (更像浏览器)) 新版本中每个宏任务执行后 就会清空执行微任务

## commonjs require 方法的实现
- debug配置
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [ 
        {
            "type": "node",
            "request": "launch",
            "name": "my debugger",
            "program": "${file}",
            "cwd": "${cwd}"
        }
    ]
}

- 内置实现了一个require方法
- 通过Module._load 方法  加载模块
- Module._resolveFilename 根据相对路径转换成绝对路径  并且增加后缀  (loader.js)
- 缓存的问题 Module._cache
- new Module 创建模块 id 存的是名字 exports = {} this
- tryModuleLoad(module) 尝试加载这个模块
  - 取出文件的后缀
  - 加载模块 (读取文件)
  - Module.wrap 包裹读取的内容
  - 使用runInthisContext 运行字符串
  - 让字符串执行 this改编成 exports

exports是module.exports的别名，但是不能直接改变exports对象的引用，因为不会影响module.exports对象的值
module.exports = exports = {}

module.exports = xxx
exports.a = "xxxx";
global.a = 10;
自定义模块

## 第三方模块的查找

- 安装npm  全局安装 -g 局部安装 (安装到本地文件夹中)
- 全局 在命令行中使用
- 局部 可以在代码中使用


> 根据 module.paths进行查找，找到后返回，找不到向上级查找，找到文件夹名字相同后，查找package.json，找到对应的入口

> scripts可以实现 帮我们记录命令运行的指令，如果写start/test，可以不写run，其他情况下需要 npm run xxx

## 实现全局命令

```json
{
  "name": "hf",
  "version": "1.0.0",
  "main": "a.js",
  "scripts": {
    "dev": "export a=1&node a.js --color red"
  },
  "bin": {
    "hf":"./a.js" // links
  },
  "dependencies": {
  }
}
```

```javascript
#! /usr/bin/env node
console.log("aaaa");
```

```shell
E:\typescript\examples\5.node\hf>npm link
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN hf@1.0.0 No description
npm WARN hf@1.0.0 No repository field.
npm WARN hf@1.0.0 No license field.

up to date in 0.932s
found 0 vulnerabilities

C:\dev\install\hf -> C:\dev\install\node_modules\hf\a.js
C:\dev\install\node_modules\hf -> E:\typescript\examples\5.node\hf

E:\typescript\examples\5.node\hf>hf
aaaa
```



- 1) 需要加一个bin的配置
- 2) 前面是命令，后面是执行的文件
- 3) #！ /usr/bin/env node 使用node来运行文件

## 把我的包 发布到官网
- nrm current 当前是哪个源
- nrm ls    列出源
- npm config list
- 切换到官方源 npm install nrm -g / nrm use npm
- 登录账号 npm addUser
- npm publish 发布
- npm unpublish --force 取消发布
> --save-dev / --save

## yarn (混用需要重新安装)

- npm install yarn -g
- yarn add mz
- yarn remove mz
- yarn global add xxxx