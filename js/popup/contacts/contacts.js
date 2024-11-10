const openContactsModal = () => {
 const contactsSection = document.createElement('section');
 contactsSection.className = 'contacts';
 contactsSection.innerHTML = `
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
  <div class="contacts__wrapper">
   <h2 class="contacts__title">Контактная информация</h2>
   <div class="contacts__info-items">
    <iframe
     src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d668.5707363817106!2d38.05450251742869!3d55.692552773413404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTXCsDQxJzMzLjUiTiAzOMKwMDMnMTkuMSJF!5e0!3m2!1sru!2sde!4v1731235527574!5m2!1sru!2sde"
     width="800"
     height="470"
     style="border: 0"
     allowfullscreen=""
     loading="lazy"
     referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div class="contacts__info-cards">
     <div class="contacts__info-card">
      <p class="contacts__info-text">+7 495 198 62 55</p>
      <p class="contacts__info-text">+7 916 083 39 30</p>
      <p class="contacts__info-text">tor@torelektro.ru</p>
     </div>
     <div class="contacts__info-card">
      <div class="contacts__info">
       <p class="contacts__info-text">ООО «ТОРЭЛЕКТРО»</p>
      </div>
      <div class="contacts__info">
       <p class="contacts__info-address">
        140016, Россия,<br />
        Московская область,<br />
        Люберецкий район, Торбеево, 48
       </p>
      </div>
      <div class="contacts__info-legals">
       <div class="contacts__info-legal">
        <p class="contacts__info-legal-text">1245000026600</p>
        <p class="contacts__info-legal-text">5027326376</p>
        <p class="contacts__info-legal-text">502701001</p>
        <p class="contacts__info-legal-text">75706083</p>
        <p class="contacts__info-legal-text">46448000000</p>
       </div>
       <div class="contacts__info-legal">
        <p class="contacts__info-legal-name">ОГРН</p>
        <p class="contacts__info-legal-name">ИНН</p>
        <p class="contacts__info-legal-name">КПП</p>

        <p class="contacts__info-legal-name">ОКПО</p>
        <p class="contacts__info-legal-name">ОКАТО</p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>`;
 document.body.append(contactsSection);
 const closePopupIcon = contactsSection.querySelector('.popup__close');
 closePopupIcon.addEventListener('click', () => closePopup(contactsSection));
};

const footerContact = document.querySelector(
 '.footer__info-item.footer-contact'
);
footerContact.addEventListener('click', openContactsModal);
