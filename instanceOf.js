// 实现 instanceof

function myInstanceof(l, r) {
    let p1 = l.__proto__;
    let p2 = r.prototype;
    while (true) {
        if (p1 == null) {
            return false
        }
        if (p1 === p2) {
            return true
        }
        p1 = p1.__proto__
    }
}
// myInstanceof(1, String)