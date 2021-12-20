// 模拟实现bind
function myBind(func, t, ...args1) {

    return function (...args2) {
        return func.apply(t, args1.concat(args2))
    }
}
// 或者直接function原型链上

Function.prototype.myBind = function (t, ...args1) {
    const me = this;
    return function (...args2) {
        me.apply(t, args1.concat(args2))
    }
}