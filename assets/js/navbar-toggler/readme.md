# Navbar Toggler

## Replaces toggler icon with css filled lines and morphs to X on click

**ES6 import**
To target the first Bootstrap 5 navbar.

```JavaScript
import navbarToggler from './navbar-toggler/src';
navbarToggler();
```

By default, the module targets the first Bootstrap 5 navbar on the page. If you want to target a navbar which isn't the first, pass the optional argument of navbar index number (0 is 1st, 1 is 2nd etc). Defaults to 0.

```JS
import navbarToggler from './navbar-toggler/src';
navbarToggler(1);
```

Ensure you turn off the border around the toggler-icon via css. This module does not handle this. 

```CSS
.navbar-toggler {
  border: 0;
}

.navbar-toggler:focus {
  box-shadow: none; 
}
```
The last rule (box shadow) can also be turned off site-wide for inputs as follows (Via BS5 SCSS variables)

```SCSS
//Bootstrap 5.0 _variables.scss line 592
$input-btn-focus-width: 0;
```

Or for buttons only
```SCSS
//Bootstrap 5.0 _variables.scss line 634
$btn-focus-width 0;
```

Alternatively import a CSS file from this module

```SCSS
@import "./navbar-toggler/css"
```


