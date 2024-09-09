import { checkInput } from "./validation/functions/checkInput.js";
import { formElements } from './validation/constants.js';

const { userNameInput, userPhoneInput, userEmailInput, userCompanyInput, form, hiddenInput, buttonSubmit } = formElements;

export function validation() {
  checkInput(userNameInput, 'username');
  checkInput(userPhoneInput, 'userphone');
  checkInput(userEmailInput, 'useremail');
  checkInput(userCompanyInput, 'usercompany');

  function checkWithSubmit(form) {
    const condition = () => {
      userNameInput.nextElementSibling.classList.contains('valid-class') &&
        userPhoneInput.nextElementSibling.classList.contains('valid-class') &&
        userEmailInput.nextElementSibling.classList.contains('valid-class') &&
        userCompanyInput.nextElementSibling.classList.contains('valid-class') &&
        hiddenInput.value.length <= 0
    }

    if (condition()) {
      form.submit();
      buttonSubmit.setAttribute('disabled', true)
      buttonSubmit.textContent = 'Отправлено';

      setTimeout(() => {
        buttonSubmit.setAttribute('disabled', false)
        buttonSubmit.textContent = 'Заказать';
      }, 300)
    }
  }

  form.addEventListener('submit', (e) => {
    // e.preventDefault();
    checkWithSubmit(form, buttonSubmit);
  })
}
