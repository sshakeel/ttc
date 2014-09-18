// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var gutil = require('gulp-util');

gulp.task('js', function() {
  gulp.src('js/*.js')
    .pipe(connect.reload())
});

gulp.task('html', function() {
  gulp.src('*.html')
    .pipe(connect.reload())
});

gulp.task('css', function() {
  gulp.src('*.css')
    .pipe(connect.reload())
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['js']);
    gulp.watch('*.css', ['css']);
    gulp.watch(['*.html', 'partials/*.html'], ['html']);
});

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

// Default Task
gulp.task('default', ['html', 'js', 'css', 'watch', 'connect']);