import { checkMessage } from './functions/createMessage.js';
import Inputmask from "inputmask/dist/inputmask.es6.js";

export function checkPhone(input, name, userphone, regex, value) {

  if (input !== undefined && input !== null && value.length > 1 && input.value.length > 1) {
    const phoneMask = new Inputmask("+7 (999) 999-99-99");
    phoneMask.mask(input);

    const digitsOnly = value.replace(/\D/g, '');
    if (digitsOnly.length < 11) {
      checkMessage(input, name, userphone.empty.error, 'error');
    } else {
      checkMessage(input, name, userphone.empty.success, 'success');
    }
  }
}



