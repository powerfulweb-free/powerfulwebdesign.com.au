import {
  // Alert, // Control alerts
  // Button, // complex button toggles etc
  // Carousel, // required for carousel
  Collapse, // required for mobile collapse menu and accordion
  // Dropdown, // not required for navbar only custom dropdown
  // Modal, // modal popups
  // Popover, // popovers
  ScrollSpy, // auto update active link for 1 page sites
  // Tab, //
  // Toast, //
  // Tooltip , //
} from 'bootstrap';

// scrollspy init
document.body.style.position = 'relative';
const scrollSpy = new ScrollSpy(document.body, {
  target: '.navbar',
});

import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
import 'lazysizes/plugins/native-loading/ls.native-loading';
lazySizes.cfg.nativeLoading = {
  setLoadingAttribute: false, // adds loading="lazy"
  disableListeners: true, // disables event listeners
};



