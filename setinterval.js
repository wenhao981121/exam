// 用settimeout实现setInterval
// 用settimeout模拟的意义，
// 1：setinterval 无视代码错误，回调报错后任然会轮询执行
// 2：setinterval 不保证执行，
// 因为每个 setTimeout 产生的任务会直接 push 到任务队列中；而 setInterval 在每次把任务 push 到任务队列前，
// 都要进行一下判断(看上次的任务是否仍在队列中，如果有则不添加，没有则添加)。
function myInterval(fn, t) {
    let timer = null
    function interval() {
        fn()
        timer = setTimeout(interval, t);
    }
    interval()
    return {
        clear: () => clearTimeout(timer)
    }
}
myInterval(() => {
    console.log(111111111, name.name.name);
}, 1000);

