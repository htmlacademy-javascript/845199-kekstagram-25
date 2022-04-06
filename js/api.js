const getData = (onSuccess) => {
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((similarPhotos) => {
      onSuccess(similarPhotos);
      console.log(similarPhotos);
    });
};

export {getData};
