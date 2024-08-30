import { toggleMenu } from './modules/burger.js';
import { initDropdown } from './modules/dropdown.js';
import { renderRobotsCards } from './modules/swiper-card.js';
import { swiperSimilarInit } from './modules/swiper.js';
// import { validation } from './modules/validation.js';
// import { replaceAllPaths } from './functions/replace-all-paths.js';
import Swiper from "swiper";
import { Navigation, Thumbs } from 'swiper/modules';
import "./../styles/vendor/thumbs-swiper.css";

toggleMenu();
initDropdown();
// swiperSimilarInit('.robots', 4);
swiperSimilarInit('.swiper-robots', 4);
// replaceAllPaths();
// validation();

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  modules: [Navigation, Thumbs],
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});

const container = document.querySelector('.robots-card');
if (container !== null) {
  renderRobotsCards(container);
}
