const disclaimerButton = document.querySelector('.intro__disclaimer-button');
const introButton = document.querySelector('.intro__button');
const introPolitical = document.querySelectorAll(
 '.intro__disclaimer-political'
);
const closeDisclaimerIcon = document.querySelector('.intro__disclaimer-close');

const closeDisclaimer = () => {
 const disclaimerWrapper = document.querySelector('.intro__disclaimer');
 disclaimerWrapper.remove();
};

disclaimerButton.addEventListener('click', closeDisclaimer);
introPolitical.forEach((item) =>
 item.addEventListener('click', openPoliticalModal)
);
introButton.addEventListener('click', openConsultationModal);
closeDisclaimerIcon.addEventListener('click', closeDisclaimer);
window.scrollTo(0, 0);
