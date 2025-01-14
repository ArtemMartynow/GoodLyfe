const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
})

const swiperSecond = new Swiper('.swiper-second', {
  slidesPerView: 1.2,
  spaceBetween: 26,
  loop: false,
  slidesPerGroup: 1,
  centeredSlides: true,
})