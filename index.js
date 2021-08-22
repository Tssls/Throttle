export function debounce(fn, t) {
    let timer = null;
    if (timer !== null) return clearTimeout(timer);
    timer = setTimeout(fn, t);
}

export function throttle(fn, t) {
    let Onoff = true;
    return function () {
        if (!Onoff) return false;
        Onoff = false;
        setTimeout(() => {
            fn.apply(this, arguments);
            Onoff = true;
        }, t)
    }
}