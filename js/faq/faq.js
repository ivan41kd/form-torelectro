const questions = document.querySelectorAll('.faq__question');
const nuances = document.querySelectorAll('.nuances__item');

const openQuestion = (questions) => {
 questions.forEach((question) => {
  question.addEventListener('click', () => {
   // Проверяем, активен ли уже вопрос
   if (question.classList.contains('active')) {
    // Если активен, то удаляем класс `active`
    question.classList.remove('active');
   } else {
    // Если не активен, то делаем его активным
    questions.forEach((quest) => quest.classList.remove('active')); // Убираем `active` у всех других
    question.classList.add('active'); // Добавляем `active` только текущему вопросу
   }
  });
 });
};

openQuestion(nuances);
openQuestion(questions);
