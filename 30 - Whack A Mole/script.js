const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const timer = document.querySelector('.time'); // Make sure you have an element with class "time"

let lastHole;
let timeUp = false;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    console.log('Ah nah thats the same one bud');
    return randomHole(holes);
  }
  lastHole = hole;
  // lastHole = hole === lastHole ? randomHole(holes) : hole;
  return hole;
}

function showMole() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) {
      showMole();
    }
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  showMole();
  let timeLeft = 10000; // 10 seconds
  const startTime = Date.now();

  // Update the timer on the page
  const timer = document.querySelector('.time'); // Make sure you have an element with class "time"

  // Update the countdown every second
  const countdownInterval = setInterval(() => {
    const timePassed = Date.now() - startTime;
    const timeRemaining = Math.max(timeLeft - timePassed, 0);
    const secondsLeft = Math.ceil(timeRemaining / 1000);
    timer.textContent = secondsLeft;

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval); // Stop the interval when time is up
      timeUp = true;
      timer.textContent = '0'; // Set timer text to 0 when game ends
    }
  }, 1000);
}

function bonk(e) {
  if (!e.isTrusted) return;
  scoreBoard.textContent++;
  this.classList.remove('up');
}

moles.forEach((mole) => mole.addEventListener('click', bonk));
