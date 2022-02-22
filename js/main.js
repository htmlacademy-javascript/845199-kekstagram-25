function getRandomInRange(min, max) {
  return Math.abs(Math.floor(Math.random() * (max - min + 1)) + min);
}

getRandomInRange(1, 10);
// за основу взято: https://myrusakov.ru/js-random-numbers.html
// возвращается значение по модулю,  передаваемые аргументы могут быть любыми.

const commentText = document.querySelector('.social__footer-text');

commentText.oninput = function (maxLength) {
  return commentText.value.length <= maxLength ? 'true' : 'false';
};

commentText.oninput(20);
// за основу взято упражнение тренажера: https://htmlacademy.ru/courses/349/run/11
