  const swiper = new Swiper('.swiper', {
    loop: true, // Бесконечный цикл
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000, // Автопрокрутка каждые 3 секунды
    },
  })
