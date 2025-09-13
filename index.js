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

function debounce(func, delay) {
  let timeoutID;
  return function () {
    const args = arguments;
    const context = this;
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => func.apply(context, args), delay)
  }
}

// let throttleCount = 0;
// function handleThrottleScroll() {
//     throttleCount++
//     document.getElementById('throttleCount').textContent = throttleCount
// }

let throttleCount = 0;
function handleThrottleScroll() {
  throttleCount++
  document.getElementById('throttleCount').textContent = throttleCount;
}

function handleDebouncingScroll() {
    document.getElementById("debounceState").textContent = "Scrolling...";
    setTimeout(() => {
        document.getElementById("debounceState").textContent = "Not Scrolling..."
    }, 200)
}

const throttledScrollHandler = throttle(handleThrottleScroll, 500);

const debounceScrollHandler = debounce(handleDebouncingScroll, 500);

window.addEventListener("scroll", () => {
  throttledScrollHandler();
  debounceScrollHandler();
});