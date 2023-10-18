var swiper = new Swiper(".banner-slide", {
  slidesPerView: 2,
  spaceBetween: 12,
  loop: true,
  navigation: {
    nextEl: ".banner-slide .swiper-button-next",
    prevEl: ".banner-slide .swiper-button-prev",
  },
});