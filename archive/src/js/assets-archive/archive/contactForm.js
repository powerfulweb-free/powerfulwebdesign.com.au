

//AJAX submission
function submitContactForm() {  //content variables
  var name = $('#form_name').val();
  var email = $('#form_email').val();
  var organisation = $('#form_organisation').val();
  var phone = $('#form_phone').val();
  var message = $('#form_message').val();
  // message content
  var postData = {
    name: name,
    organisation: organisation,
    phone: phone,
    email: email,
    message: message
  }; // end postData variable
  postData['g-recaptcha-response'] = grecaptcha.getResponse();
  //send function
  $.ajax({
    url: 'https://forms.un-static.com/forms/483c687e9662162c4ed34386296b8e7a7d42ad9a/ajax',
    type: 'post',
    dataType: 'json',
    data: postData,
    success: function () {  //if sent   // removed (Data) from ()
      $("#successMessage").fadeIn(400);
    },
    error: function () { //if not sent 
      $("#failMessage").fadeIn(400); // removed (Data) from ()
    }
  });  // end AJAX submission
} // end submitContactForm()

// JavaScript for disabling form submissions if there are invalid fields
function formValidate() {
  'use strict';
  //console.log('form validate loaded');
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {   //if not valid
          event.preventDefault();
          event.stopPropagation();
        } else { //if valid
          event.preventDefault();
          submitContactForm();
        }
        form.classList.add('was-validated'); //add class to form
      }, false);
    }); //end vaidation
} //end formValidate()

// Function that loads scripts on form input focus
function loadScriptsOnFocus() {
  var head = document.getElementsByTagName('head')[0];
  //reCaptcha
  var script1 = document.createElement('script');
  script1.type = 'text/javascript';
  script1.src = 'https://www.google.com/recaptcha/api.js';
  head.appendChild(script1);
  // remove focus to avoid js error:
  document.getElementById('form_name').removeEventListener('focus', loadScriptsOnFocus);
  //console.log('reCaptcha loaded');
}
// add initial event listener to the form name input
function loadScriptsListen() {
  document.getElementById('form_name').addEventListener('focus', loadScriptsOnFocus, false);
}

$(function () { //document.ready
  formValidate();
  //loadScriptsListen();
}); // end document.ready() 
