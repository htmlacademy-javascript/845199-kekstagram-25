import {isEscapeKey} from './util.js';
import {body} from './fullsize-modal.js';

const uploadFile = document.querySelector('#upload-file');
const uploadForm = document.querySelector('.img-upload__overlay');
const closeButtonUploadForm = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const hashtags = form.querySelector('.text__hashtags');

const onFormEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    uploadForm.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

function openUploadForm () {
  uploadForm.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onFormEscKeydown);
}

function closeUploadForm () {
  uploadForm.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onFormEscKeydown);
}

function userUploadFile () {
  const files = userUploadFile.files;
  uploadFile.files = files[0].name;
}

uploadFile.addEventListener('change',openUploadForm);
uploadFile.addEventListener('change',userUploadFile);

closeButtonUploadForm.addEventListener('click', () => {
  closeUploadForm ();
});

const pristine = new Pristine(form,{
  classTo: 'text__description-label',
  errorTextParent: 'text__description-label',
  errorTextClass: 'text__description-error-text',
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

function validateHashtag(value) {
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  const result = re.test(value);
  return result;
}

pristine.addValidator(
  hashtags,
  validateHashtag,
  'До 19 букв и цифр без пробелов и знаков после решетки'
);
