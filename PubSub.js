// 发布订阅模式
class PubSub {
    constructor() {
        this.evts = {

        }
    }
    // 订阅(subscribe)
    sub(type, cb) {
        !this.evts[type] && (this.evts[type] = [])
        this.evts[type].push(cb)
    }
    subOnce(type, cb) {
        !this.evts[type] && (this.evts[type] = [])
        const cb2 = () => {
            cb()
            this.unSub(type, cb2)
        }
        this.evts[type].push(cb2)

    }
    // 发布(publish)
    pub(type, ...args) {
        if (this.evts[type]) {
            this.evts[type].forEach(n => {
                n && n(...args)
            })
        }
    }
    // 移除
    unSub(type, cb) {
        const i = this.evts[type].indexOf(cb)
        this.evts[type].splice(i, 1)
    }
}
const ps = new PubSub()
ps.sub('ask', function (arg) {
    console.log('this is ask sub1', arg);
})
ps.subOnce('ask', function (arg) {
    console.log('this is ask sub2', arg);
})

ps.pub('ask', 1)
ps.pub('ask', 2)
ps.pub('ask', 3)

