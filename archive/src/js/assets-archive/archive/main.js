

//offset links to account for fixed navbar
/*
$('.nav-link').click(function(e){
  let divCoords = $(e.target.hash).offset();
  let height = $('header').height();
  e.preventDefault();
  window.scrollTo({
  left: divCoords.left, 
  top: divCoords.top - height,
  behavior: 'smooth'
  });
});
*/

// SMOOTH SCROLLING PLUS OFFSET FOR FIXED NAV
function smoothScroll() {
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .on('click', function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        // - 70 is the offset/top margin
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 70
        }, 800, function () {
          // Add hash (#) to URL when done scrolling (default click behavior), without jumping to hash
          if (history.replaceState) {
            history.replaceState(null, null, hash);
          } else {
            window.location.hash = hash;
          }
        });
        return false;
      } // End if
    });
}

$(function () {
  //smoothScroll();
});