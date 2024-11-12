const maskOptions = {
 mask: '+7 000 000 00 00',
 definitions: {
  X: {
   mask: '0',
   displayChar: 'X',
   placeholderChar: '#',
  },
 },
 placeholderChar: '0',
};

const mask = (input) => {
 const maskInstance = IMask(input, maskOptions);

 // При потере фокуса или изменении значения, если пользователь удалит всё, восстанавливаем +7
 input.addEventListener('blur', () => {
  if (!input.value.startsWith('+7')) {
   input.value = '+7 '; // Восстановим +7, если его нет
  }
 });

 return maskInstance;
};
