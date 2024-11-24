const playOn = document.querySelector('#playerVolumeOff');
const btnPlay = document.querySelector('.bii-player.hoangtrinh');
const audio = document.querySelector('audio');
const iconPlayOff = document.querySelector('.playerVolumeOff.hoangtrinh');
const iconPlayOn = document.querySelector('.playerVolumeOn.hoangtrinh');

// actions
const playAction = document.querySelector('.action-play-hoangtrinh');
const video = document.querySelector('#video-hoangtrinh');

if (playAction && video) {
    playAction.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playAction.style.display = 'none';
        } else {
            video.pause();
            playAction.style.display = 'flex';
        }
    });

    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playAction.style.display = 'none';
        } else {
            video.pause();
            playAction.style.display = 'flex';
        }
    });

    video.addEventListener('ended', () => {
        playAction.style.display = 'flex';
    });
}

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
