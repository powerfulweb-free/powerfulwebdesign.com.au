//Bootstrap Exports: 

//
import {
  //Alert, //Control alerts
  //Button, // complex button toggles etc
  //Carousel, // required for carousel
  Collapse, // required for mobile collapse menu
  //Dropdown, // not required for navbar only custom dropdown
  //Modal, // modal popups
  //Popover, // popovers
  ScrollSpy, // auto update active link for 1 page sites
  //Tab, //
  //Toast, //
  //Tooltip , //
} from 'bootstrap';

//scrollspy init
document.body.style.position = 'relative';
var scrollSpy = new ScrollSpy(document.body, {
  target: '#jsNavParent',
});

//import './vendors.scss';  // noscript support
//the following is required
//<html class="no-js"> 
//<head>
//<script>document.documentElement.className = document.documentElement.className.replace("no-js", "js");</script> 
//</head>

import 'lazysizes';
import 'lazysizes/plugins/native-loading/ls.native-loading';
lazySizes.cfg.nativeLoading = {
  setLoadingAttribute: true,  //adds loading="lazy"
  disableListeners: true, // disables event listeners 
};

import { Swiper, Pagination, Autoplay } from 'swiper/core';
Swiper.use([Pagination, Autoplay]);


//CSS IMPORT MOVED TO SCSS index file to use BS variables
const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 3500,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});



// import 'aos/dist/aos.css'; //moved to vendors.scss

// import AOS from 'aos';
// AOS.init({
//   duration: 1000, // time/speed
//   easing: 'ease-in-out',
//   once: true,
//   mirror: false,
//   delay: 100,  // default delay if none specified
//   //disable: 'mobile'
//   disable: window.innerWidth < 768 // < below bootstrap MD
// });
