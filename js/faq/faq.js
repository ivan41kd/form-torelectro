const questions = document.querySelectorAll('.faq__question');
const nuances = document.querySelectorAll('.nuances__item');

const openQuestion = (question) => {
 question.addEventListener('click', () => question.classList.add('active'));
};

nuances.forEach((nuance) => openQuestion(nuance));

questions.forEach((question) => openQuestion(question));
