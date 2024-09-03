export const formElements = (() => {
  const form = document.querySelector('form');
  return {
    form: form,
    userNameInput: form.querySelector('#username'),
    userPhoneInput: form.querySelector('#userphone'),
    userEmailInput: form.querySelector('#useremail'),
    userCompanyInput: form.querySelector('#usercompany'),
    userCommentsTextArea: form.querySelector('#usercomments'),
    inputs: form.querySelectorAll('input'),
  };
})();

export const classesValid = [
  'green-text',
  'valid-class',
  'valid'
]
export const classesInValid = [
  'red-text',
  'invalid-class',
  'invalid'
]

export const messages = {
  username: {
    empty: {
      error: 'введите имя',
      success: 'имя введно верно',
    },
    format: {
      error: 'должно быть в кириллице',
      success: 'имя введно верно, в кириллице',
    },
    symbols: {
      error: "не должно содержать (@,$,/)...",
      success: 'имя введно верно, не содержит спец.символов',
    },
    numbers: {
      error: "не должно содержать цифр",
      success: 'имя введно верно, не содержит цифры',
    },
    minName: {
      error: "минимум 3 буквы"
    }
  },
  userphone: {
    empty: {
      error: 'введите полный номер телефона',
      success: 'телефон верный',
    }
  }
}

export const regexps = {
  name: {
    default: /^[А-Яа-яЁё]+( [А-Яа-яЁё]+)?( [А-Яа-яЁё]+)?$/,
    symbols: /[!@#$%^&*(),.?":;№{}|<>\"' ]/,
    numbers: /\d/
  }
}
