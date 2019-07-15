const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progrss = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('player__slider');


// Build out functions

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// hook up the event listeners

video.addEventListener('click', togglePlay);