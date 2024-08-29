import { toggleMenu } from './modules/burger.js';
import { initDropdown } from './modules/dropdown.js';
import { renderRobotsCards } from './modules/robots-card.js';

toggleMenu();
initDropdown();

//запускаем robots-card.js чтобы аоявились карточки роботов

const container = document.querySelector('.robots-card');
if (container !== null) {
  renderRobotsCards(container);
}
