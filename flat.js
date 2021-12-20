const arr1 = [[1, 4, 5, [1, 4, 5, 6], [123, 45, [1, 3, 4, [12, 3, 4]]], 12], 1, 3, 56, 7]
const arr2 = [[1, 4, 5, [1, 4, 5, 6], [123, 45, [1, 3, 4, [12, 3, 4]]], 12], 1, 3, 56, 7]
// 递归版本
function flat(arr) {
    let temp = []
    arr.forEach(n => {
        if (Array.isArray(n)) {
            temp = temp.concat(flat(n))
        } else {
            temp.push(n)
        }
    })
    return temp
}
console.time(1)
flat(arr1)
console.timeEnd(1)

// es6版本
function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

console.time(2)
flatten(arr2)
console.timeEnd(2)
