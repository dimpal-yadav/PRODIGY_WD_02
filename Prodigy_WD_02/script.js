let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let recordLapButton = document.getElementById('recordLap');
let display = document.getElementById('display');
let lapTimesList = document.getElementById('lapTimesList');

let timer;
let isRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

function formatTime() {
    let hr = hours < 10 ? '0' + hours : hours;
    let min = minutes < 10 ? '0' + minutes : minutes;
    let sec = seconds < 10 ? '0' + seconds : seconds;
    return `${hr}:${min}:${sec}`;
}

function startStopwatch() {
    if (!isRunning) {
        timer = setInterval(function () {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
            display.textContent = formatTime();
        }, 1000); // Interval of 1 second
        isRunning = true;
        startButton.textContent = 'Pause';
    } else {
        clearInterval(timer);
        isRunning = false;
        startButton.textContent = 'Resume';
    }
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    display.textContent = formatTime();
    startButton.textContent = 'Start';
}

function recordLap() {
    if (isRunning) {
        let lapTime = formatTime();
        let lapItem = document.createElement('li');
        lapItem.textContent = `Lap: ${lapTime}`;
        lapTimesList.appendChild(lapItem);
    }
}

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', resetStopwatch);
resetButton.addEventListener('click', resetStopwatch);
recordLapButton.addEventListener('click', recordLap);
