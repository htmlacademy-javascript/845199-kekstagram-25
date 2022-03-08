const DESCRIPTIONS = [
  'Моя ласточка',
  'Красивый закат',
  'Гуляем с хорошим мальчиком',
  'Ура! Наконец-то весна после долгой зимы',
  'Разве это не прекрасно...',
  'Наша семья',
];

const NAMES = [
  'Александр',
  'Хуан Карлос',
  'Мария',
  'Федор',
  'Виктор',
  'Юлия',
  'Анна',
  'Эрих Мария',
  'Антон Санчес джуниор'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

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
  const ROUNDED_MIN = Math.ceil(min);
  const ROUNDED_MAX = Math.floor(max);
  return Math.floor(Math.random() * (ROUNDED_MAX - ROUNDED_MIN + 1)) + ROUNDED_MIN;
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

const getRandomArrayElement = (elements) => {
  return elements[getRandomInRange(0, elements.length - 1)];
};

const DESCRIPTION_ID_COUNT = 25;
const PHOTO_COUNT = 25;
const COMMENT_ID_COUNT = 100000000;

const getRandomId = (idCount) => {
  const ID_LIST = [];

  for (let i = 1; i <= idCount; i++) {
    let randomId = getRandomInRange(1, idCount);

    while (ID_LIST.includes(randomId)) {
      randomId = getRandomInRange(1, idCount);
    }

    ID_LIST.push(randomId);

    return randomId;
  }
};

const getRandomUrl = (urlCount) => {
  const URL_LIST = [];

  for (let i = 1; i <= urlCount; i++) {
    let randomUrl = getRandomInRange(1, urlCount);

    while (URL_LIST.includes(randomUrl)) {
      randomUrl = getRandomInRange(1, urlCount);
    }

    URL_LIST.push(randomUrl);

    return `photos/${randomUrl}.jpg`;
  }
};

const getRandomAvatar = () => {
  const RANDOM_AVATAR_NUMBER = getRandomInRange(1, 6);
  return `img/avatar-${RANDOM_AVATAR_NUMBER}.svg`;
};


const createRandomMessage = () => {
  const MESSAGE_LIST = [];
  for (let i = 0; i <= MESSAGES.length -1; i++) {

    let randomMessage = getRandomArrayElement(MESSAGES);

    while (MESSAGE_LIST.includes(randomMessage)) {
      randomMessage = getRandomArrayElement(MESSAGES);
    }

    MESSAGE_LIST.push(randomMessage);
    return ' ' + randomMessage;
  }
};

const createRandomDoubleMessage = () => {
  const RANDOM_DOUBLE_MESSAGE = String(Array.from({length: getRandomInRange(1, 2)}, createRandomMessage));
  return RANDOM_DOUBLE_MESSAGE.trim();
};

function createComments() {
  return ({
    id: getRandomId(COMMENT_ID_COUNT),
    avatar: getRandomAvatar(),
    message: createRandomDoubleMessage(),
    name: getRandomArrayElement(NAMES),
  });
}

const SIMILAR_COMMENTS_COUNT = getRandomInRange(1, 3);

function getSimilarComments() {
  return Array.from({length: SIMILAR_COMMENTS_COUNT}, createComments);
}

function createPhotoDescription() {
  return {
    id: getRandomId(DESCRIPTION_ID_COUNT),
    url: getRandomUrl(PHOTO_COUNT),
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInRange(15, 200),
    comments: getSimilarComments(),
  };
}

const SIMILAR_PHOTO_DESCRIPTION_COUNT = 25;

function getSimilarPhotoDescription() {
  return Array.from({length: SIMILAR_PHOTO_DESCRIPTION_COUNT}, createPhotoDescription);
}

getSimilarPhotoDescription();
