const openVacancyForm = (section) => {
 window.scrollTo(0, 0);
 section.remove();
 const vacancySection = document.createElement('section');
 vacancySection.className = 'popup';
 vacancySection.innerHTML = `  
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
       <h1 class="popup__form-title">
        <span>Пожалуйста</span>, оставьте ваши контакты, чтобы мы отправили вам
        презентацию
       </h1>
       <div class="popup__form-input">
        <p class="popup__input-name">номер сотового телефона</p>
        <input type="text" class="popup__input" placeholder="+7" />
       </div>
       <div class="popup__button-wrapper">
        <button class="popup__form-button">Анкета для заполнения</button>
        <p class="popup__disclamer">
         нажимая, вы соглашаетесь<br/> <span>с условиями политики конфиденциальности</span>
        </p>
       </div>
      </div>
     </form>
     <img class='popup__img' src='./assets/consultation/tele_3.png'/>
     </div>
    </div>
   `;
 document.body.append(vacancySection);
 const popupInput = vacancySection.querySelector('.popup__input');
 const popupForm = vacancySection.querySelector('.popup__form');
 const popupDisclaimer = vacancySection.querySelector('.popup__disclamer');

 const closePopupIcon = vacancySection.querySelector('.popup__close');
 popupInput.addEventListener('input', () => mask(popupInput));

 popupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  submitForm(popupInput);
 });
 closePopupIcon.addEventListener('click', () => closePopup(vacancySection));
 popupDisclaimer.addEventListener('click', openPoliticalModal);
};
const openVacancyModal = () => {
 window.scrollTo(0, 0);
 const vacancySection = document.createElement('section');
 vacancySection.className = 'vacancy';
 vacancySection.innerHTML = `<div class="popup__wrapper">
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
    <div class="vacancy__wrapper">
     <h2 class="vacancy__title">
      Вакансия для амбициозных, сильных и коммуникабельных
     </h2>
     <h2 class="vacancy__title mobile">
     Вакансия
    </h2>
     <div class="vacancy__info">
     <img class='vacancy__img' src='./assets/vacancy/kubok.png'/>
      <div class="vacancy__info-wrapper">
       <div class="vacancy__info-items">
        <div class="vacancy__info-item">
         <p class="vacancy__info-text">
          <span>Профессиональная команда</span>, обеспечивающая цикл
          производства, сначала и до конца
         </p>
        </div>
        <div class="vacancy__info-item">
         <p class="vacancy__info-text">
          <span>Грамотная подготовка</span>, предоставляющая понятное введение в
          должность
         </p>
        </div>
        <div class="vacancy__info-item">
         <p class="vacancy__info-text">
          <span>Понятная работа</span>, с официальным трудоустройством и важными
          социальными гарантиями
         </p>
        </div>
        <div class="vacancy__info-item">
         <p class="vacancy__info-text">
          <span>Карьерная лестница</span>, c понятным ростом и необходимыми
          производственными обязанностями
         </p>
        </div>
       </div>
       <div class="vacancy__bottom">
        <button class="vacancy__button">Анкета для заполнения</button>
        <p class="vacancy__disclaimer">
         нажимая, вы соглашаетесь<br />
         <span>с условиями политики конфиденциальности</span>
        </p>
       </div>
      </div>
     </div>
    </div>
   </div>`;
 document.body.append(vacancySection);
 document.body.classList.add('scroll-disabled');
 lenis.stop();
 const closePopupIcon = vacancySection.querySelector('.popup__close');
 const vacancyButton = vacancySection.querySelector('.vacancy__button');
 closePopupIcon.addEventListener('click', () => closePopup(vacancySection));
 vacancyButton.addEventListener('click', () => openVacancyForm(vacancySection));
 vacancySection
  .querySelector('.vacancy__disclaimer')
  .addEventListener('click', openPoliticalModal);
};

const footerVacancy = document.querySelector(
 '.footer__info-item.footer-vacancy'
);
footerVacancy.addEventListener('click', openVacancyModal);
