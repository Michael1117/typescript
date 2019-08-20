setTimeout(()=>{
    console.log('timeout1')
    process.nextTick(()=>{
        console.log("nextTick2")
    })

    process.nextTick(()=>{
        console.log("nextTick22")
    })
})

console.log('start')
setTimeout(()=>{
    console.log("timeout3")
})
process.nextTick(()=>{
    console.log('nextTick1')
    setTimeout(()=>{
        console.log("timeout2")
    }, 10)
})

// node 10 

//start nextTick1 timeout1 timeout2 nextTick2
//start nextTick1 timeout1 nextTick2 timeout2

// ndoe 11,12 尽量和浏览器的表现相同

let fs = require('fs'); // 先执行check，再执行timer
fs.readFile('./name.txt', 'utf8', () => {
    setTimeout(()=>{    // timer
        console.log('setTimeout1')
    })
    setImmediate(()=>{
        console.log('setImmediate')
        process.nextTick(()=>{
            console.log('nextTick')
        })
    })
    setImmediate(function(){    // check
        console.log("setImmediate1")
    })
})

/* setImmediate(function(){    // check
    console.log("setImmediate")
})

setTimeout(()=>{    // timer
    console.log('setTimeout')
}) */
