import { regexps } from "../constants.js";
import { checkMessage, checkExistMessage } from './createMessage.js';
import { messages } from './../constants.js';

function check(input, name, regexp) {
  const { username } = messages;

  input.addEventListener('input', (e) => {
    const { value } = e.target;

    checkExistMessage(input);

    if (value.length > 0 && !value.match(regexp.default)) {
      if (!value.match(regexp.symbols)) {
        checkMessage(input, name, username.symbols.error, 'error');
      } else {
        checkMessage(input, name, username.symbols.success, 'success');
      }
    } else {
      checkMessage(input, name, username.format.success, 'success');
    }

    if (value.length == 0) {
      checkMessage(input, name, username.empty.error, 'error');
    } else {
      if (value.match(regexp.default) && !value.match(regexp.symbols))
        checkMessage(input, name, username.empty.success, 'success');
    }

    if (value.length < 3 && /\S/.test(value)) {
      checkMessage(input, name, username.minName.error, 'error');
    }

  })
}

export function checkInput(input, name) {
  switch (name) {
    case 'username':
      check(input, name, regexps.name);
      break;
  }
}


