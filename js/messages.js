import {isEscapeKey} from './util.js';
import {hashtags, textDescription} from './user-form.js';

const body = document.querySelector('body');
const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const templateError = document.querySelector('#error').content.querySelector('.error');
const successUnit = templateSuccess.cloneNode(true);
const successButton = successUnit.querySelector('.success__button');
const errorUnit = templateError.cloneNode(true);
const errorButton = errorUnit.querySelector('.error__button');

const onSuccessMessageEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    successUnit.classList.add('hidden');
  }
};

const onErrorMessageEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    errorUnit.classList.add('hidden');
  }
};

const onWindowCloseErrorListener = () => {

  window.addEventListener('click', (evt) => {
    evt.stopPropagation();
    if (evt.target.contains(errorUnit)) {
      errorUnit.classList.add('hidden');
    }
  });
};

const onWindowCloseSuccessListener = () => {

  window.addEventListener('click', (evt) => {
    evt.stopPropagation();
    if (evt.target.contains(successUnit)) {
      successUnit.classList.add('hidden');
    }
  });
};

const createSuccessMessage = () => {
  body.appendChild(successUnit);
  successUnit.classList.add('hidden');
};

const createErrorMessage = () => {
  body.appendChild(errorUnit);
  errorUnit.classList.add('hidden');
};

createSuccessMessage();
createErrorMessage();

const closeSuccessMessage = () => {
  successUnit.classList.add('hidden');

  document.removeEventListener('keydown', onSuccessMessageEscKeyDown);
  window.removeEventListener('click', onWindowCloseSuccessListener);
  successButton.removeEventListener('click', () => {
    closeSuccessMessage ();
  });
};

const openSuccessMessage = () => {
  successUnit.classList.remove('hidden');

  document.addEventListener('keydown', onSuccessMessageEscKeyDown);
  window.addEventListener('click', onWindowCloseSuccessListener);
  hashtags.value = '';
  textDescription.value = '';
  successButton.addEventListener('click', () => {
    closeSuccessMessage ();
  });
};

const closeErrorMessage = () => {
  errorUnit.classList.add('hidden');

  document.removeEventListener('keydown', onErrorMessageEscKeyDown);
  window.removeEventListener('click', onWindowCloseErrorListener);
  errorButton.removeEventListener('click', () => {
    closeErrorMessage ();
  });
};

const openErrorMessage = () => {
  errorUnit.classList.remove('hidden');

  document.addEventListener('keydown', onErrorMessageEscKeyDown);
  window.addEventListener('click', onWindowCloseErrorListener);
  errorButton.addEventListener('click', () => {
    closeErrorMessage ();
  });
};

export{openErrorMessage, openSuccessMessage};
