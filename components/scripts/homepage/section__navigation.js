// Находим все элементы с классом "navigation_item__link"
const links = document.querySelectorAll('.navigation_item__link');

// Находим блок "section__navigation_about_us"
const aboutUsSection = document.querySelector('.section__navigation_about_us');

const contentData = {
  consistent: {
    title: 'Consistent',
    paragraph: 'Content for Consistent.'
  },
  customerOriented: {
    title: 'Customer Oriented',
    paragraph: 'Content for Customer Oriented.'
  },
  innovative: {
    title: 'Innovative',
    paragraph: 'Content for Innovative.'
  },
  businessOriented: {
    title: 'Business Oriented',
    paragraph: 'Content for Business Oriented.'
  }
};

// Сохраняем изначальное содержимое блока "section__navigation_about_us" в переменной
const originalContent = {
  title: aboutUsSection.querySelector('.navigation_about_us_title').textContent,
  paragraph: aboutUsSection.querySelector('.navigation_about_us_paragraf').textContent
};

// Добавляем обработчик события клика к каждому элементу
links.forEach(function(link) {
  link.addEventListener('click', function() {
    // Убираем класс "yourClassName" у всех элементов
    links.forEach(function(otherLink) {
      otherLink.classList.remove('navigation_item__active');
    });

    // Восстанавливаем изначальное содержимое при клике на первый элемент
    if (link === links[0]) {
      aboutUsSection.querySelector('.navigation_about_us_title').textContent = originalContent.title;
      aboutUsSection.querySelector('.navigation_about_us_paragraf').textContent = originalContent.paragraph;
    } else {
      // Изменяем содержимое блока "section__navigation_about_us" для остальных элементов
      const dataContent = link.getAttribute('data-content');
      aboutUsSection.querySelector('.navigation_about_us_title').textContent = contentData[dataContent].title;
      aboutUsSection.querySelector('.navigation_about_us_paragraf').textContent = contentData[dataContent].paragraph;
    }

    // Добавляем класс "yourClassName" только к текущему элементу
    link.classList.add('navigation_item__active');
  });
});

