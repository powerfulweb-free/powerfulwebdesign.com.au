{/* <script type="text/javascript"> */}
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
    });
  }


  function formValidate() { //lazy loaded
    'use strict';
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
      });
  }


  //check brackets dont have spaces between
  // //script is called by external recaptcha script
  // {{ if .Site.IsServer }}
  // var gKey = "{{ .Site.Params.recaptcha_local }}"
  // {{ else }}
  // var gKey = "{{ .Site.Params.recaptcha_public }}"
  // {{ end }}
  // var onloadCallback = function () {
  //   grecaptcha.render('g-recaptcha', {
  //     'sitekey': gKey,
  //     'callback': recaptchaCallback,
  //     'data-expired-callback': recaptchaExpired,
  //     'data-error-callback': recaptchaExpired
  //   });
  // };



  //when recaptcha validates, add the array to the hidden input so form will validate
  function recaptchaCallback() { //called by recaptcha
    var formRecaptcha = document.getElementById('form_recaptcha');
    var response = grecaptcha.getResponse();
    formRecaptcha.value = response;
    console.log('recaptcha has passed client side validation');
  }
  //when recaptcha expires, clear the hidden field so form wont validate
  function recaptchaExpired() { //called by recaptcha
    var formRecaptcha = document.getElementById('form_recaptcha');
    formRecaptcha.value = '';
    console.log('recaptcha expired');
  }

  function loadScriptRecaptcha() { //lazy loaded
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.google.com/recaptcha/api.js';
    head.appendChild(script);
    // remove focus to avoid js error:
    document.getElementById('form_name').removeEventListener('focus', loadScriptsOnFocus);
  }
  function loadScriptJquery() { //lazy loaded
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
    head.appendChild(script);
    // remove focus to avoid js error:
    document.getElementById('form_name').removeEventListener('focus', loadScriptsOnFocus);
  }
  // Function that loads scripts on form input focus
  function loadScriptsOnFocus() {
    console.log('scripts loaded');
    loadScriptRecaptcha();
    loadScriptJquery();

  }
  
 
  window.addEventListener('DOMContentLoaded', (event) => {
    formValidate();
    // add initial event listener to the form name input
    document.getElementById('form_name').addEventListener('focus', loadScriptsOnFocus, false);

  });
// </script>
// <!-- <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
// async defer>
// </script> -->

// <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> -->