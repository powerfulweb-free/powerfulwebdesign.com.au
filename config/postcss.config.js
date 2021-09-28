const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './content/**/*.md',
      ],
      safelist: [
        'lazyloaded',
        'lazyloading',
        'aos-init', 
        'aos-animate', 
        'data-aos-delay', 
        'data-aos-duration', 
        'fade-in',
        'fade-up',
        'zoom-in',
        'zoom-in-left',
        'zoom-in-right',
        'alert', 
        'alert-success',
        'alert-danger',
        'was-validated',
        ...whitelister([
          // './assets/scss/components/_buttons.scss',
          //'./assets/scss/components/_code.scss',
          // './assets/scss/components/_syntax.scss',
          './assets/scss/layouts/*.scss',
          './assets/scss/components/*.scss',
          './assets/scss/common/*.scss',
        ]),
      ],
    }),
  ],
}






// // const autoprefixer = require('autoprefixer')

// // module.exports = {
// //   plugins: [
// //     autoprefixer(),

// //   ],
// // };

// const autoprefixer = require('autoprefixer');
// //const purgecss = require('@fullhuman/postcss-purgecss');
// //const whitelister = require('purgecss-whitelister');

// module.exports = {
//   plugins: [
//     autoprefixer(),
//     // purgecss({
//     //   content: [
//     //     './layouts/**/*.html',
//     //     './content/**/*.md',
//     //   ],
//     //   safelist: [
//     //     'lazyloaded',
//     //     // ...whitelister([
//     //     //   // './assets/scss/components/_syntax.scss',
//     //     //   //'./assets/scss/components/_code.scss',
//     //     // ]),
//     //   ],
//     // }),
//   ],
// }
