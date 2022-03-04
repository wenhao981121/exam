// 模拟中间件
class Next {
    constructor() {
        this.cbs = []
        this.evoke()
    }
    evoke() {
        setTimeout(() => {
            this.cbs[0]()
        }, 0);
    }
    use(cb) {
        const idx = this.cbs.length + 1
        this.cbs.push(() => {
            // 执行的时候，如果已经超过数组长度就传个空函数，增加其健壮性
            cb(idx >= this.cbs.length ? function () { } : this.cbs[idx])
        })
        return this
    }
}
const app = new Next()
app
    .use((next) => {
        console.log(1);
        next()
    })
    .use(next => {
        setTimeout(() => {
            console.log(2);
            next()
        }, 2000);

    })
    .use(next => {
        setTimeout(() => {
            next()
            console.log(3);
        }, 3000);
    })