import { regexps } from "../constants.js";
import { checkExistMessage } from './createMessage.js';
import { messages } from './../constants.js';
import { checkName } from './../name.js'
import { checkPhone } from './../phone.js'
import { checkEmail } from './../email.js'
import { checkCompany } from './../company.js'

function check(input, name, regexp) {
  const { username, userphone, useremail, usercompany } = messages;

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
      case 'useremail':
        checkEmail(input, name, useremail, regexp, value);
        break;
      case 'usercompany':
        checkCompany(input, name, usercompany, regexp, value);
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
    case 'useremail':
      check(input, name, regexps.email);
      break;
    case 'usercompany':
      check(input, name, regexps.company);
      break;
  }
}


