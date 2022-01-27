
function throttle(fn, time, isImm) {
    let timer = null;
    return function (...args) {
        if (!timer) {
            isImm && fn.apply(null, args)
            timer = setTimeout(() => {
                !isImm && fn.apply(null, args)
                timer = null
            }, time);
        }

    }

}


window.onscroll = throttle(function (e) {
    console.log(e);
    console.log(1111);
}, 1000, false)














