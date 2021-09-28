// @import 'aos/dist/aos.css'; //moved to vendors.scss

import AOS from 'aos';
// AOS.init({
//   duration: 1000, // time/speed
//   easing: 'ease-in-out',
//   once: true,
//   mirror: false,
//   delay: 100,  // default delay if none specified
//   //disable: 'mobile'
//   disable: window.innerWidth < 768 // < below bootstrap MD
// });
AOS.init({
  delay: 100,  // default delay if none specified (added)
  duration: 1000, // time/speed
  easing: 'ease-in-out',
  once: true,
  mirror: false,
  //disable: window.innerWidth < 768, // < below bootstrap MD (Added)
})