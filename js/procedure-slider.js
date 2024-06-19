const swiper = new Swiper(".swiper-container", {
  loop: true, // для безпереривного листання
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination", // для крапкоподібних кнопок гортання
  },
  navigation: {
    nextEl:
      ".procedure-section__button.next" /** для кнопки стрілки "наступне зображення"*/,
    prevEl:
      ".procedure-section__button.prev" /**для кнопки стрілки "попереднє зображення"*/,
  },
});
