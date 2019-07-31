const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');


function handleEnter() {
    console.log('enter');
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.add('trigger-enter-active'), 150);
}

function handleLeave() {
    console.log('leave');
    this.classList.remove('trigger-enter');

}

[...triggers].map(item => item.addEventListener('mouseenter', handleEnter));
[...triggers].map(item => item.addEventListener('mouseleave', handleLeave));