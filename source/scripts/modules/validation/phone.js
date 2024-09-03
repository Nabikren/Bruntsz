import { checkMessage } from './functions/createMessage.js';
import Inputmask from "inputmask/dist/inputmask.es6.js";
console.log(Inputmask);

export function checkPhone(input, name, userphone, regex, value) {
  const phoneMask = new Inputmask("+7 (999) 999-9999");
  phoneMask.mask(input);

  if (value !== undefined && value !== null) {
    const digitsOnly = value.replace(/\D/g, '');
    if (digitsOnly.length < 11) {
      checkMessage(input, name, userphone.empty.error, 'error');
    } else {
      checkMessage(input, name, userphone.empty.success, 'success');
    }
  }
}



