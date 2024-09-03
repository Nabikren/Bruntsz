import { checkInput } from "./functions/checkInput.js";

const form = document.querySelector('form');
const userNameInput = form.querySelector('#username');

export function checkName() {
  checkInput(userNameInput, 'username');
}
