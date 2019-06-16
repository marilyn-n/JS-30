const inputs = document.querySelectorAll('input');
const buttons = document.querySelectorAll('button');

console.log(buttons);

[...buttons].map(button => button.addEventListener('click', updateOpacity));

function updateOpacity() {
  const img = document.querySelector('img');
  img.style.opacity = this.value;
}


function handleUpdate() {
  
  const prefix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + prefix );  

}

[...inputs].map((item) => item.addEventListener('change', handleUpdate));
[...inputs].map((item) => item.addEventListener('mousemove', handleUpdate));



