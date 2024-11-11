const mask = (e) => {
 let input = e.value.replace(/\D/g, '');
 if (input.length === 0) {
  input = '7';
 } else if (input[0] !== '7') {
  input = '7' + input;
 }

 // Форматируем номер в виде +7 (XXX) XXX-XX-XX
 let formatted = '+7 (';
 if (input.length > 1) formatted += input.substring(1, 4);
 if (input.length >= 4) formatted += ') ' + input.substring(4, 7);
 if (input.length >= 7) formatted += '-' + input.substring(7, 9);
 if (input.length >= 9) formatted += '-' + input.substring(9, 11);

 e.value = formatted;
};
const validatePhone = (phoneInput) => {
 const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
 if (phoneRegex.test(phoneInput.value)) {
  phoneInput.classList.contains('invalid')
   ? phoneInput.classList.remove('invalid')
   : null;
  return true;
 } else {
  return false;
 }
};
