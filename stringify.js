
function stringify(data) {
    let str = ''
    if (typeof data == 'string') {
        return "'" + data + "'"
    }
    if (typeof data !== 'object') {
        return data
    }
    if (Array.isArray(data)) {
        data.forEach(n => {
            str += stringify(n) + ','
        })
        return '[' + str.slice(0, -1) + ']'
    }
    Object.keys(data).forEach(n => {
        str += n + ':' + stringify(data[n]) + ','
    })
    return '{' + str.slice(0, -1) + '}'
}
