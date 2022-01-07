// 可以判断所有类型
function typeOf(target) {
    return Object.prototype.toString.call(target).slice(8, -1).toLowerCase()
}