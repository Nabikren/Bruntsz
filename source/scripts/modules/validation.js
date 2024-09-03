import { checkInput } from "./validation/functions/checkInput.js";
import { formElements } from './validation/constants.js';

const { userNameInput, userPhoneInput } = formElements;


export function validation() {
  checkInput(userNameInput, 'username');
  checkInput(userPhoneInput, 'userphone');
}
