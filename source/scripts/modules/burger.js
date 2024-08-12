const burgerButtonOpen = document.getElementById('menu-button');
const burgerButtonClose = document.getElementById('close-button');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

export function toggleMenu() {
  burgerButtonOpen.addEventListener('click', () => {
    menu.classList.toggle('active');
    overlay.style.display = 'flex';
  })
  burgerButtonClose.addEventListener('click', () => {
    menu.classList.toggle('active');
    overlay.style.display = 'none';
  })
}
