// // JS ASSETS
// import { stickyCollapse,
//    // topNav 
//   } from './on-scroll/index';


// stickyCollapse({
//   distance: 50,
//   // parentId: 'js-navParent',
//   // collapseClass: 'is-collapsed',
// });
// // topNav({
// //   distance: 300,
// //   parentId: 'js-topNav',
// //   hiddenClass: 'is-hidden',
  
// // });


// // see index.scss for assets scss import


import contactForm from './contact-form-xhr/src';
contactForm('js-contactForm', {
  formAction: 'https://mail.powerfulwebdesign.com.au/pwd.php', 
  grecaptchaKey: '6LddhmQaAAAAAGmtBf6WSeWpu3HzZTgaAeGFrsii', 
  hiddenClass: 'd-none',
  grecaptchaLocation: 'bottomright',
});

import togglerIconMorph from './toggler-icon-morph/src';
togglerIconMorph();
