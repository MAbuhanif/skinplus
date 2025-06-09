// nav toggle for mobile menu
 const toggleButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.header-nav');

  // Toggle navigation visibility on mobile
  toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

// carousel functionality
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const leftBtn = document.querySelector('.carousel-btn-left');
  const rightBtn = document.querySelector('.carousel-btn-right');
  const card = document.querySelector('.product-card');

  if (track && leftBtn && rightBtn && card) {
    const cardWidth = card.offsetWidth + 16; // 16px gap between cards

     // Scroll left by one card
    leftBtn.addEventListener('click', () => {
      track.parentElement.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
     // Scroll right by one card
    rightBtn.addEventListener('click', () => {
      track.parentElement.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
  }
});
