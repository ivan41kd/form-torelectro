const openPresentationModal = () => {
 const presentationSection = document.createElement('section');
 presentationSection.className = 'popup';
 presentationSection.innerHTML = `  
 <div class="popup__wrapper">
  <svg
   width="30"
   height="30"
   viewBox="0 0 30 30"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
   class="popup__close"
  >
   <g opacity="0.25">
    <path
     d="M15 2.8125C12.5895 2.8125 10.2332 3.52728 8.22899 4.86646C6.22477 6.20564 4.66267 8.10907 3.74022 10.336C2.81778 12.563 2.57643 15.0135 3.04668 17.3777C3.51694 19.7418 4.67769 21.9134 6.38214 23.6179C8.08659 25.3223 10.2582 26.4831 12.6223 26.9533C14.9865 27.4236 17.437 27.1822 19.664 26.2598C21.8909 25.3373 23.7944 23.7752 25.1335 21.771C26.4727 19.7668 27.1875 17.4105 27.1875 15C27.1841 11.7687 25.899 8.67076 23.6141 6.3859C21.3292 4.10104 18.2313 2.81591 15 2.8125ZM19.4133 18.0867C19.5004 18.1738 19.5695 18.2772 19.6166 18.391C19.6638 18.5048 19.688 18.6268 19.688 18.75C19.688 18.8732 19.6638 18.9952 19.6166 19.109C19.5695 19.2228 19.5004 19.3262 19.4133 19.4133C19.3262 19.5004 19.2228 19.5695 19.109 19.6166C18.9952 19.6638 18.8732 19.688 18.75 19.688C18.6268 19.688 18.5048 19.6638 18.391 19.6166C18.2772 19.5695 18.1738 19.5004 18.0867 19.4133L15 16.3254L11.9133 19.4133C11.8262 19.5004 11.7228 19.5695 11.609 19.6166C11.4952 19.6638 11.3732 19.688 11.25 19.688C11.1268 19.688 11.0048 19.6638 10.891 19.6166C10.7772 19.5695 10.6738 19.5004 10.5867 19.4133C10.4996 19.3262 10.4305 19.2228 10.3834 19.109C10.3362 18.9952 10.312 18.8732 10.312 18.75C10.312 18.6268 10.3362 18.5048 10.3834 18.391C10.4305 18.2772 10.4996 18.1738 10.5867 18.0867L13.6746 15L10.5867 11.9133C10.4108 11.7374 10.312 11.4988 10.312 11.25C10.312 11.0012 10.4108 10.7626 10.5867 10.5867C10.7626 10.4108 11.0012 10.312 11.25 10.312C11.4988 10.312 11.7374 10.4108 11.9133 10.5867L15 13.6746L18.0867 10.5867C18.1738 10.4996 18.2772 10.4305 18.391 10.3834C18.5048 10.3362 18.6268 10.312 18.75 10.312C18.8732 10.312 18.9952 10.3362 19.109 10.3834C19.2228 10.4305 19.3262 10.4996 19.4133 10.5867C19.5004 10.6738 19.5695 10.7772 19.6166 10.891C19.6638 11.0048 19.688 11.1268 19.688 11.25C19.688 11.3732 19.6638 11.4952 19.6166 11.609C19.5695 11.7228 19.5004 11.8262 19.4133 11.9133L16.3254 15L19.4133 18.0867Z"
     fill="white"
    />
   </g>
  </svg>
  <div class='popup__body'>

  <form class="popup__form">
   <div class="popup__form-wrapper">
    <h1 class="popup__form-title hide-mobile">
     <span>Пожалуйста</span>, оставьте ваши контакты, чтобы мы отправили вам
     презентацию
    </h1>
    <h1 class="popup__form-title mobile">
    <span>Пожалуйста</span>, оставьте ваши контакты,
    чтобы мы перезвонили и ответили
    <br/>на все необходимые вопросы
   </h1>
    <div class="popup__form-input">
     <p class="popup__input-name">номер сотового телефона</p>
     <input type="text" class="popup__input"  />
    </div>
    <div class="popup__button-wrapper">
     <button class="popup__form-button">Подробная презентация</button>
     <p class="popup__disclamer">
      нажимая, вы соглашаетесь <br/> <span>с условиями политики конфиденциальности</span>
     </p>
    </div>
    </div>
    </form>
    <img class='popup__img' src='./assets/presentation/laptop_3.png'/>
  </div>
 </div>
`;
 document.body.append(presentationSection);
 const popupInput = presentationSection.querySelector('.popup__input');
 const popupForm = presentationSection.querySelector('.popup__form');
 const closePopupIcon = presentationSection.querySelector('.popup__close');

 document.body.classList.add('scroll-disabled');
 lenis.stop();
 initMask(popupInput);
 setInputMask(popupInput);
 popupInput.addEventListener('input', () => setInputMask(popupInput));

 popupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  submitForm(popupInput, popupForm);
 });
 closePopupIcon.addEventListener('click', () =>
  closePopup(presentationSection)
 );
 presentationSection
  .querySelector('.popup__disclamer')
  .addEventListener('click', () => {
   closePopup(presentationSection);
   openPoliticalModal();
  });
};

const submitForm = (input) => {
 if (validatePhoneNumber(input) == true) {
  input.classList.remove('invalid');
  console.log('Форма отправлена!');
 } else {
  input.classList.add('invalid');
 }
};

const closePopup = (section) => {
 document.body.classList.remove('scroll-disabled');
 lenis.start();
 section.remove();
};
const presentationButton = document.querySelector('.presentation__button');

presentationButton.addEventListener('click', openPresentationModal);
