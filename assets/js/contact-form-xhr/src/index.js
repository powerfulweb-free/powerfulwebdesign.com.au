'use strict';
/** @module contact-form-xhr */
/**
 * default function
 * @param {string} formId - ID of form to collect inputs from
 * @param {string} formAction - URL to post form to
 * @param {integer} formTimeout - Time to wait before timeout (milliseconds)
 * @param {string} submitId - ID of the form's submit button
 * @param {string} statusId - ID of status message div
 * @param {string} spinnerId - ID of spinner div
 * @param {string} alertClass - CSS class used to display an alert box
 * @param {string} successClass - CSS modifier class for success alert
 * @param {string} errorClass - CSS class used to modify alert into a error alert
 * @param {string} hiddenClass - CSS class used to hide a div (non BS)
 * @param {string} grecaptchaKey - Google recaptcha public/site key
 * @param {string} grecaptchaLocation - Recaptcha location (bottomright, bottomleft, or inline)
 */

export default (
  formId,
  {
    formAction = '',
    grecaptchaKey = '',
    formTimeout = 8000,
    submitId = 'js-submit',
    statusId = 'js-statusMessage',
    spinnerId = 'js-load',
    alertClass = 'alert', // BS5
    successClass = 'alert-success', // BS5
    errorClass = 'alert-danger', // BS5
    hiddenClass = 'is-hidden', // custom css class dependency
    grecaptchaLocation = 'bottomleft',
  } = {}
) => {
  const id = (elem) => {
    return document.getElementById(elem); //shorthand used throghout
  };
  // first input in the form
  var firstInput = document.getElementById(formId).elements[0];

  //add event listener to load grecaptcha
  firstInput.addEventListener(
    'focus',
    function gLoad() {
      const head = document.getElementsByTagName('head')[0];
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src =
        'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit';
      // grecaptcha calls onloadCallback() when loaded
      head.appendChild(script);
      // removed so script only loads once.
      this.removeEventListener('focus', gLoad);
    },
    false
  );

  //google recaptcha 2 invisible
  /*global grecaptcha */
  /*eslint no-undef: "error"*/
  window.onloadCallback = () => {
    grecaptcha.render(submitId, {
      sitekey: grecaptchaKey,
      badge: grecaptchaLocation,
      callback: onSubmit,
      // when grecaptcha is triggered by click on submitId, it calls onSubmit
    });
    id(submitId).disabled = false;
  };

  // on submit event, called by recaptcha
  // performs js validation of form.
  /*global onSubmit */
  /*eslint no-undef: "error"*/
  window.onSubmit = () => {
    const form = id(formId);
    if (!form.checkValidity()) {
      //if not valid
      form.classList.add('was-validated'); //shows errors on failed fields
      grecaptcha.reset(); //reset grecaptcha as it only allows 1 click before being disabled
    } else {
      //if valid
      //hide button
      console.log('hide button');
      id(submitId).classList.add(hiddenClass);
      //show spinner
      console.log('show spinner');
      id(spinnerId).classList.remove(hiddenClass);
      //submit form and print status and response
      // msg(postData(formData));
      // gather data from form
      postData(formId, formAction, xhrCallback);
    }
  };

  /**
   * postData function - posts all data from form 
   * @param {String} form - ID of form to pull data from
   * @param {String} action - form action url
   * @param {String} callback - callback function
   */
  const postData = (form, action, callback) => {
    const data = new FormData(id(form));
    const xhr = new XMLHttpRequest();
    xhr.timeout = formTimeout;
    xhr.responseType = 'json';
    xhr.onload = () => {
      if (xhr.status === 200) {
        if(xhr.response) {
          callback(xhr.response);
        } else {
          // if data other than JSON is received, this.response returns 'undefined'
          callback({
            status: false, 
            message: 'A server error has occured, please try again later',
          })
        }
      } else {
        callback({
          status: false,
          message: 'Connection error, please try again later',
        });
      }
    };
    xhr.onerror = () => {
      callback({
        status: false,
        message: 'An error has occured, please try again later',
      });
    };
    xhr.ontimeout = () => {
      callback({
        status: false,
        message: 'Error: There is a network connection issue',
      });
    };
    xhr.open('POST', action);
    xhr.send(data);
  };

  /**
   * callback function - takes response returned from server and displays status message
   * @param {Object} data - Response from form or XHR event handlers
   * @param {Boolean} data.status - True for successful message submission
   * @param {String} data.message - The status message to display under the form
   */
  const xhrCallback = (data) => {
    // hide spinner
    id(spinnerId).classList.add(hiddenClass);
    // add text to status div
    //fallback for uncaught errors
    if (!data) {
      data = {
        status: false,
        message: 'A connection error has occured, please try again later',
      };
    }
    id(statusId).innerHTML = data.message;
    // add alert class to status div
    id(statusId).classList.add(alertClass);

    if (data.success === true && data.message) {
      // success
      //hide form
      id(formId).classList.add(hiddenClass);
      // add success alert classes to status div
      id(statusId).classList.add(successClass);
      // remove hidden class on status div
      id(statusId).classList.remove(hiddenClass);
    } else {
      // error
      // add success alert classes to status div
      id(statusId).classList.add(errorClass);
      // remove hidden class on status div
      id(statusId).classList.remove(hiddenClass);
      // reset form
      id(formId).classList.remove('was-validated');
      id(formId).reset();
      // only reset alert/button when user focuses on name input
      firstInput.addEventListener(
        'focus',
        function gReset() {
          //reset grecaptcha as it only allows 1 click before being disabled
          grecaptcha.reset();
          // hide alert
          id(statusId).classList.add(hiddenClass);
          // remove alert type class on alert
          id(statusId).classList.remove(errorClass);
          // show button
          id(submitId).classList.remove(hiddenClass);
          this.removeEventListener('focus', gReset);
        },
        false
      );
    }
  };
};
