const playOn = document.querySelector('#playerVolumeOff');
const btnPlay = document.querySelector('.bii-player.hoangtrinh');
const audio = document.querySelector('audio');
const iconPlayOff = document.querySelector('.playerVolumeOff.hoangtrinh');
const iconPlayOn = document.querySelector('.playerVolumeOn.hoangtrinh');

if (iconPlayOn) {
    iconPlayOn.style.display = 'none';
}

if (btnPlay) {
    btnPlay.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            if (iconPlayOff && iconPlayOn) {
                iconPlayOff.style.display = 'none';
                iconPlayOn.style.display = 'block';
            }
        } else {
            audio.pause();
            if (iconPlayOff && iconPlayOn) {
                iconPlayOn.style.display = 'none';
                iconPlayOff.style.display = 'block';
            }
        }
    });
}
