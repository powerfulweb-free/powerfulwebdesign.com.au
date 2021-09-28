# Contact Form XHR

## Collect form data and asynchronously send over XHR with no page refresh

**Import**

```JavaScript
import contactForm from './contact-form-xhr/src';
contactForm('formId',{params});
```

**Basic Configurtion**

```Javascript
import contactForm from './contact-form-xhr/src';
contactForm('js-contactForm', {
  formAction: 'https://address.com/contact.php', 
  grecaptchaKey: 'Public Key', 
});
```

**Advanced Configuration (Defaults)**

```Javascript
import contactForm from './contact-form-xhr/src';
contactForm('js-contactForm', { 
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
});
```

**Parameters**

| Name             | Type      |Default          |Description|
| ----             | ----      | ----            |----|
| `formAction`    | `string`  | `undefined`      | ID of form to collect inputs from |
| `grecaptchaKey` | `string`  | `undefined`      | URL to post form to |
| `formTimeout`   | `integer` | 8000 (milisec)   | Time to wait before timeout |
| `submitId`      | `string`  | 'js-submit'      | ID of the form's submit button |
| `statusId`      | `string`  | 'js-statusMessage' | ID of status message div |
| `spinnerId`     | `integer` | 'js-load'        | ID of spinner div (continuous spin) |
| `alertClass`    | `string`  | 'alert'          | CSS class used to display an alert box |
| `successClass`  | `string`  | 'alert-success'  | CSS modifier class for success alert |
| `errorClass`    | `string`  | 'alert-danger'   | CSS modifier class for error alert |
| `hiddenClass`   | `string`  | 'is-hidden'      | CSS class used to hide a div (non BS) |
| `grecaptchaLocation` | `string` | 'bottomleft' | Recaptcha location (bottomright, bottomleft, or inline) |