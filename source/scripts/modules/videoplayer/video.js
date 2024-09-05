const playButton = document.querySelector('.video-block__play-button');
const zoomButton = document.querySelector('.video-block__zoom-button');
const video = document.querySelector('.video-block__video');
const videoWrapper = document.querySelector('.video-block__video-wrapper');
const sources = video.querySelectorAll('source');



export function playVideo() {
  const count = 7;
  let currentIndex = 0;
  const zoom = 'zoom';

  if (video !== null && playButton !== null) {
    let isPlaying = false;
    let isZoomed = false;

    return function () {
      zoomButton.addEventListener('click', () => {

        isZoomed = !isZoomed;

        if (isZoomed) {
          video.classList.add(zoom);
          videoWrapper.classList.add(zoom);
          zoomButton.classList.add(zoom)
        } else {
          video.classList.remove(zoom);
          videoWrapper.classList.remove(zoom);
          zoomButton.classList.remove(zoom)
        }

      })

      playButton.addEventListener('click', () => {
        const endedHandler = () => {
          currentIndex++;
          if (currentIndex < count) {
            changeVideoSource(`/videos/video-path${currentIndex}`, ['.webm', '.mp4']);
            video.load();
            if (isPlaying) {
              video.play();
            }
          } else {
            currentIndex = 0;
            changeVideoSource(`/videos/video-path${1}`, ['.webm', '.mp4']);
            video.pause();
            playButton.classList.remove('pause');
            video.removeEventListener('ended', endedHandler);
            isPlaying = false;
          }
        };
        video.addEventListener('ended', endedHandler);

        function changeVideoSource(newSource, ext) {
          sources.forEach((source, index) => {
            source.setAttribute('src', newSource + ext[index]);
          });
          video.load();
        }

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
