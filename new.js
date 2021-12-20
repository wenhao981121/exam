
Function.prototype.myNew = function (...args) {
    // 箭头函数是没有prototype属性的
    if (this.prototype == void 0)
        throw '箭头函数不能被 new'
    const ob = Object.create(this.prototype);
    const res = this.call(ob, ...args);
    return res ?? ob
}

Array.myNew(3)