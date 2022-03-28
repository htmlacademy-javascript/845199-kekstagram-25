import {getSimilarPhoto, SIMILAR_PHOTO_COUNT} from'./data.js';
import {renderPhotos} from'./thumbnails.js';
import './user-form.js';

const photosData = getSimilarPhoto(SIMILAR_PHOTO_COUNT);

renderPhotos(photosData);
