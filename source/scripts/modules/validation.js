const form = document.querySelector('form');
const userNameInput = form.querySelector('#username');
const userPhoneInput = form.querySelector('#userphone');
const userEmailInput = form.querySelector('#useremail');
const userCompanyInput = form.querySelector('#usercompany');
const userCommnetsTextArea = form.querySelector('#usercomments');

function checkExistMessage(e) {
  let messageExist = e.parentElement.querySelector('#message');
  if (messageExist) { messageExist.remove() }
}

function maskPhone(event) {

  let formattedNumber = '';
  let phone = event.target.value.replace(/\D/g, ''); // Remove all non-digit characters

  if (event !== 'keydown') {
    if (phone.length > 0) {
      formattedNumber += '+7 '; // Add country code
    }
    if (phone.length > 1) {
      formattedNumber += '(' + phone.substring(1, 4); // Area code
    }
    if (phone.length >= 4) {
      formattedNumber += ') ' + phone.substring(4, 7); // First 3 digits
    }
    if (phone.length >= 7) {
      formattedNumber += '-' + phone.substring(7, 9); // Next 2 digits
    }
    if (phone.length >= 9) {
      formattedNumber += '-' + phone.substring(9, 11); // Last 2 digits
    }
  }
  userPhoneInput.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      formattedNumber.slice(0, -1)
    }
  })

  return formattedNumber;
}

let classesValid = [
  'green-text',
  'valid-class'
]
let classesInValid = [
  'red-text',
  'invalid-class'
]

function checkInput(input, name) {
  const regexpName = /^[А-Яа-яЁё]+( [А-Яа-яЁё]+)?$/;
  const regexpPhone = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

  let flag;
  let regexp;
  if (name == 'username') regexp = regexpName;
  if (name == 'userphone') regexp = regexpPhone;


  function createMessage(e) {
    checkExistMessage(e);
    let message = document.createElement('p');
    message.setAttribute('id', 'message');

    let messageSuccess = () => {
      if (name == 'username') message.textContent = 'Имя введено верно';
      if (name == 'userphone') message.textContent = 'Телефон  введен верно';

      classesInValid.forEach((el, index) => {
        if (message.classList.contains(el)) message.classList.remove(el);
        message.classList.add(classesValid[index]);
      })
    }
    let messageError = () => {
      if (name == 'username') message.textContent = 'Имя введено неверно';
      if (name == 'userphone') message.textContent = 'Телефон  введен неверно';
      classesValid.forEach((el, index) => {
        if (message.classList.contains(el)) message.classList.remove(el);
        message.classList.add(classesInValid[index]);
      })
    }
    if (flag) {
      messageSuccess();
    } else {
      messageError();
    }

    if (e.value.length > 0) {
      input.parentElement.appendChild(message);
    }
  }

  input.addEventListener('input', (e) => {
    let { target } = e;
    let { value } = target;
    let conditionLenght;

    if (name == 'username') {
      conditionLenght = value.length > 3
    }

    if (name == 'userphone') {
      conditionLenght = value.length === 18;
      if (value.length > 18) {
        value = value.substring(0, 17);
      }
    }

    if (regexp.test(value) && conditionLenght) {

      flag = true;
      if (input.classList.contains('invalid')) input.classList.remove('invalid')
      createMessage(target)
      input.classList.add('valid')
    } else {
      flag = false;
      if (input.classList.contains('valid')) input.classList.remove('valid')
      createMessage(target)
      input.classList.add('invalid');
    }

    if (name == 'userphone') {
      e.target.value = maskPhone(e);
    }
  })
}



export function validation() {
  checkInput(userNameInput, 'username');
  checkInput(userPhoneInput, 'userphone');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  })
}
