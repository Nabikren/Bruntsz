import { checkMessage } from './functions/createMessage.js';

export function checkName(input, name, username, regexp, value) {
  if (value !== undefined && value !== null) {
    const regexCheckValueDefault = () => value.match(regexp.default);
    const regexCheckValueSymbols = () => value.match(regexp.symbols);
    if (value.length == 0) {
      checkMessage(input, name, username.empty.error, 'error');
    } else {
      if (regexCheckValueDefault() && !regexCheckValueSymbols())
        checkMessage(input, name, username.empty.success, 'success');
    }
    if (value.length > 0) {
      if (regexCheckValueDefault()) {
        checkMessage(input, name, username.format.success, 'success');
      } else {
        if (regexCheckValueSymbols()) {
          checkMessage(input, name, username.symbols.error, 'error');
        } else {
          checkMessage(input, name, username.format.error, 'error');
        }
      }
      if (value.length > 0 && value.match(regexp.numbers)) {
        checkMessage(input, name, username.numbers.error, 'error');
      }

      if (value.length < 3 && /\S/.test(value)) {
        checkMessage(input, name, username.minName.error, 'error');
      }
    }
  }
}
