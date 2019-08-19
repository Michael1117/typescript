function Promise(executor) {
    // 在promise内部定义一个状态 当前promise的状态
    let self = this;
    self.value = undefined;
    self.reason = undefined;
    self.status = 'pending'  // 默认promise的状态是pending

    self.onResolvedCallbacks = [];  // 存放所有成功的回调
    self.onRejectedCallbacks = [];  // 存放所有失败的回调
    function resolve(value) {
        if(self.status === 'pending') {
            self.value = value;
            self.status = 'resolved'    // 成功态
            self.onResolvedCallbacks.forEach(fn=>fn(self.value))
        }
        
    }
    function reject(reason) {
        if(self.status === 'pending') {
            self.reason = reason;
            self.status = 'rejected'    // 失败态
            // 发布
            self.onRejectedCallbacks.forEach(fn=> {fn(self.reason)})
        }
    }
    executor(resolve, reject);

}

// 这个规范是通用的 我们的promise 可能在别的promise中使用
//let index = 2;
/* Object.defineProperty(x, then, {
    get(){
        index --;
        if(index === 0) {
            throw new Error()
        }
    }
}) */
function resolvePromise(promise2, x ,resolve, reject) {     // 判断x 是不是promise
    if(promise2 === x) {    // 表示防止自己等待自己
        return reject(new TypeError('循环引用'))
    }
    // 保证当前x是一个引用类型
    let called  // 表示当前有没有被调用过
    if(x !== null && typeof x === 'object' || typeof x === 'function') {
        // 很可能是一个promise
        try {
            let then = x.then;      // then 属性具有getter 此时获取时会发生异常
            if(typeof then === 'function') {    // 就任务是promise
                then.call(x, (y)=>{ // y有可能是一个promise
                    // 一直解析  直到结果是一个常量为止
                    if(called) return;  // 给别人的promise增加的逻辑
                    called = true;
                    resolvePromise(promise2, y, resolve,reject)
                    //resolve(y)      // 成功拿到成功的结果让promise2变成成功态
                },(r)=>{
                    if(called) return;
                    called = true;
                    reject(r)
                })
            }else{  // 当前这个then是一个对象 普通对象
                resolve(x)  // {a:1}
            }
        } catch (error) {
            if(called) return;
            called = true;
            reject(error)
        }
    }else{
        resolve(x)  // 普通值 直接成功即可
    }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
    let self = this;
    // 调用then后需要再次 返回一个新的promise
    // 需要拿到当前then方法 成功或失败的返回值
    let promise2 = new Promise(function(resolve, reject){
        if(self.status === 'resolved') {
            setTimeout(()=>{    // 这里要使用promise2，所以要增加异步保证能获取到promise2
                try {
                    let x = onFulfilled(self.value);
                    resolvePromise(promise2, x, resolve, reject)
                    //resolve(x);
                } catch (error) {
                    reject(error)   // 如果执行函数是抛出失败  那么会走向下一个then的失败状态
                }
            },0)
        }
    
        if(self.status === 'rejected') {
           setTimeout(function(){
                try {
                    let x = onRejected(self.reason);
                    //resolve(x)
                    resolvePromise(promise2,x, resolve, reject)
                } catch (error) {
                    reject(error)
                }
           },0)
        }
    
        if(self.status === 'pending') {
            // 订阅
           
            self.onResolvedCallbacks.push(function(){
               setTimeout(function(){
                    try {
                        let x =  onFulfilled(self.value)
                        //resolve(x)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
               },0)
                
            })
            
            self.onRejectedCallbacks.push(function(){
               setTimeout(function(){
                    try {
                        let x =  onRejected(self.reason);
                        //resolve(x)
                        resolvePromise(promise2,x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
               
               },0)
            })
        }
    })

    return promise2;

}
module.exports = Promise;