import Swiper from "swiper";
import { Navigation, Thumbs } from 'swiper/modules';

export function swiperThumbs() {
  const galleryThumbsElement = document.querySelector('.gallery-thumbs');
  if (galleryThumbsElement === null) return;

  var galleryThumbs = new Swiper(galleryThumbsElement, {
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
}
