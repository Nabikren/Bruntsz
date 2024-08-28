import { replacePath } from './../functions/replace-path.js'

export const robots = [
  {
    id: 170,
    name: 'B-D 170',
    image: replacePath('images/catalog/robot_card_170_desktop@2x.webp'),
    property: 'Вес: ',
    propertyValue: '1620',
    propertyUnit: 'кг',
    link: replacePath('robots/B-D170.html')
  },
  {
    id: 200,
    name: 'B-D 200',
    image: replacePath('images/catalog/robot_card_200_desktop@2x.webp'),
    property: 'Вес: ',
    propertyValue: '2450',
    propertyUnit: 'кг',
    link: replacePath('robots/B-D200.html')
  },
  {
    id: 300,
    name: 'B-D 300',
    image: replacePath('images/catalog/robot_card_300_desktop@2x.webp'),
    property: 'Вес: ',
    propertyValue: '3950',
    propertyUnit: 'кг',
    link: replacePath('robots/B-D300.html')
  },
  {
    id: 500,
    name: 'B-D 500',
    image: replacePath('images/catalog/robot_card_500_desktop@2x.webp'),
    property: 'Вес: ',
    propertyValue: '5900',
    propertyUnit: 'кг',
    link: replacePath('robots/B-D500.html')
  }
];
