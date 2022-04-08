import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const socialCommentsLoader = bigPicture.querySelector('.comments-loader');
const commentsCount = socialCommentCount.querySelector('.comments-count');

const getFullsizeModal = (url, likes, comments, description) => {
  bigPictureImage.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  socialCaption.textContent = description;

  const fragment = document.createDocumentFragment();

  comments.forEach(({avatar, message, name}) => {
    const socialCommentsItem = document.createElement('li');

    socialCommentsItem.classList.add('social__comment');

    const socialCommentsImage = document.createElement('img');

    socialCommentsImage.classList.add('social__picture');
    socialCommentsImage.src = avatar;
    socialCommentsImage.alt = name;

    socialCommentsItem.appendChild(socialCommentsImage);

    const socialText = document.createElement('p');
    socialText.classList.add('social__text');
    socialText.textContent = message;

    socialCommentsItem.appendChild(socialText);

    fragment.appendChild(socialCommentsItem);
  });

  socialComments.innerHTML = '';
  socialComments.appendChild(fragment);
};

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};


function openUserModal () {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  socialCommentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUserModal () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeydown);
}

export {getFullsizeModal, openUserModal, closeUserModal, closeButton, body};
