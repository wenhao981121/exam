// 模拟实现object.create()

function create(proto) {
    function f() { }
    f.prototype = proto
    const ob = new f()
    return ob
}

