var gulp = require('gulp');
var livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

// File paths
var DIST_PATH = 'public/dist';
var SCRIPTS_PATH = 'public/scripts/**/*.js';
var SCSS_PATH = 'public/scss/**/*.scss';
var HTML_PATH = 'public/**/*.html';

// Styles for SCSS
gulp.task('styles', function() {
  console.log('starting styles task');

  return gulp.src('public/scss/styles.scss')
    .pipe(plumber(function(err) {
      console.log('Styles Task Error');
      console.log(err);
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      // outputStyle: 'compressed'
    }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});

gulp.task('html', function() {
  console.log('starting html task');

  return gulp.src(HTML_PATH)
    .pipe(livereload());
});

// Scripts
gulp.task('scripts', function() {
  console.log('starting scripts task');

  return gulp.src(SCRIPTS_PATH)
    .pipe(livereload());
});

// Images
gulp.task('images', function() {
  console.log('starting images task');
});

// Watch for SCSS
gulp.task('watch', function(){
  console.log('starting watch task');
  require('./server.js');
  livereload.listen();
  gulp.watch(SCSS_PATH, ['styles']);
  gulp.watch(HTML_PATH, ['html']);
  gulp.watch(SCRIPTS_PATH, ['scripts']);
});
