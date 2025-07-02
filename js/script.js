  const header = document.querySelector('.header');

  function updateHeaderClass() {
    if (window.scrollY > 80) {
      header.classList.remove('transparent');
      header.classList.add('solid');
    } else {
      header.classList.remove('solid');
      header.classList.add('transparent');
    }
  }

  // Проверка при загрузке страницы
  window.addEventListener('load', updateHeaderClass);

  // Проверка при скролле
  window.addEventListener('scroll', updateHeaderClass);
