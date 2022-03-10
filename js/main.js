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

const DESCRIPTION_ID_COUNT = 25;
const PHOTO_COUNT = 25; // количество доступных фотографий в галлерее
const COMMENT_ID_COUNT = 100000000;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const SIMILAR_PHOTO_COUNT = 25; // количество выводимых фотографий
const idListPhotos = [];
const idListComments = [];
const urlList = [];

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

const getRandomArrayElement = (elements) => elements[getRandomInRange(0, elements.length - 1)];

const getRandomIdPhotos = (idCount) => {
  let randomIdPhotos = getRandomInRange(1, idCount);

  while (idListPhotos.includes(randomIdPhotos)) {
    randomIdPhotos = getRandomInRange(1, idCount);
  }

  idListPhotos.push(randomIdPhotos);

  return randomIdPhotos;
};

const getRandomIdComments = (idCount) => {
  let randomIdComments = getRandomInRange(1, idCount);

  while (idListComments.includes(randomIdComments)) {
    randomIdComments = getRandomInRange(1, idCount);
  }

  idListComments.push(randomIdComments);

  return randomIdComments;
};

const getRandomUrl = (urlCount) => {
  let randomUrl = getRandomInRange(1, urlCount);

  while (urlList.includes(randomUrl)) {
    randomUrl = getRandomInRange(1, urlCount);
  }

  urlList.push(randomUrl);

  return `photos/${randomUrl}.jpg`;
};

const getRandomAvatar = () => {
  const RANDOM_AVATAR_NUMBER = getRandomInRange(1, 6);
  return `img/avatar-${RANDOM_AVATAR_NUMBER}.svg`;
};

const createRandomDoubleMessage = () => {
  const MESSAGE_LIST = [];
  const createRandomMessage = () => {

    for (let i = 0; i <= MESSAGES.length -1; i++) {

      let randomMessage = getRandomArrayElement(MESSAGES);

      while (MESSAGE_LIST.includes(randomMessage)) {
        randomMessage = getRandomArrayElement(MESSAGES);
      }

      MESSAGE_LIST.push(randomMessage);
      return ` ${  randomMessage}`;
    }
  };
  const RANDOM_DOUBLE_MESSAGE = String(Array.from({length: getRandomInRange(1, 2)}, createRandomMessage));
  return RANDOM_DOUBLE_MESSAGE.trim();
};

function createComments() {
  return ({
    id: getRandomIdComments(COMMENT_ID_COUNT),
    avatar: getRandomAvatar(),
    message: createRandomDoubleMessage(),
    name: getRandomArrayElement(NAMES),
  });
}

function getSimilarComments() {
  const SIMILAR_COMMENTS_COUNT = getRandomInRange(1, 3);
  return Array.from({length: SIMILAR_COMMENTS_COUNT}, createComments);
}

function createPhoto() {
  return {
    id: getRandomIdPhotos(DESCRIPTION_ID_COUNT),
    url: getRandomUrl(PHOTO_COUNT),
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInRange(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
    comments: getSimilarComments(),
  };
}

function getSimilarPhoto(photosCount) {
  return Array.from({length: photosCount}, createPhoto);
}

getSimilarPhoto(SIMILAR_PHOTO_COUNT);