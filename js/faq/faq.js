const questions = document.querySelectorAll('.faq__question');
const nuances = document.querySelectorAll('.nuances__item');
const nuancesWrapperMobile = document.querySelector('.nuances__items.mobile');
const nuancesMobile = nuancesWrapperMobile.querySelectorAll('.nuances__item');

const openQuestion = (questions) => {
 questions.forEach((question) => {
  question.addEventListener('click', () => {
   if (question.classList.contains('active')) {
    question.classList.remove('active');
   } else {
    console.log(question);
    questions.forEach((quest) => quest.classList.remove('active'));
    question.classList.add('active');
   }
  });
 });
};

openQuestion(nuances);
openQuestion(questions);
