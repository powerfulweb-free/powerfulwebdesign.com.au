const gulp = require('gulp');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');
const cheerio = require('gulp-cheerio');


var rimraf = require('rimraf'); // rimraf directly
function spriteClean (cb) {
   rimraf('../resources/symbol', cb);
}

function spriteBuild() {
  return gulp.src('../assets/icons/**/*.svg')
    .pipe(svgo())
    .pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
        $('[class]').removeAttr('class');
			},
			parserOptions: {xmlMode: true},
		}))
    .pipe(svgSprite({
      mode: {
        symbol: { // Activate the symbol mode
          sprite: 'sprite.svg',
          inline: true,
        },
      },
    }))
    .pipe(gulp.dest('../assets'));
}

exports.sprite = spriteBuild;
exports.default = spriteBuild;