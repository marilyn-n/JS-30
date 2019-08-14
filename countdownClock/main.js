let conuntdown;
const timerDisplay = document.querySelector('.display__time-left');

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    conuntdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if its done
        if (secondsLeft < 0) {
            clearInterval(conuntdown);
            return;
        }
        // display to the dom
        displayTimeLeft(secondsLeft);
    }, 1000);

}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainSeconds = seconds % 60;

    timerDisplay.textContent = `${minutes}:${remainSeconds < 10 ? '0': ''}${remainSeconds}`
}