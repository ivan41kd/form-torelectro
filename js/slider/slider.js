let swiper;

const initSlider = () => {
 if (swiper) {
  swiper.destroy(true, true);
 }

 swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  initialSlide: 0,
  navigation: {
   prevEl: '.catalog__prev-icon',
   nextEl: '.catalog__next-icon',
  },
  scrollbar: {
   el: '.swiper-scrollbar',
  },
 });
};
