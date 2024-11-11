const openPoliticalModal = () => {
 const politicalSection = document.createElement('section');
 politicalSection.className = 'political';

 politicalSection.innerHTML = `   <div class="popup__wrapper">
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
 <div class="political__wrapper">
  <h2 class="political__title">Политика конфиденциальности</h2>
  <div class="political__text-wrapper">
   <p class="political__text">
    1. Общие положения<br />
    Настоящая политика конфиденциальности составлена в соответствии
    с требованиями федерального закона от 27.07.2006 №152-ФЗ «О персональных
    данных» (далее — закон о персональных данных) и определяет порядок
    обработки персональных данных, а также меры по обеспечению безопасности
    персональных данных, предпринимаемые <span>ООО «ТОРЭЛЕКТРО»</span
    > (далее — оператор).<br />
    1.1. Оператор ставит своей важнейшей целью и условием осуществления своей
    деятельности соблюдение прав и свобод человека при обработке его
    персональных данных, в том числе защиты прав на неприкосновенность
    частной жизни, личную и семейную тайну. <br />
    1.2. Настоящая политика оператора в отношении обработки персональных
    данных (далее — политика) применяется ко всей информации, которая может
    быть получена оператором о посетителях интернет-сайта: <span
     ><a href="https://torelektro.ru">https://torelektro.ru</a></span
    >
    (далее - сайт). <br />
    2. Основные понятия <br />
    2.1. Автоматизированная обработка персональных данных — обработка
    персональных данных с помощью средств специальной техники. <br />
    2.2. Блокирование персональных данных — временное прекращение обработки
    персональных данных. <br />
    2.3. Интернет-сайт — совокупность графических и информационных
    материалов, а также программ специальной техники и баз данных,
    обеспечивающих их доступность в сети интернет по сетевому адресу: <span
     ><a href="https://torelektro.ru">https://torelektro.ru</a></span
    >. <br />
    2.4. Информационная система персональных данных — совокупность
    содержащихся в базах данных персональных данных и обеспечивающих
    их обработку информационных технологий и технических средств. <br />
    2.5. Обезличивание персональных данных — действия, в результате которых
    невозможно определить без использования дополнительной информации
    принадлежность персональных данных конкретному субъекту. <br />
    2.6. Обработка персональных данных — любое действие или совокупность
    таковых действий, совершаемых с использованием средств автоматизации или
    без использования таких средств с персональными данными, включая
    собирание, записывание, систематизирование, накопление, хранение,
    уничтожение и обезличивание персональных данных. <br />
    2.7. Оператор — юридическое лицо, самостоятельно или совместно с другими
    лицами организующие и (или) осуществляющие обработку персональных данных,
    а также определяющие цели обработки и состав персональных данных,
    подлежащих обработке, действия, совершаемые с персональными данными.
    <br />
    2.8. Персональные данные — любая информация, относящаяся прямо или
    косвенно к субъекту персональных данных сайта. <br />
    2.9. Персональные данные, разрешенные субъектом персональных данных для
    распространения, — персональные данные, доступ неограниченного круга лиц
    к которым предоставлен субъектом персональных данных путем дачи согласия
    на обработку персональных данных, разрешенных субъектом персональных
    данных для распространения в порядке, предусмотренном Законом
    о персональных данных (далее — персональные данные, разрешенные для
    распространения). <br />
    2.10. Предоставление персональных данных — действия, направленные
    на раскрытие персональных данных определенному лицу. <br />
    2.11. Распространение персональных данных — любые действия, направленные
    на раскрытие персональных данных неопределенному кругу лиц или
    на ознакомление с персональными данными неограниченного круга лиц, в том
    числе обнародование персональных данных. в средствах массовой информации,
    размещение в информационно-телекоммуникационных сетях. <br />
    2.12. Трансграничная передача персональных данных — передача персональных
    данных на территорию иностранного государства органу власти иностранного
    государства, иностранному физическому или иностранному юридическому лицу.
    2.13. Уничтожение персональных данных — любые действия, в результате
    которых персональные данные уничтожаются безвозвратно с невозможностью
    дальнейшего восстановления содержания персональных данных
    в информационной системе персональных данных. <br />
    3. Основные права и обязанности оператора <br />
    3.1. Оператор имеет право:<br />
    — получать от субъекта персональных данных достоверные информацию и
    (или) документы, содержащие персональные данные; <br />
    — в случае, субъектом персональных данных, направления обращения
    с требованием о прекращении обработки персональных данных, оператор
    вправе продолжить обработку персональных данных без согласия субъекта
    персональных данных при наличии оснований, указанных в российском
    законодательстве.<br />
    — самостоятельно определять состав и перечень мер, необходимых
    и достаточных для обеспечения выполнения обязанностей, предусмотренных
    российским законодательством и принятыми в соответствии с ним
    нормативными правовыми актами, если иное не предусмотрено действующим
    российским законодательством. <br />
    3.2. Оператор обязан: <br />
    — предоставлять субъекту персональных данных по его просьбе информацию,
    касающуюся обработки его персональных данных;<br />
    — организовывать обработку персональных данных в порядке, установленном
    действующим российским законодательством;<br />
    — отвечать на обращения и запросы субъектов персональных данных
    и их законных представителей; <br />
    — сообщать информацию в уполномоченный государственный орган по защите
    прав субъектов персональных данных по запросу органа;<br />
    — публиковать или иным образом обеспечивать неограниченный доступ
    к настоящей политике на сайте;<br />
    — принимать правовые, организационные и технические меры для защиты
    персональных данных от неправомерного доступа к ним, уничтожения,
    изменения, блокирования, копирования, предоставления, распространения
    персональных данных, а также от иных неправомерных действий в отношении
    персональных данных; <br />
    — прекратить передачу персональных данных, прекратить обработку
    и уничтожить персональные данные в порядке и случаях, предусмотренных
    российским законодательством; <br />
    — исполнять иные обязанности, предусмотренных российским
    законодательством. <br />
    4. Основные права и обязанности субъектов персональных данных <br />
    4.1. Субъекты персональных данных имеют право: — получать информацию,
    касающуюся обработки его персональных данных в соответствии с российским
    законодательством; — требовать от оператора уточнения его персональных
    данных, их блокирования или уничтожения в случае, если персональные
    данные являются неполными, устаревшими, неточными, незаконно полученными
    и не являются необходимыми для заявленной цели обработки; — направлять
    требования о прекращении обработки персональных данных; — обжаловать
    в уполномоченный орган по защите прав субъектов персональных данных
    действия или бездействие оператора. <br />
    4.2. Субъекты персональных данных обязаны:<br />
    — предоставлять оператору достоверные данные о себе; <br />
    — сообщать оператору об уточнении своих персональных данных. <br />
    5. Принципы обработки персональных данных <br />
    5.1. Обработка персональных данных осуществляется на законной
    и справедливой основе. <br />
    5.2. Обработка персональных данных ограничивается достижением конкретных,
    заранее определенных и законных целей. <br />
    5.3. Хранение персональных данных осуществляется в форме, позволяющей
    определить субъекта персональных данных, не дольше, чем этого требуют
    цели обработки персональных данных, если срок хранения персональных
    данных не установлен федеральным законом, договором, стороной которого,
    выгодоприобретателем или поручителем по которому является субъект
    персональных данных. <br />
    6. Цели обработки персональных данных Цель обработки, это заключение,
    исполнение и прекращение гражданско-правовых договоров, с помощью
    персональных данных:
    <li>фамилия, имя, отчество;</li>
    <li>электронный адрес;</li>
    <li>номер телефона;</li>
    Правовые основания:<br />
    <li>
     Федеральный закон «Об информации, информационных технологиях и о защите
     информации» от 27.07.2006 №149-ФЗ.
    </li>
    Виды обработки персональных данных:<br />
    <li>
     собирание, записывание, систематизирование, накопление, хранение,
     уничтожение и обезличивание персональных данных;
    </li>
    <li>отправка информационных писем на адрес электронной почты.</li>
   </p>

   <p class="political__text">
    7. Условия обработки персональных данных Обработка персональных данных
    осуществляется с согласия субъекта персональных данных на обработку его
    персональных данных, с целью заключения договора по инициативе субъекта
    персональных данных, по которому станет выгодоприобретателем. <br />
    8. Порядок сбора, хранения, передачи и других видов обработки
    персональных данных <br />
    8.1. Оператор обеспечивает сохранность персональных данных и принимает
    все возможные меры, исключающие доступ к ним. <br />
    8.2. Оператор обеспечивает сохранность персональных данных в форме,
    позволяющей определить субъекта персональных данных, не дольше, чем этого
    требуют цели обработки персональных данных, если срок хранения
    персональных данных не установлен российским законодательством,
    договором, стороной которого, приобретателем по которому является субъект
    персональных данных. <br />
    8.3. Оператор не отвечает за действия третьих лиц. <br />
    8.4. Вся информация, которая собирается сторонними сервисами, в том числе
    платежными системами, средствами связи и другими поставщиками услуг,
    хранится и обрабатывается указанным лицам (оператором) в соответствии с
    политикой конфиденциальности. <br />
    9. Перечень действий, производимых оператором с полученными персональными
    данными <br />
    9.1. Оператор осуществляет собирание, записывание, систематизирование,
    накопление, хранение, уничтожение и обезличивание. <br />
    9.2. Оператор осуществляет автоматизированное обрабатывание персональных
    данных с получением информации. <br />
    10. Трансграничная передача персональных данных Оператор до начала
    осуществления деятельности по трансграничной передаче персональных данных
    обязан уведомить уполномоченный орган по защите прав субъектов
    персональных данных о своем намерении осуществлять трансграничную
    передачу. <br />
    11. Конфиденциальность персональных данных Оператор обязан не раскрывать
    третьим лицам и не распространять персональные данные без согласия
    субъекта персональных данных, если иное не предусмотрено российским
    законодательством. <br />
    12. Заключительные положения <br />
    12.1. Пользователь (субъект персональных данных) может запросить любые
    разъяснения по интересующим вопросам, касающимся обработки персональных
    данных, обратившись к оператору с помощью электронной почты:
    <span><a href="tor@elektro.ru"></a></span>
    tor@elektro.ru. <br />
    12.2. Политика в актуальном издании всегда в свободном доступе находится
    по сетевому адресу:<span
     ><a href="https://torelektro.ru">https://torelektro.ru</a></span
    >.
   </p>
  </div>
 </div>
</div>`;
 document.body.append(politicalSection);
 const closePopupIcon = politicalSection.querySelector('.popup__close');
 closePopupIcon.addEventListener('click', () => closePopup(politicalSection));
};

const footerPolitical = document.querySelector(
 '.footer__docs-item.footer-political'
);
footerPolitical.addEventListener('click', openPoliticalModal);
