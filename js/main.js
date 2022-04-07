import {renderPhotos} from'./thumbnails.js';
import {activateValidationForm} from './user-form.js';
import {getData} from './api.js';

const cb = (similarPhotos) => {
  renderPhotos(similarPhotos);
};

getData(cb);


activateValidationForm();
