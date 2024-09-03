import { classesValid, classesInValid } from './../constants.js';

export function checkExistMessage(input) {
  console.log(2222);
  let messageExist = input.parentElement.querySelector('#message');
  if (messageExist) { messageExist.remove() }
}

export function checkMessage(input, name, text, status) {
  switch (name) {
    case 'username':
      createMessage(input, text, status);
      break;
  }
}

function setStylesClasses(input, message, status) {
  message.classList.remove(classesValid[0]);
  input.classList.remove(classesValid[1]);
  message.classList.remove(classesInValid[0]);
  input.classList.remove(classesInValid[1]);

  if (status === 'success') {
    message.classList.add(classesValid[0]);
    input.classList.add(classesValid[1]);
  }
  if (status === 'error') {
    message.classList.add(classesInValid[0]);
    input.classList.add(classesInValid[1]);
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
