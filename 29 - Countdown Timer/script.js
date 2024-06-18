let countdown;
let endTimeTimestamp;

const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const toggleTimeFormatBtn = document.getElementById('toggleTimeFormat');
let is24HourFormat = false;
toggleTimeFormatBtn.style.display = 'none';

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
  toggleTimeFormatBtn.style.display = 'block';

  endTimeTimestamp = then;

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if (secondsLeft < 0) {
      clearInterval(countdown);
      document.title = 'TIME´S UP!';
      endTime.innerHTML = 'Time is up!';

      return;
    }

    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? '0' : ''
  }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

toggleTimeFormatBtn.addEventListener('click', () => {
  is24HourFormat = !is24HourFormat;
  displayEndTime(endTimeTimestamp);
  // Update the displayed time

  if (is24HourFormat) {
    toggleTimeFormatBtn.textContent = 'Use 12-Hour Format';
  } else {
    toggleTimeFormatBtn.textContent = 'Use 24-Hour Format';
  }
});

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  let adjustedHour = hour;
  if (!is24HourFormat) {
    adjustedHour = hour > 12 ? hour - 12 : hour;
  }

  const minutes = end.getMinutes();
  const period = hour >= 12 ? 'PM' : 'AM';

  endTime.textContent = `Be Back At ${adjustedHour}:${
    minutes < 10 ? '0' : ''
  }${minutes} ${is24HourFormat ? '' : period}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach((button) => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
});
