let alarmTime = 3;
let timerId;
let time = 0;
let audio;
let ringtoneSelect = document.getElementById("ringtone-select");
let alarmTimeInput = document.getElementById("alarm-time");

/* 
function changeAlarmTime() {
  let inputValue = alarmTimeInput.value;
    alarmTime = inputValue;
    time = 0;
  }

  changeAlarmTime() */

  function startStop() {
    if (!timerId) {
      timerId = setInterval(() => {
        time++;
        document.getElementById("time").innerHTML = formatTime(time);
        if (time === alarmTime) {
        audio = new Audio(ringtoneSelect.value);
        audio.play();
      }
    }, 1000);
    document.getElementById("start-stop").innerHTML = "Stop";
  } else {
    clearInterval(timerId);
    timerId = null;
    document.getElementById("start-stop").innerHTML = "Start";
  }
}

function reset() {
  clearInterval(timerId);
  timerId = null;
  if (audio) {
    audio.pause();
  }
  time = 0;
  document.getElementById("time").innerHTML = "00:00:00";
  document.getElementById("start-stop").innerHTML = "Start";
}

function pauseAudio() {
  if (audio) {
    audio.pause();
  }
}

function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;
  return `${formatUnit(hours)}:${formatUnit(minutes)}:${formatUnit(seconds)}`;
}

function formatUnit(unit) {
  return unit < 10 ? `0${unit}` : `${unit}`;
}
