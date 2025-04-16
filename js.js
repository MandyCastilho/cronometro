let timer;
let seconds = 0;
let running = false;

function formatTime(sec) {
    let hrs = Math.floor(sec / 3600).toString().padStart(2, '0');
    let mins = Math.floor((sec % 3600) / 60).toString().padStart(2, '0');
    let secs = (sec % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
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

function resumeTimer() {
    if (!running) startTimer();
}

function resetTimer() {
    running = false;
    clearInterval(timer);
    seconds = 0;
    updateDisplay();
}

function rewindTimer() {
    seconds = Math.max(0, seconds - 10);
    updateDisplay();
}

function forwardTimer() {
    seconds += 10;
    updateDisplay();
}

function saveTime() {
    let saved = JSON.parse(localStorage.getItem('savedTimes')) || [];
    saved.push(formatTime(seconds));
    localStorage.setItem('savedTimes', JSON.stringify(saved));
    showSavedTimes();
}

function showSavedTimes() {
    const list = document.getElementById('saved-times');
    list.innerHTML = ''; // Limpa antes de mostrar
    let saved = JSON.parse(localStorage.getItem('savedTimes')) || [];

    saved.forEach((time, index) => {
        let li = document.createElement('li');
        li.textContent = `${index + 1} - ${time}`;
        list.appendChild(li);
    });
}

function clearSavedTimes() {
    localStorage.removeItem('savedTimes');
    document.getElementById('saved-times').innerHTML = '';
}

