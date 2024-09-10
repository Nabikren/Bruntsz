import { checkInput } from "./validation/functions/checkInput.js";
import { formElements } from './validation/constants.js';

const { userNameInput, userPhoneInput, userEmailInput, userCompanyInput, form, hiddenInput, buttonSubmit } = formElements;

export function validation() {
  checkInput(userNameInput, 'username');
  checkInput(userPhoneInput, 'userphone');
  checkInput(userEmailInput, 'useremail');
  checkInput(userCompanyInput, 'usercompany');

  function checkWithSubmit(form) {
    const condition =
      userNameInput.nextElementSibling.classList.contains('valid-class') &&
      userPhoneInput.nextElementSibling.classList.contains('valid-class') &&
      userEmailInput.nextElementSibling.classList.contains('valid-class') &&
      userCompanyInput.nextElementSibling.classList.contains('valid-class') &&
      hiddenInput.value.length === 0;

    if (condition) {
      buttonSubmit.classList.add('submitted');
      buttonSubmit.textContent = 'Отправлено';

      const formData = new FormData(form); // Собираем данные формы

      fetch('/php/send_email.php', {
        method: 'POST',
        body: formData
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Ошибка сети');
          }
          return response.text(); // Получаем текст ответа
        })
        .then(data => {
          return data; // Выводим ответ на страницу
        })
        .catch(error => {
          console.error('Ошибка:', error);
          buttonSubmit.classList.remove('submitted');
          buttonSubmit.textContent = 'Заказать';
        });
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkWithSubmit(form, buttonSubmit);
  })
}
