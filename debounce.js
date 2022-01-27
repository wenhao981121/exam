
// function debounce(fn, time) {
//     let timer = null;
//     return function () {

//     }
// }

// const debounce = (fn, delay, immediate = true) => {
//     let timer = null
//     return function (...args) {
//         if (timer) clearTimeout(timer)
//         immediate && !timer && fn.apply(this, args)
//         timer = setTimeout(() => {
//             timer = null
//             !immediate && fn.apply(this, args)
//         }, delay)
//     }
// }

document.body.addEventListener('click', debounce(function () {
    console.log(11111);
}, 1000, true))

function debounce(fn, time, immediate) {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        } else {
            immediate && fn.apply(null, args)
        }
        timer = setTimeout(() => {
            timer = null
            !immediate && fn.apply(null, args)
        }, time);
    }
}

