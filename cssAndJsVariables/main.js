const inputs = document.querySelectorAll('input');
const buttons = document.querySelectorAll('.opacity-level');
const brightBtns = document.querySelectorAll('.bright-level');

const contrast = document.querySelector('#contrast');
const saturate = document.querySelector('#saturate');
const grayscale = document.querySelector('#grayscale');

[...buttons].map(button => button.addEventListener('click', updateOpacity));
[...brightBtns].map(button => button.addEventListener('click', updateBrightness));

function updateOpacity() {
  const img = document.querySelector('img');
  img.style.opacity = this.value;
}

function updateBrightness() {
  const prefix = this.dataset.sizing || '';
  const img = document.querySelector('img');
  let brightnessLevel = this.value
  img.style.filter = `brightness(${brightnessLevel}${prefix})`;
}

function handleUpdate() {
  const prefix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + prefix );
  }

[...inputs].map((item) => item.addEventListener('change', handleUpdate));
[...inputs].map((item) => item.addEventListener('mousemove', handleUpdate));



