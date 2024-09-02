
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
