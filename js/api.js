import {showAlert} from './util.js';

const getData = (onSuccess) => {
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((similarPhotos) => {
      if (similarPhotos.length) {
        onSuccess(similarPhotos);
      } else {
        showAlert('Ошибка загрузки данных');
      }
    })
    .catch(() => {
      showAlert('Ошибка загрузки изображений');
    });
};

const sendData = (onSuccess, onFail, FormData) => {
  fetch(
    'https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      type: 'multipart/form-data',
      body: FormData,
    },
  )

    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail(showAlert('Не удалось отправить форму. Попробуйте ещё раз'));
      }
    })
    .catch(() => {
      onFail(showAlert('Не удалось отправить форму. Попробуйте ещё раз'));
    });
};

export {getData, sendData};
