let timer;
let seconds = 0;
let running = false;

function formatTime(sec) {
    let hrs = Math.floor(sec / 3600).toString().padStart(2, '0');
    let mins = Math.floor((sec % 3600) / 60).toString().padStart(2, '0');
    let secs = (sec % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;  // Correção: agora usa crases (`) corretamente
}

function updateDisplay() {
    document.getElementById('timer').innerText = formatTime(seconds);
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    running = false;
    clearInterval(timer);
}

function resetTimer() {
    running = false;
    clearInterval(timer);
    seconds = 0;
    updateDisplay();
}
