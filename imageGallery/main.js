const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  console.log(this);
  this.classList.toggle('open');
}

[...panels].map(item => item.addEventListener('click', toggleOpen))
