const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');


function handleEnter() {
    console.log('enter');
    this.classList.add('trigger-enter');
    setTimeout(() => {
        if (this.classList.contains('trigger-enter')) {
            this.classList.add('trigger-enter-active')
        }
    }, 150);

    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropCoords.height,
        width: dropCoords.width,
        top: dropCoords.top - navCoords.top,
        left: dropCoords.left - navCoords.left,
    }

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);

}

function handleLeave() {
    console.log('leave');
    this.classList.remove('trigger-enter', 'tringger-enter-active');
    background.classList.remove('open');

}

[...triggers].map(item => item.addEventListener('mouseenter', handleEnter));
[...triggers].map(item => item.addEventListener('mouseleave', handleLeave));