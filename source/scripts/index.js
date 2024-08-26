import { toggleMenu } from './modules/burger.js';


toggleMenu();

// document.addEventListener('DOMContentLoaded', function() {
//   const faqItems = document.querySelectorAll('.faq__item');

//   faqItems.forEach(item => {
//     const questionWrapper = item.querySelector('.faq__question-wrapper');
//     const button = item.querySelector('.faq__button');
//     const answer = item.querySelector('.faq__answer-wrapper');

//     button.addEventListener('click', function() {
//       const isOpened = button.classList.contains('faq__button--opened');

//       // Закрыть все ответы
//       faqItems.forEach(i => {
//         i.querySelector('.faq__button').classList.remove('faq__button--opened');
//         i.querySelector('.faq__answer-wrapper').style.display = 'none';
//       });

//       // Открыть текущий ответ, если он не был открыт ранее
//       if (!isOpened) {
//         button.classList.add('faq__button--opened');
//         answer.style.display = 'block';
//       }
//     });
//   });
// });

const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
    const questionWrapper = item.querySelector('.faq__question-wrapper');
    const answerWrapper = item.querySelector('.faq__answer-wrapper');

    // Функция для переключения состояния
  const toggleFaqItem = (evt) => {
        evt.preventDefault();
        const isOpen = answerWrapper.style.display === 'block';
        if (isOpen) {
            answerWrapper.style.display = 'none';
        } else {
            answerWrapper.style.display = 'block';
        }
  };

    // Добавляем обработчик на обертку вопроса
    questionWrapper.addEventListener('click', toggleFaqItem);
});


//запускаем robots-card.js чтобы аоявились карточки роботов
import { renderRobotsCards } from './modules/robots-card.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.robots-card');
  renderRobotsCards(container);
});



// Бургер-меню

// const navMain = document.querySelector('.main-nav');
// const navToggle = document.querySelector('.main-nav__toggle');

// navMain.classList.remove('main-nav--nojs');

// function toggleMenu() {
//   if (navMain.classList.contains('main-nav--close')) {
//     navMain.classList.remove('main-nav--close');
//     navMain.classList.add('main-nav--open');
//   } else {
//     navMain.classList.add('main-nav--close');
//     navMain.classList.remove('main-nav--open');
//   }
// }

// navToggle.addEventListener('click', toggleMenu);


// // Слайдер с котом

// const slider = document.querySelector('.comparison__images');
// const before = document.querySelector('.comparison__image-wrapper--before');
// const change = document.querySelector('.comparison__change');
// const body = document.body;

// let isActive = false;

// // при отпускании мышки
// change.addEventListener('mousedown', () => {
//   isActive = true;
// });

// // при нажатии мышкой и удержании
// body.addEventListener('mouseup', () => {
//   isActive = false;
// });

// // мышка ушла за пределы
// body.addEventListener('mouseleave', () => {
//   isActive = false;
// });

// // x - позиция по оси x, находим значение от 0 до максимума - не выходя за пределы
// const beforeAfterSlider = (x) => {
//   const shift = Math.max(0, Math.min(x, slider.offsetWidth));
//   before.style.width = `${shift}px`;
//   change.style.left = `${shift}px`;
// };

// // функция останавливает событие после скролла
// const pauseEvents = (e) => {
//   e.stopPropagation();
//   return false;
// };

// //при движении мышки
// body.addEventListener('mousemove', (e) => {
//   if (!isActive) {
//     return; //если mousemove false - выходим из функции
//   }

//   let x = e.pageX; // узнаем значение координаты мышки при вводе
//   x -= slider.getBoundingClientRect().left;
//   beforeAfterSlider(x);
//   pauseEvents(e);
// });

// // для мобильных устройств
// change.addEventListener('touchstart', () => {
//   isActive = true;
// });

// body.addEventListener('touchend', () => {
//   isActive = false;
// });

// body.addEventListener('touchcancel', () => {
//   isActive = false;
// });

// body.addEventListener('touchmove', (e) => {
//   if (!isActive) {
//     return;
//   }

//   let x;
//   let i;

//   // changedTouches - список точек касания (по которым прошел палец во время touch)
//   for (i = 0; i < e.changedTouches.length; i++) {
//     x = e.changedTouches[i].pageX;
//   }

//   x -= slider.getBoundingClientRect().left;

//   beforeAfterSlider(x);
//   pauseEvents(e);
// });
