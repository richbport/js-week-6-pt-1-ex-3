


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