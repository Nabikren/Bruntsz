import { toggleMenu } from './modules/burger.js';
import { initDropdown } from './modules/dropdown.js';
import { renderRobotsCards } from './modules/swiper-card.js';
import { swiperSimilarInit } from './modules/swiper.js';
// import { validation } from './modules/validation.js';
import Swiper from "swiper";
import { Navigation, Thumbs } from 'swiper/modules';

toggleMenu();
initDropdown();
// swiperSimilarInit('.robots', 4);
swiperSimilarInit('.swiper-robots', 4);
// validation();

var galleryThumbs = new Swiper('.gallery-thumbs', {
  direction: 'horizontal',
  slidesPerView: 3,
  freeMode: true,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  breakpoints: {
    768: {
      direction: 'vertical',
    }
  }
});

var galleryMain = new Swiper('.gallery-main', {
  modules: [Navigation, Thumbs],
  // spaceBetween: 10,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  preventInteractionOnTransition: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  thumbs: {
    swiper: galleryThumbs
  }
});

galleryMain.on('slideChangeTransitionStart', function () {
  galleryThumbs.slideTo(galleryMain.activeIndex);
});

galleryThumbs.on('transitionStart', function () {
  galleryMain.slideTo(galleryThumbs.activeIndex);
});

const container = document.querySelector('.robots-card');
if (container !== null) {
  renderRobotsCards(container);
}
