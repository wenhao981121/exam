// 观察者模式
class Observer {
    constructor(update) {
        this.update = update
    }
    update() {

    }
}
class Subject {
    constructor() {
        this.obs = []
    }
    addObserver(o) {
        this.obs.push(o)
    }
    notify(data) {
        this.obs.forEach(n => {
            n.update(data)
        })
    }
}

const s = new Subject()
s.addObserver(new Observer(() => {
    console.log(111111111);
}))
s.addObserver(new Observer(() => {
    console.log(222222222);
}))
s.notify()


// 观察者模式和发布订阅模式的区别：
// 引用一个比喻
// 发布订阅模式就像微信中发朋友圈
// 而观察者模式就像微信中一个消息群发给选中的朋友

// 朋友圈就像一个中间媒介，意思说发布订阅比观察者多了一个这个媒介