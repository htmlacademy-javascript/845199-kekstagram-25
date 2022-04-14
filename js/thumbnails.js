import {getFullsizeModal, openUserModal, onSocialCommentsLoaderClick, socialCommentsLoader, closeUserModal, closeButton} from './fullsize-modal.js';

const renderPhotos = (similarPhotos) => {

  const templateFragment = document.querySelector('#picture').content; // Находим фрагмент HTML документа с содержимым темплейта
  const templatePicture = templateFragment.querySelector('.picture'); // Находим необходимую часть в фрагменте, которую будем "размножать"
  const fragment = document.createDocumentFragment(); // Создаем временное "хранилище", куда будем "складывать" создаваемые по шаблону картинки
  const picturesList = document.querySelector('.pictures'); // В этот список мы в итоге добавим содержимое временного "хранилища"
  const pictures = document.querySelectorAll('.picture');

  const removeAllPictures = () => {
    for (let i = 0; i < pictures.length; i++) {
      pictures[i].remove();
    }
  };

  removeAllPictures();

  similarPhotos.forEach(({url, likes, comments, description}) => {
    const similarPicture =  templatePicture.cloneNode(true);
    similarPicture.querySelector('.picture__img').src = url;
    similarPicture.querySelector('.picture__likes').textContent = likes;
    similarPicture.querySelector('.picture__comments').textContent = comments.length;

    similarPicture.addEventListener('click', () => {
      getFullsizeModal(url, likes, comments, description);
      openUserModal();

      closeButton.addEventListener('click', () => {
        closeUserModal ();
        socialCommentsLoader.removeEventListener('click', onSocialCommentsLoaderClick);
      });
    });

    fragment.appendChild(similarPicture);
  });

  picturesList.appendChild(fragment);
};

export {renderPhotos};
