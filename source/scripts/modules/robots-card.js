import { robots } from './../data/robots.js'

let card = null;
let link = null;
let content = null;
let title = null;
let property = null;
let propertyText = null;
let propertyValue = null;
let propertyUnit = null;
let image = null;

function createElements() {
  card = document.createElement('div');
  link = document.createElement('a');
  content = document.createElement('div');
  title = document.createElement('h3');
  property = document.createElement('p');
  propertyText = document.createElement('span');
  propertyValue = document.createElement('span');
  propertyUnit = document.createElement('span');
  image = document.createElement('img');
}


// Функция для создания карточки товара
function createRobotsCard(robot, container) {
  createElements();

  if (container.closest('[class*="swiper"]')) {
    card.classList.add('robots-card__wrapper');
    card.classList.add('swiper-slide');
  } else {
    card.classList.add('robots-card__wrapper');
  }
  link.href = robot.link;
  link.classList.add('robots-card__link');
  content.classList.add('robots-card__content');
  title.classList.add('robots-card__title');
  title.textContent = robot.name;
  property.classList.add('robots-card__property');

  // Создание частей текста

  propertyText.textContent = robot.property;
  propertyValue.classList.add('blue-text');
  propertyValue.textContent = robot.propertyValue;
  propertyUnit.textContent = robot.propertyUnit;

  // Сборка элемента property
  property.appendChild(propertyText);
  property.appendChild(propertyValue);
  property.appendChild(propertyUnit);

  content.appendChild(title);
  content.appendChild(property);

  image.src = robot.image;
  image.alt = robot.name;
  image.classList.add('robots-card__image');

  link.appendChild(content);
  link.appendChild(image);
  card.appendChild(link);

  return card;
}

// Функция для рендеринга карточек на страницу
export function renderRobotsCards(container) {

  robots.forEach(robot => {
    const card = createRobotsCard(robot, container);

    if (container.closest('[class*="swiper"]')) {
      const wrapper = container.querySelector('.swiper-wrapper');
      wrapper.appendChild(card);
    } else {
      container.appendChild(card);
    }
  });
}

