const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');


function handleEnter() {
    console.log('enter');
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.add('trigger-enter-active'), 150);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropCoords.height,
        width: dropCoords.width,
        top: navCoords.top,
        left: navCoords.left,
    }

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    // background.style.translate(`transform(${coords.top}px, ${coords.left}px)`);

}

function handleLeave() {
    console.log('leave');
    this.classList.remove('trigger-enter', 'tringger-enter-active');
    background.classList.remove('open');

}

[...triggers].map(item => item.addEventListener('mouseenter', handleEnter));
[...triggers].map(item => item.addEventListener('mouseleave', handleLeave));