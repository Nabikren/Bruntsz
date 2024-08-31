import { toggleMenu } from './modules/burger.js';
import { initDropdown } from './modules/dropdown.js';
import { renderRobotsCards } from './modules/swiper-card.js';
import { swiperSimilarInit } from './modules/swiper.js';
// import { validation } from './modules/validation.js';

toggleMenu();
initDropdown();
// swiperSimilarInit('.robots', 4);
swiperSimilarInit('.swiper-robots', 4);
// validation();

const container = document.querySelector('.robots-card');
if (container !== null) {
  renderRobotsCards(container);
}
