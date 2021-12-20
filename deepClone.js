// 极简版，注意这个版本当有循环引用的时候就会崩
function deepClone(target) {
    if (typeof target !== 'object' || target == null)
        return target
    const ob = Array.isArray(target) ? [] : {}
    Object.keys(target).forEach(n => {
        ob[n] = deepClone(target[n])
    })
    return ob
}
// 解决循环引用版本
function deepClone2(target, map = new WeakMap()) {

    if (map.get(target))
        return target
    if (typeof target !== 'object' || target == null)
        return target

    const ob = Array.isArray(target) ? [] : {}
    map.set(target, true)
    Object.keys(target).forEach(n => {
        ob[n] = deepClone2(target[n], map)
    })
    return ob
}