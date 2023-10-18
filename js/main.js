const storeOpen = document.querySelector('.store-open');
const storeModal = document.querySelector('.store');
const storeClose = document.querySelector('.store-close');

storeOpen.addEventListener('click', () => {
  storeModal.classList.add('modal');
});
storeClose.addEventListener('click', () => {
  storeModal.classList.remove('modal');
});

let tabButtons = document.querySelectorAll('.brand-tab-btn');
// console.log(tabButtons)

Array.from(tabButtons).forEach((eachButton, index) => {
  eachButton.addEventListener('click', function() {
    let tabBoxs = document.querySelectorAll('.brand-slide');
    for (var i = 0; i < tabBoxs.length; i++) {
        tabBoxs[i].classList.remove("on");
        tabButtons[i].classList.remove("on");
    }
    tabBoxs[index].classList.add("on");
    this.classList.add("on");
  })
});
tabButtons[0].click();


var swiper = new Swiper(".visual-slide", {
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".visual-slide .swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".visual-slide .swiper-button-next",
    prevEl: ".visual-slide .swiper-button-prev",
    aria: true
  },
});
var swiper = new Swiper(".culture-slide", {
  slidesPerView: 3,
  spaceBetween: 8,
  loop: true,
  freeMode: true,
  navigation: {
    nextEl: ".culture-slide .swiper-button-next",
    prevEl: ".culture-slide .swiper-button-prev",
    aria: true
  },
});
var swiper = new Swiper(".popup-slide", {
  slidesPerView: 4,
  spaceBetween: 9,
  loop: true,
  navigation: {
    nextEl: ".popup-slide .swiper-button-next",
    prevEl: ".popup-slide .swiper-button-prev",
  },
});
var swiper = new Swiper(".banner-slide", {
  slidesPerView: 2,
  spaceBetween: 11,
  loop: true,
  navigation: {
    nextEl: ".banner-slide .swiper-button-next",
    prevEl: ".banner-slide .swiper-button-prev",
  },
});
var swiper = new Swiper(".brand-slide", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".brand-slide .swiper-button-next",
    prevEl: ".brand-slide .swiper-button-prev",
  },
});