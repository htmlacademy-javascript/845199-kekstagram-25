function getRandomInRange(min, max) {
  return Math.abs(Math.floor(Math.random() * (max - min + 1)) + min);
}

getRandomInRange();
/** за основу взято: https://myrusakov.ru/js-random-numbers.html
* возвращается значение по модулю,  передаваемые аргументы могут быть любыми.
*/

function checkMaxLength (str, maxLength) {
  return str.length <= maxLength ? 'true' : 'false';
}

checkMaxLength();
