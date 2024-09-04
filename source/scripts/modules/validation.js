import { checkInput } from "./validation/functions/checkInput.js";
import { formElements } from './validation/constants.js';

const { userNameInput, userPhoneInput, userEmailInput, form, hiddenInput, buttonSubmit } = formElements;

export function validation() {
  const checkResName = checkInput(userNameInput, 'username');
  const checkResPhone = checkInput(userPhoneInput, 'userphone');
  const checkResEmail = checkInput(userEmailInput, 'useremail');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buttonSubmit.setAttribute('disabled', true)
    console.log(hiddenInput.value.length);
    console.log(checkResEmail, 'RES');
    if (checkResName && checkResPhone && checkResEmail && hiddenInput.value.length === 0) {
      buttonSubmit.setAttribute('disabled', false)
      form.submit();
      alert(1)
      // form.reset();
    }
  })
}
