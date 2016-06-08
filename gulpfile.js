
// gulp
var gulp = require('gulp');

// plugins
var connect   = require('gulp-connect');
var jshint    = require('gulp-jshint');
var uglify    = require('gulp-uglify');
var concat    = require('gulp-concat');  
var rename    = require('gulp-rename'); 
var cleanCSS  = require('gulp-clean-css');
var clean     = require('gulp-clean');
var Server    = require('karma').Server;
var ngHtml2Js = require("gulp-ng-html2js");

/**
 * Run test once and exit
 */
gulp.task('unit-tests', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('lint', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(jshint())
    .pipe(jshint.extract('always'))
    .pipe(jshint.reporter('default',{ verbose: true }))
    .pipe(jshint.reporter('fail'));
});


gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 8888
  });
});

