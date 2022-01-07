// 手写promise系列
// 只实现了then
// catch 类似
const PENDING = 'Pending'
const FULFILLED = 'Fulfilled'
const REJECTED = 'Rejected'
class myPromise {
    onSuccessCBs = []
    data = ''
    status = PENDING
    constructor(cb) {
        cb(this.res)
    }
    // 这里要用，箭头函数否则上面将函数作为参数传递的时候，this会丢失
    res = (data) => {
        if (this.status === PENDING) {
            this.data = data
            this.status = FULFILLED
            while (this.onSuccessCBs.length) {
                this.onSuccessCBs.shift()()
            }
        }
    }
    then(cb) {
        // 异步发生在这一步，这个promise实例在底层实现是微任务
        return new myPromise((res, rej) => {
            this.onSuccessCBs.push(() => {
                const result = cb(this.data)
                if (result instanceof myPromise) {
                    result.then(res)
                } else {
                    res(result)
                }
            })
        })
    }
}
myPromise.resovle = function (value) {
    if (value instanceof myPromise) {
        return value
    } else {
        return new myPromise(res => {
            res(value)
        })
    }
}
myPromise.all = promises => new Promise((res, rej) => {
    const results = []
    let count = 0
    promises.forEach((n, i) => {
        Promise.resolve(n).then(data => {
            count++;
            results[i] = data;
            if (promises.length === count) {
                res(results)
            }
        }).catch(rej)
    })
})

myPromise.race = promises => new Promise((res, rej) => {
    promises.forEach(n => {
        Promise.resovle(n).then(data => {
            res(data)
        }).catch(res => {
            rej(res)
        })
    })
})
// new myPromise((res, rej) => {
//     setTimeout(() => {
//         res(1)
//     }, 1000);
// }).then(n => {
//     console.log(n);
//     return new myPromise((res, rej) => {
//         setTimeout(() => {
//             res(2)
//         }, 1000);
//     })
// }).then(n => {
//     console.log(n);
// })

const p1 = () => new Promise(res => {
    setTimeout(() => {
        res(1)
    }, 1000);
})

const p2 = () => new Promise(res => {
    setTimeout(() => {
        res(2)
    }, 2000);
})

const p3 = () => new Promise((res, rej) => {
    setTimeout(() => {
        rej(1)
    }, 3000);
})

myPromise.all([p1(), p2(), p3()]).then(data => {
    console.log(data);
})

Promise.allSettled([p1(), p2(), p3()]).then(data => {
    console.log(1, data);

})

