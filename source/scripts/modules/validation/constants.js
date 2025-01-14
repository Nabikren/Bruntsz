export const formElements = (() => {
  const form = document.querySelector('form');
  if (form == null) return;
  return {
    form: form,
    userNameInput: form.querySelector('#username'),
    userPhoneInput: form.querySelector('#userphone'),
    userEmailInput: form.querySelector('#useremail'),
    userCompanyInput: form.querySelector('#usercompany'),
    userCommentsTextArea: form.querySelector('#usercomments'),
    inputs: form.querySelectorAll('input'),
    hiddenInput: form.querySelector('#hiddenFormInput'),
    buttonSubmit: form.querySelector("button[type='submit']")
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
      success: 'имя введено верно',
    },
    format: {
      error: 'должно быть в кириллице',
      success: 'имя введено верно, в кириллице',
    },
    symbols: {
      error: "не должно содержать (@,$,/)...",
      success: 'имя введено верно, не содержит спец.символов',
    },
    numbers: {
      error: "не должно содержать цифр",
      success: 'имя введено верно, не содержит цифры',
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
  },
  useremail: {
    empty: {
      error: 'введите полный адрес',
    },
    format: {
      error: 'ожидаемый формат myemail@gmail.com',
      success: 'адрес верный',
    }
  },
  usercompany: {
    empty: {
      error: 'введите полное название',
      success: 'название верное',
    },
    numbers: {
      error: 'не должно быть цифр',
      success: 'название верное',
    },
    symbols: {
      error: 'не должно быть спец.символов (@, %, $ ...)',
      success: 'название верное',
    },
  }
}

export const regexps = {
  name: {
    default: /^[А-Яа-яЁё\s]+$/,
    symbols: /[!@#$%^&*(),.?":;№{}|<>\"']/,
    numbers: /\d/
  },
  email: {
    format: /^[A-Za-z0-9._%+-]+@.+\.[A-Za-z]+$/,
    symbols: /[!#$%^&*(),.?":;№{}|<>\"' ]/,
    numbers: /\d/
  },
  company: {
    numbers: /\d/,
    symbols: /[!@#$%^&*(),.?":;№{}|<>\"']/,
  }
}
