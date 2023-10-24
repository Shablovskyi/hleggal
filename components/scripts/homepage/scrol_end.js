// Находим кнопку по классу
const scrollButton = document.querySelector('.scroll_button');

// Добавляем обработчик события клика на кнопку
scrollButton.addEventListener('click', function() {
  // Прокручиваем до конца страницы
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});
