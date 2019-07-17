const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');
const fullScreen = document.querySelector('.full-screen');


// Build out functions

const togglePlay = () => {
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

const handleProgress = () => {
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percentage}%`;
}

const scrub = (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function openFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) { /* Firefox */
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { /* IE/Edge */
    video.msRequestFullscreen();
  }
}

// hook up the event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
[...skipButtons].map(button => button.addEventListener('click', skip));
[...ranges].map(range => range.addEventListener('change', volumeAndPlaybackRate));
[...ranges].map(range => range.addEventListener('mousemove', volumeAndPlaybackRate));
video.addEventListener('timeupdate', handleProgress);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
fullScreen.addEventListener('click', openFullscreen);