
const swiper = new Swiper('.reviews-section__swiper', {
  // loop: true,

  slidesPerView: 'auto',
  spaceBetween: 24,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-section__nav_next',
    prevEl: '.reviews-section__nav_prev',
    disabledClass: 'disabled',
  },
});
