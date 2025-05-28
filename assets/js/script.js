// nav toggle
 const toggleButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.header-nav');

  toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

// Carousel functionality
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const leftBtn = document.querySelector('.carousel-btn-left');
  const rightBtn = document.querySelector('.carousel-btn-right');
  const card = document.querySelector('.product-card');

  if (track && leftBtn && rightBtn && card) {
    const cardWidth = card.offsetWidth + 16; 

    leftBtn.addEventListener('click', () => {
      track.parentElement.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
      track.parentElement.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
  }
});
