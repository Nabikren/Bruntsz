import { classesValid, classesInValid } from './../constants.js';

export function checkExistMessage(input) {
  let messageExist = input.parentElement.querySelector('#message');
  if (messageExist) { messageExist.remove() }
}

export function checkMessage(input, name, text, status) {
  switch (name) {
    case 'username':
      createMessage(input, text, status);
      break;
    case 'userphone':
      createMessage(input, text, status);
      break;
    case 'useremail':
      createMessage(input, text, status);
      break;
    case 'usercompany':
      createMessage(input, text, status);
      break;
  }
}

function setStylesClasses(input, message, status) {
  message.classList.remove(classesValid[0]);
  message.classList.remove(classesValid[1]);
  input.classList.remove(classesValid[2]);
  message.classList.remove(classesInValid[0]);
  message.classList.remove(classesInValid[1]);
  input.classList.remove(classesInValid[2]);

  if (status === 'success') {
    message.classList.add(classesValid[0]);
    message.classList.add(classesValid[1]);
    input.classList.add(classesValid[2]);
  }
  if (status === 'error') {
    message.classList.add(classesInValid[0]);
    message.classList.add(classesInValid[1]);
    input.classList.add(classesInValid[2]);
  }
}

function createMessage(input, text, status) {
  checkExistMessage(input);
  let message = document.createElement('p');
  message.setAttribute('id', 'message');
  message.textContent = text;
  setStylesClasses(input, message, status)
  input.parentElement.appendChild(message);
}
