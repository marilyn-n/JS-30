const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // 100px

const shadow = (e) => {
    const {
        offsetWidth: width,
        offsetHeght: height
    } = hero;

    let {
        offsetX: x,
        offsetY: y
    } = e; // get cursor position

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 red `
}

hero.addEventListener('mousemove', shadow);