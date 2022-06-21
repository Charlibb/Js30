


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
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

// create handleRangeUpdate function for volume control


// Hook up the event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);


// change toggle icon when video is playing
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
