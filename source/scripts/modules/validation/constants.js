export const form = document.querySelector('form');
export const userNameInput = form.querySelector('#username');
export const userPhoneInput = form.querySelector('#userphone');
export const userEmailInput = form.querySelector('#useremail');
export const userCompanyInput = form.querySelector('#usercompany');
export const userCommnetsTextArea = form.querySelector('#usercomments');

export const classesValid = [
  'green-text',
  'valid-class'
]
export const classesInValid = [
  'red-text',
  'invalid-class'
]

export const messages = {
  username: {
    empty: {
      error: 'введите имя',
      success: 'введно верно',
    },
    format: {
      error: 'должно быть в кириллице',
      success: 'введно верно',
    },
    symbols: {
      error: "не должно содержать (@,$,/)...",
      success: 'введно верно',
    },
    minName: {
      error: "минимум 3 буквы"
    }
  }
}

export const regexps = {
  name: {
    default: /^[А-Яа-яЁё]+( [А-Яа-яЁё]+)?( [А-Яа-яЁё]+)?$/,
    symbols: /[!@#$%^&*(),.?":{}|<> ]/,
  }
  ,
  phone: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
}
у
