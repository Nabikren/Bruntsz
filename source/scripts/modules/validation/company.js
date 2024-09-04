import { checkMessage } from './functions/createMessage.js';

export function checkCompany(input, name, usercompany, regexp, value) {
  if (value !== undefined && value !== null) {
    const regexCheckValueNumbers = () => value.match(regexp.numbers);
    const regexCheckValueSymbols = () => value.match(regexp.symbols);

    if (value.length >= 3 && regexCheckValueNumbers()) {
      checkMessage(input, name, usercompany.numbers.error, 'error');
    } else {
      checkMessage(input, name, usercompany.numbers.success, 'success');
    }
    if (value.length >= 3 && regexCheckValueSymbols()) {
      checkMessage(input, name, usercompany.symbols.error, 'error');
    }
    if (value.length == 0 || value.length < 3) {
      checkMessage(input, name, usercompany.empty.error, 'error');
    }
  }
}
