import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCommentsList = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const socialCommentsLoader = bigPicture.querySelector('.comments-loader');

const getFullsizeModal = (url, likes, comments, description) => {
  bigPictureImage.src = url;
  likesCount.textContent = likes;
  socialCaption.textContent = description;

  if (comments.length >= 5) {
    socialCommentCount.innerHTML = `5 из <span class="comments-count">${comments.length}</span> комментариев`;
  } else {
    socialCommentCount.innerHTML = `${comments.length} из <span class="comments-count">${comments.length}</span> комментариев`;
  }

  if (comments.length <= 5) {
    socialCommentsLoader.classList.add('hidden');
  } else {
    socialCommentsLoader.classList.remove('hidden');
  }

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

  socialCommentsList.innerHTML = '';
  socialCommentsList.appendChild(fragment);

  const hidingComments = () => {
    const socialComments = socialCommentsList.querySelectorAll('.social__comment');
    for (let i = 0; i < comments.length; i++) {
      if (i > 4) {
        socialComments[i].classList.add('hidden');
      } else {
        socialComments[i].classList.remove('hidden');
      }
    }
  };

  hidingComments();
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
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUserModal () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeydown);
}

export {getFullsizeModal, openUserModal, closeUserModal, closeButton, body};
