setTimeout(() => {
  const swiper = new Swiper(".trusted-by-section__swiper-1", {
    loop: true,
    speed: 4000,
    slidesPerView: "auto",
    effect: "slide",
    freeMode: true,
    spaceBetween: 24,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: true,
    },
  })

  const swiperBottom = new Swiper(".trusted-by-section__swiper-2", {
    loop: true,
    speed: 4000,
    slidesPerView: "auto",
    effect: "slide",
    freeMode: true,
    spaceBetween: 24,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: true,
      reverseDirection: true,
    },
  })
}, 500)
