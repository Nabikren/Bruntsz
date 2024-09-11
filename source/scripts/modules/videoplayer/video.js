const playButton = document.querySelector('.video-block__play-button');
const zoomButton = document.querySelector('.video-block__zoom-button');
const soundButton = document.querySelector('.video-block__sound-button');
const video = document.querySelector('.video-block__video');
const videoWrapper = document.querySelector('.video-block__video-wrapper');

let sources = null;

if (video !== null) {
  sources = video.querySelectorAll('source');
}

export function playVideo() {
  const count = 6;
  let currentIndex = 1;
  const zoom = 'zoom';
  const sound = 'sound';

  if (video !== null && playButton !== null) {
    let isPlaying = false;
    let isZoomed = false;
    let isSound = false;

    return function () {
      soundButton.addEventListener('click', () => {
        video.muted = !video.muted;
        isSound = !isSound;
        soundButton.classList.remove(sound)

        if (isSound) {
          soundButton.classList.add(sound)
        } else {
          soundButton.classList.remove(sound)
        }

      })

      zoomButton.addEventListener('click', () => {

        isZoomed = !isZoomed;

        if (isZoomed) {
          video.classList.add(zoom);
          videoWrapper.classList.add(zoom);
          zoomButton.classList.add(zoom);
          document.querySelector('body').style.overflow = 'hidden';
        } else {
          video.classList.remove(zoom);
          videoWrapper.classList.remove(zoom);
          zoomButton.classList.remove(zoom);
          document.querySelector('body').style.overflow = 'auto';
        }

      })


      playButton.addEventListener('click', () => {

        if (isPlaying) {
          video.play();
        } else {
          isPlaying = false;
          video.pause();
          playButton.classList.remove('pause');
        }

        if (isPlaying) {
          playButton.classList.remove('pause')
          video.pause();
        } else {
          video.play(); playButton.classList.add('pause')
        }
        isPlaying = !isPlaying;
      })
    }
  } else {
    return () => { return };
  }
}
