const setInputMask = (inputElement) => {
 const maskOptions = {
  mask: '+7 000 000 00 00',
 };
 const maskInstance = IMask(inputElement, maskOptions);
 inputElement.addEventListener('input', () => {
  maskInstance.updateValue();
  maskInstance.updateControl();
 });

 inputElement.addEventListener('blur', () => {
  if (!inputElement.value.startsWith('+7 ')) {
   maskInstance.updateValue();
   maskInstance.updateControl();
   inputElement.value = '+7 ';
  } else if (inputElement.value === '+7 ') {
   maskInstance.updateValue();
   maskInstance.updateControl();
   inputElement.value = '+7 ';
  }
 });
 inputElement.addEventListener('input', () => {
  if (!inputElement.value.startsWith('+7 ')) {
   inputElement.value = '+7 ';
   maskInstance.updateValue();
   maskInstance.updateControl();
  } else if (inputElement.value === '+7 ') {
   maskInstance.updateValue();
   maskInstance.updateControl();
  }
 });
};

const validatePhoneNumber = (inputElement) => {
 const phoneNumberPattern = /^\+7 \d{3} \d{3} \d{2} \d{2}$/;
 return phoneNumberPattern.test(inputElement.value);
};

const initMask = (inputElement) => {
 inputElement.value = '+7 ';
};
