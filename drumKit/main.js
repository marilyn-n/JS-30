window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  audio.currentTime = 0;
  if (!audio) return;
  audio.play();

  key.classList.add('playing');
  
  
});