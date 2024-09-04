import { checkMessage } from './functions/createMessage.js';

export function checkEmail(input, name, useremail, regex, value) {

  if (value !== undefined && value !== null) {

    if (value.length > 0 && !value.match(regex.format)) {
      checkMessage(input, name, useremail.format.error, 'error');
      return false;
    } else {
      checkMessage(input, name, useremail.format.success, 'success');

      if (value.length === 0) {
        checkMessage(input, name, useremail.empty.error, 'error');
        return false;
      }
      return true;
    }


  }
}
