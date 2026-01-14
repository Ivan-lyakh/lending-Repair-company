new Swiper('.slider__body', {
  slidesPerView: 3,
  spaceBetween: 12,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 4,
    },
    600: {
      slidesPerView: 5,
    },
    800: {
      slidesPerView: 6,
    },
    1024: {
      slidesPerView: 7,
    }
  }
});


new Swiper('.new-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
      centeredSlides: false, // обычно на десктопе центр не нужен
    },
  },

  navigation: {
    nextEl: '.new-slider__next',
    prevEl: '.new-slider__prev',
  },
});
