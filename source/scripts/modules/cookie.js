import { formElements } from './validation/constants.js';

function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Функция для включения формы
function enableForm(){
  formElements.buttonSubmit.disabled = false;
}

// Получение куки
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

// Проверка наличия куки и отображение уведомления
export function checkCookie() {
  const cookieConsent = getCookie('cookie_consent');
  if (!cookieConsent) {
    // Показываем окно уведомления
    document.querySelector('.cookie-popup').style.display = 'inline-block';
  }
}

// Скрытие окна уведомления и установка куки
export function acceptCookies() {
  setCookie('cookie_consent', 'accepted', 30); // Устанавливаем куки на 30 дней
  document.querySelector('.cookie-popup').style.display = 'none';
  enableForm();
}
