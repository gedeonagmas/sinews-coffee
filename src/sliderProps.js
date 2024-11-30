import SwiperCore, {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Virtual,
} from "swiper";
SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
]);

export const caseStudyProps = {
  loop: true,
  spaceBetween: 30,
  autoplay: true,
  speed: 500,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};
export const brandListProps = {
  loop: true,
  //   spaceBetween: 30,
  autoplay: true,
  speed: 500,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
};
export const brandListProps2 = {
  loop: true,
  //   spaceBetween: 30,
  autoplay: true,
  speed: 500,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};
export const testimonial_list_slider = {
  loop: true,
  //   spaceBetween: 30,
  autoplay: true,
  speed: 500,
  pagination: {
    el: ".owl-dots",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

export const heroSlider = {
  loop: true,
  //   spaceBetween: 30,
  autoplay: true,
  speed: 500,
};
