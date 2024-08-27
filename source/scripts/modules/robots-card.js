// Массив данных о роботах
const robots = [
  {
    id: 170,
    name: 'B-D 170',
    image: './images/catalog/robot_card_170_desktop@2x.webp',
    property: 'Вес: ',
    propertyValue: '1620',
    propertyUnit: 'кг',
    link: './robots/B-D170.html'
  },
  {
    id: 200,
    name: 'B-D 200',
    image: './images/catalog/robot_card_200_desktop@2x.webp',
    property: 'Вес: ',
    propertyValue: '2450',
    propertyUnit: 'кг',
    link: './robots/B-D200.html'
  },
  {
    id: 300,
    name: 'B-D 300',
    image: './images/catalog/robot_card_300_desktop@2x.webp',
    property: 'Вес: ',
    propertyValue: '3950',
    propertyUnit: 'кг',
    link: './robots/B-D300.html'
  },
  {
    id: 500,
    name: 'B-D 500',
    image: './images/catalog/robot_card_500_desktop@2x.webp',
    property: 'Вес: ',
    propertyValue: '5900',
    propertyUnit: 'кг',
    link: './robots/B-D500.html'
  }
];

// Функция для создания карточки товара
function createRobotsCard(robot) {
  const card = document.createElement('div');
  card.classList.add('robots-card__wrapper');

  const link = document.createElement('a');
  link.href = robot.link;
  link.classList.add('robots-card__link');

  const content = document.createElement('div');
  content.classList.add('robots-card__content');

  const title = document.createElement('h3');
  title.classList.add('robots-card__title');
  title.textContent = robot.name;

  const property = document.createElement('p');
  property.classList.add('robots-card__property');

  // Создание частей текста
  const propertyText = document.createElement('span');
  propertyText.textContent = robot.property;

  const propertyValue = document.createElement('span');
  propertyValue.classList.add('blue-text');
  propertyValue.textContent = robot.propertyValue;

  const propertyUnit = document.createElement('span');
  propertyUnit.textContent = robot.propertyUnit;

  // Сборка элемента property
  property.appendChild(propertyText);
  property.appendChild(propertyValue);
  property.appendChild(propertyUnit);

  content.appendChild(title);
  content.appendChild(property);

  const image = document.createElement('img');
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
    const card = createRobotsCard(robot);
    container.appendChild(card);
  });
}
