//EXPANDING STICKY HEADER
document.addEventListener("DOMContentLoaded", function (event) {

  window.onscroll = function () {
    var header_navbar = document.querySelector("#navParent");  //matches the parent div for the menu
    var sticky = header_navbar.offsetTop;

    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky-collapse");
    } else {
      header_navbar.classList.remove("sticky-collapse");
    }



    // show or hide the back-top-top button
    var backToTop = document.querySelector(".back-to-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  };


});