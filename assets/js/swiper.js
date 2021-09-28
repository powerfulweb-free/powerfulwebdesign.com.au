

// swiper  
// css imported in vendors.scss
import { Swiper, Pagination, Autoplay } from 'swiper/core';
Swiper.use([Pagination, Autoplay]);

new Swiper('.testimonials-swiper', {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    //type: 'bullets',
    clickable: true,
  },
});