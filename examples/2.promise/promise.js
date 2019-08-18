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
Promise.prototype.then = function(onFulfilled, onRejected) {
    let self = this;
    if(self.status === 'resolved') {
        onFulfilled(self.value);
    }

    if(self.status === 'rejected') {
        onRejected(self.reason);
    }

    if(self.status === 'pending') {
        // 订阅
        this.onResolvedCallbacks.push(function(){
            onFulfilled(self.value)
        })
        
        this.onRejectedCallbacks.push(function(){
            onRejected(self.reason)
        })
    }
}
module.exports = Promise;