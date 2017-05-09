const path = require('path');

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');
const cleanCss = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');
const rename = require('gulp-rename');
const htmlify = require('gulp-angular-htmlify');
const regexpReplace = require('gulp-just-replace');
const htmlreplace = require('gulp-html-replace');
const flatten = require('gulp-flatten');
const htmlmin = require('gulp-html-minifier');

// Default task - manage all tasks here
gulp.task('default', function() {
  gulp.start('scripts');
  gulp.start('styles');
  gulp.start('images');
  gulp.start('root');
});

gulp.task('scripts', function() {
  // Put all JS in one file
  gulp.src(['app/**/*.js', 'assets/**/*.js'])
    .pipe(regexpReplace(/app\/components\/.*.\//g, 'app/views/'))
    .pipe(flatten())
    .pipe(uglify())
    .pipe(concat('app.bundle.min.js'))
    .pipe(gulp.dest('out/app'));
});

gulp.task('styles', function() {
  // Uglify, concatenate, rename CSS
  gulp.src('assets/css/*.css')
    .pipe(concatCss('bundle.css'))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(cleanCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('out/assets/css'));
});

gulp.task('images', function() {
  // Get Images
  gulp.src('assets/img/*')
    .pipe(gulp.dest('out/assets/img'));
});

gulp.task('root', function() {
  // Get main page, add data- to attributes, replace assets' sources
  gulp.src('index.html')
    .pipe(htmlreplace({
      'css': 'assets/css/bundle.min.css',
      'js': 'app/app.bundle.min.js'
    }))
    .pipe(htmlify())
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true, minifyJS: true}))
    .pipe(gulp.dest('out'));
  // Get views
  gulp.src('app/components/*/*.html')
    .pipe(flatten())
    .pipe(htmlify())
    .pipe(gulp.dest('out/app/views'));
  // Get favicon
  gulp.src('favicon.ico')
    .pipe(gulp.dest('out'));
});