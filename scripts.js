// Находим кнопку, на которую будем нажимать
const buttonCatalog = document.querySelector('.button-catalogue');

// Находим меню, которое скрыто
const navigationCategoryContainer = document.querySelector('.navigation-category-container');

// Находим иконки плюс и минус внутри кнопки
const buttonIconPlus = buttonCatalog.querySelector('.icon-plus');
const buttonIconMinus = buttonCatalog.querySelector('.icon-minus');


// Добавляем действие клика на кнопку
buttonCatalog.addEventListener('click', () => {

  // При нажатии на кнопку переключаем класс visibility-container у найденных элементов
  navigationCategoryContainer.classList.toggle('visibility-container');
  buttonIconPlus.classList.toggle('visibility-container');
  buttonIconMinus.classList.toggle('visibility-container');
});
