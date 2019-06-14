const inputs = document.querySelectorAll('input');

function handleUpdate() {
  
  const pixels = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + pixels );

}

[...inputs].map((item) => item.addEventListener('mousemove', handleUpdate));



