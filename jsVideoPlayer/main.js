const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progrss = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');


// Build out functions

function togglePlay() {
  video.paused ? video.play() : video.pause() ;
}

function updateButton() {
  const icon = this.paused ? ' ► ' : ' ❚ ❚ ';
  toggle.textContent = icon;
}

function skip() {
 video.currentTime += parseFloat(this.dataset.skip);
}

function volumeAndPlaybackRate() {
  video[this.name] = this.value;
}

function progress() {
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percentage}%`;
}

// hook up the event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
[...skipButtons].map(button => button.addEventListener('click', skip));
[...ranges].map(range => range.addEventListener('change', volumeAndPlaybackRate));
[...ranges].map(range => range.addEventListener('mousemove', volumeAndPlaybackRate));
video.addEventListener('timeupdate', progress);