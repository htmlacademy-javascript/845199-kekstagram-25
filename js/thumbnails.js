import {getFullsizeModal, openUserModal, closeUserModal, closeButton} from './fullsize-modal.js';
import './api.js';

const renderPhotos = (similarPhotos) => {

  const templateFragment = document.querySelector('#picture').content; // Находим фрагмент HTML документа с содержимым темплейта
  const templatePicture = templateFragment.querySelector('.picture'); // Находим необходимую часть в фрагменте, которую будем "размножать"
  const fragment = document.createDocumentFragment(); // Создаем временное "хранилище", куда будем "складывать" создаваемые по шаблону картинки
  const picturesList = document.querySelector('.pictures'); // В этот список мы в итоге добавим содержимое временного "хранилища"

  similarPhotos.forEach(({url, likes, comments}) => {
    const similarPicture =  templatePicture.cloneNode(true);
    similarPicture.querySelector('.picture__img').src = url;
    similarPicture.querySelector('.picture__likes').textContent = likes;
    similarPicture.querySelector('.picture__comments').textContent = comments.length;

    similarPicture.addEventListener('click', () => {
      getFullsizeModal(url, likes, comments);
      openUserModal();

      closeButton.addEventListener('click', () => {
        closeUserModal ();
      });
    });

    fragment.appendChild(similarPicture);
  });

  picturesList.appendChild(fragment);
};

export {renderPhotos};
