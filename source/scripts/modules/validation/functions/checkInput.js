import { regexps } from "../constants.js";
import { checkExistMessage } from './createMessage.js';
import { messages } from './../constants.js';
import { checkName } from './../name.js'
import { checkPhone } from './../phone.js'

function check(input, name, regexp) {
  const { username, userphone } = messages;

  input.addEventListener('input', (e) => {
    const { value } = e.target;
    checkExistMessage(input);
    switch (name) {
      case 'username':
        checkName(input, name, username, regexp, value);
        break;
      case 'userphone':
        checkPhone(input, name, userphone, regexp, value);
        break;
    }
  })

}

export function checkInput(input, name) {
  switch (name) {
    case 'username':
      check(input, name, regexps.name);
      break;
    case 'userphone':
      check(input, name, regexps.phone);
      break;
  }
}


