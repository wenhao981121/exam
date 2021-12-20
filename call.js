Function.prototype.myCall = function (context, ...args) {
    context = context || window
    // 如果是基本类型将他们装箱，为的是下面context[s]()这一步能顺利执行
    if (typeof context === 'string')
        context = new String(context)
    if (typeof context === 'number')
        context = new Number(context)
    if (typeof context === 'boolean')
        context = new Boolean(context)
    const s = Symbol()
    context[s] = this
    context[s](...args)
    delete context[s]
}
