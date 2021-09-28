
//Library for shrinking nav menu and show scroll to top button on scroll down 
//

// scroll to top button needs to have class="toggle-content" or toggle-content-icon-fade (toggle-content-fade is not compadible with svg with border and bg)
//
// IMPLEMENTATION
//
// import { stickyCollapse, topNav } from './assets/onScroll.js';
// stickyCollapse({
//   distance: 50,
//   parentId: 'jsNavParent',
//   collapseClass: 'sticky-collapse',
// });
// topNav({
//   distance: 300,
//   parentId: 'jsTopNav',
// });
// require('./assets/visibility.css');
//


export function stickyCollapse({  //defaults
    distance = 50,
    parentId = 'jsNavParent',
    collapseClass = 'sticky-collapse',
  } = {}) {

  window.addEventListener('scroll', showOnScroll);

  function showOnScroll() {
    var div = document.getElementById(parentId);  //id of nav bar parent div
    if (document.body.scrollTop > distance || document.documentElement.scrollTop > distance) {
      div.classList.add(collapseClass);
    } else {
      div.classList.remove(collapseClass);
    }
  }
}

export function topNav({  //defaults
    distance = 300,
    parentId = 'jsTopNav',
  } = {}) {

  window.addEventListener('scroll', showOnScroll);
  const badge = document.getElementById(parentId);  //id of nav bar parent div
  const show = function (elem) {
    elem.classList.add('is-visible');
  };
  const hide = function (elem) {
    elem.classList.remove('is-visible');
  };
  function showOnScroll() {
    if (document.body.scrollTop > distance || document.documentElement.scrollTop > distance) {
      show(badge);
    } else {
      hide(badge);
    }
  }
}


