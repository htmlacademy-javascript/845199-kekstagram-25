const getData = (onSuccess) => {
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((similarPhotos) => {
      onSuccess(similarPhotos);
      console.log(similarPhotos);
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
      if(response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch((err) => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
      console.error(err);
    });
};

export {getData, sendData};
