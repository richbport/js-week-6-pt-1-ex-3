function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}





let throttleCount = 0;
function handleThrottleScroll() {
    throttleCount++
    document.getElementById('ThrottleCount').textContent = throttleCount
}

function handleDebouncingScroll() {
    document.getElementById("debounceState").textContent = "Scrolling...";
    setTimeout(() => {
        document.getElementById("debounceState").textContent = "Not Scrolling..."
    }, 200)
}