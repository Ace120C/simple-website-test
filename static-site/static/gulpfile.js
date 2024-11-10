const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles(done) {
  src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('css'));
  done();
}

function watchTask() {
 watch(['sass/**/*.scss'], buildStyles); 
}


exports.default = series(buildStyles, watchTask);
