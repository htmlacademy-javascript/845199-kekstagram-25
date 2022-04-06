import {renderPhotos} from'./thumbnails.js';
import {activateValidationForm} from './user-form.js';
import {getData} from './api.js';
//import {getSimilarPhoto, SIMILAR_PHOTO_COUNT} from'./data.js';

//const photosData = getSimilarPhoto(SIMILAR_PHOTO_COUNT);

getData((similarPhotos) => {
  renderPhotos(similarPhotos);
});

activateValidationForm();
