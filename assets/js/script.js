// nav toggle
 const toggleButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.header-nav');

  toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
  });