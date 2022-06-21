


// get elements
const player = document.querySelector('.player'); //main div
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build out functions
function togglePlay() {
  /* if (video.paused) {
    video.play();
  } else    {   
    video.pause();
    }
 */

  const method = video.paused ? 'play' : 'pause';
  video[method]();
 
  
}

// creating function to update button when played
function updateButton() {
  const icon = this.paused ? '►' : '❚❚';
  toggle.textContent = icon;
}

// create a function to change volume when slider is moved
function handleRangeUpdate() {
  video[this.name] = this.value;
}
 
// create a function to go back 10 seconds when button is clicked
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// create a function to fullscreen when  double clicked
function fullScreen() {
  video.webkitRequestFullScreen();
}
 
// create a function to play pause video when hitting spacebar
function handleKeydown(e) {
  if (e.keyCode === 32) {
    togglePlay();
  }
}

// create a function to speed up or slow down video when sliding the slider
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}


// Hook up the event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
skipButtons.forEach(button => button.addEventListener('click', skip));

// Hook up even listener for double click on screen
player.addEventListener('dblclick', fullScreen);

// hook up eventlistener for space bar
window.addEventListener('keydown', handleKeydown);

// hook up eventListener for video speed
video.addEventListener('timeupdate', handleProgress);



// change toggle icon when video is playing
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
