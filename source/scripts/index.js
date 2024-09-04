import { toggleMenu } from './modules/burger.js';
import { initDropdown } from './modules/dropdown.js';
import { renderRobotsCards } from './modules/swiper-card.js';
import { swiperSimilarInit } from './modules/swiper.js';
import { swiperThumbs } from './modules/swiperThumbs.js';
import { validation } from './modules/validation.js';
import { playVideo } from './modules/videoplayer/video.js';

toggleMenu();
initDropdown();
swiperThumbs();
validation();
playVideo()();

const container = document.querySelector('.robots-card');
if (container !== null) {
  renderRobotsCards(container);
}

const swiperRobots = document.querySelector('.swiper-robots');
if (swiperRobots !== null) {
  renderRobotsCards(swiperRobots, 'robots');
  swiperSimilarInit(swiperRobots, 4);
}

const swiperHammers = document.querySelector('.swiper-hammers');
if (swiperHammers !== null) {
  renderRobotsCards(swiperHammers, 'hammers');
  swiperSimilarInit(swiperHammers, 4);
}
