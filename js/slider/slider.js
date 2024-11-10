function initSwiper() {
 const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  lazyPreloadPrevNext: false,

  navigation: {
   nextEl: '.catalog__next-icon',
  },

  // And if we need scrollbar
  scrollbar: {
   el: '.swiper-scrollbar',
  },
  breakpoints: {
   900: {
    slidesPerView: 3,
   },
  },
 });
 swiper.slideTo(100, 0);
}
const swiper = new Swiper('.swiper', {
 // Optional parameters
 direction: 'horizontal',
 loop: true,
 slidesPerView: 'auto',
 spaceBetween: 20,
 lazyPreloadPrevNext: false,

 navigation: {
  nextEl: '.catalog__next-icon',
 },

 // And if we need scrollbar
 scrollbar: {
  el: '.swiper-scrollbar',
 },
 breakpoints: {
  900: {
   slidesPerView: 3,
  },
 },
});
initSwiper();
