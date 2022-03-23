/**
 * функция возвращает случайное число из диапазона
 * @param {int} min - минимальное число в диапазоне
 * @param {int} max - максимальное число в диапазоне
 * @returns {int} - целое случайное число
 */
function getRandomInRange(min, max) {
  if (min < 0 || max < 0 ) { throw 'ошибочное значение переменной';}
  if (min > max) {
    max = max + min;
    min = max - min;
    max = max - min;
  }
  const roundedMin = Math.ceil(min);
  const roundedMax = Math.floor(max);
  return Math.floor(Math.random() * (roundedMax - roundedMin + 1)) + roundedMin;
}

/**
 * функция проверяет строку на допустимую длину
 * @param {string} string - произвольная строка
 * @param {int} maxLength - допустимая длина
 * @returns {Boolean} - Булево значение
 */
function checkMaxLength(string, maxLength) {
  return string.length <= maxLength;
}

checkMaxLength();

/**
 * функция возвращает случайный элемент из заданного массива
 * @param {elements} - массив
 */
const getRandomArrayElement = (elements) => elements[getRandomInRange(0, elements.length - 1)];

export {getRandomArrayElement,getRandomInRange};
