const playButton = document.querySelector('.video-block__play-button');
const video = document.querySelector('.video-block__video');

export function playVideo() {
  if (video !== null && playButton !== null) {
    let isPlaying = false;

    return function () {
      playButton.addEventListener('click', () => {
        isPlaying ? playButton.classList.remove('pause') : playButton.classList.add('pause')

        if (isPlaying) {
          video.pause();
        } else {
          video.play();
        }
        isPlaying = !isPlaying;
      })
    }
  }
}
