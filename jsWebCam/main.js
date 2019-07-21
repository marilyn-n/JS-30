const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


const getVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch(err => console.error('OHHH NOOO', err));
}

getVideo();


const painToCanvas = () => {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
    }, 16);
}

const takePhoto = () => {
    // play sound
    snap.currentTime = 0;
    snap.play();

    // take data out of the canvas
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'photo');
    link.innerHTML = `<img src="${data}" alt="pic">`;
    strip.insertBefore(link, strip.firstChild);
}

video.addEventListener('canplay', painToCanvas);