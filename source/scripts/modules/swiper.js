import Swiper from "swiper";
import { Navigation, Autoplay } from 'swiper/modules';

export function swiperSimilarInit(el, countSlides) {

  const swiper = new Swiper(el, {
    modules: [Navigation, Autoplay],
    spaceBetween: 50,
    slidesPerView: countSlides,
    speed: 500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: countSlides == 4 ? countSlides - 3 : countSlides - 2,
      },
      768: {
        spaceBetween: 20,
        slidesPerView: countSlides == 4 ? countSlides - 2 : countSlides - 1,
      },
      1024: {
        spaceBetween: 30,
        slidesPerView: countSlides == 4 ? countSlides : countSlides,
      },
    }
  });
}
