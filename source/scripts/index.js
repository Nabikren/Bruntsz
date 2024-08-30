import { toggleMenu } from './modules/burger.js';
import { initDropdown } from './modules/dropdown.js';
import { renderRobotsCards } from './modules/swiper-card.js';
import { swiperSimilarInit } from './modules/swiper.js';
// import { validation } from './modules/validation.js';
import { replaceAllPaths } from './functions/replace-all-paths.js';


toggleMenu();
initDropdown();
// swiperSimilarInit('.robots', 4);
replaceAllPaths();
// validation();

const container = document.querySelector('.robots-card');
if (container !== null) {
  renderRobotsCards(container);
}
