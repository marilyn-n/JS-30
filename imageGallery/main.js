const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}

[...panels].map(item => item.addEventListener('click', toggleOpen));
[...panels].map(item => item.addEventListener('transitionend', toggleActive));
