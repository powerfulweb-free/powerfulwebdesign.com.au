
//import './vendors.js';
//JS ASSETS
import { stickyCollapse, topNav } from '@powerfulwebdesign/on-scroll';
stickyCollapse({
  distance: 50,
  parentId: 'js-nav-parent',
  collapseClass: 'sticky-collapse',
});
topNav({
  distance: 300,
  parentId: 'js-top-nav',
});

import { contactForm } from '@powerfulwebdesign/contact-form';
contactForm({
  formID: 'js-contact-form',
  successID: 'successMessage',
  errorID: 'errorMessage',
  formAction: 'https://forms.un-static.com/forms/483c687e9662162c4ed34386296b8e7a7d42ad9a/ajax',
  submitButtonID: 'submit',
  grecaptchaKey: '6LddhmQaAAAAAGmtBf6WSeWpu3HzZTgaAeGFrsii',
  grecaptchaLocation: 'bottomleft',
});

//see index.scss for assets scss import