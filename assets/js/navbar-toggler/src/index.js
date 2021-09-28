// import togglerIconMorph from './toggler-icon-morph/src';
// togglerIconMorph();

'use strict';
export default (navbar = 0) => {
  // create additional toggler span
  const span = document.createElement('span');
  span.className = 'navbar-toggler-icon';
  // get nth navbar in DOM, select navbar-toggler class
  const navbarToggler = document.getElementsByClassName('navbar')[navbar].getElementsByClassName('navbar-toggler')[0];
  // append to parent once
  navbarToggler.appendChild(span);
  // clone the span and append
  const span2 = span.cloneNode(true);
  navbarToggler.appendChild(span2);

  // add &nbsp; 
  //const navbarTogglerIconList = navbarToggler.getElementsByClassName('navbar-toggler-icon');
  // for (let span of navbarTogglerIconList) {
  //   span.innerHTML = '&nbsp;';
  // }
  // add event listener to parent
  navbarToggler.addEventListener('click', () => {
      navbarToggler.classList.toggle('is-expanded');
    }, false);

  // Create stylesheet
  const style = document.createElement('style');
  style.innerHTML = `
    .navbar-toggler .navbar-toggler-icon{
      width:30px;
      height:2px;
      display:block;
      margin:5px 0;
      position:relative;
      transition:all 0.3s ease-out 0s
    }
    .navbar-toggler.is-expanded .navbar-toggler-icon:nth-of-type(1){
      transform:rotate(45deg);top:7px
    }
    .navbar-toggler.is-expanded .navbar-toggler-icon:nth-of-type(2){
      opacity:0
    }
    .navbar-toggler.is-expanded .navbar-toggler-icon:nth-of-type(3){
      transform:rotate(-45deg);top:-7px
    }`;
  // append to document head
  document.head.appendChild(style);
};
