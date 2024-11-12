const introButton = document.querySelector('.intro__disclaimer-button');
const introPolitical = document.querySelectorAll(
 '.intro__disclaimer-political'
);
const closeDisclaimerIcon = document.querySelector('.intro__disclaimer-close');

const closeDisclaimer = () => {
 const disclaimerWrapper = document.querySelector('.intro__disclaimer');
 disclaimerWrapper.remove();
};

introButton.addEventListener('click', closeDisclaimer);
introPolitical.forEach((item) =>
 item.addEventListener('click', openPoliticalModal)
);
closeDisclaimerIcon.addEventListener('click', closeDisclaimer);
