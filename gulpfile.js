'use strict';

var _           = require('lodash');
var gulp        = require('gulp');
var fs          = require('fs');
var browserify  = require('browserify');
var watchify    = require('watchify');
var babelify    = require('babelify');
var rimraf      = require('rimraf');
var source      = require('vinyl-source-stream');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var libs        = ['backbone', 'underscore', 'jquery'];
var bundler     = null;

/**
 * Gulp config
 * @type {Object}
 */
var config = {
  entry: {
    folder: './src/',
    app: 'app.js',
    vendor: 'node_modules/**/*.js',
    notify: 'notify/index.js'
  },
  output: {
    folder: './dist/',
    app: 'app.js',
    vendor: 'vendor.dist.js',
    notify: 'notify.dist.js'
  }
};

//Build gulp task
gulp.task('build', ['clean', 'vendor', 'notify', 'app'], function() {
  process.exit(0);
});

// clean the output directory
gulp.task('clean', function(cb) {
  rimraf(config.output.folder, cb);
});

gulp.task('remove-notify', function(cb) {
  rimraf(config.output.folder + config.output.notify, cb);
});

gulp.task('remove-app', function(cb) {
  rimraf(config.output.folder + config.output.app, cb);
});

gulp.task('remove-vendor', function(cb) {
  rimraf(config.output.folder + config.output.vendor, cb);
});

//compile vendors
gulp.task('vendor', function() {
  var b = browserify();
  libs.forEach(function(lib) {
    b.require(lib);
  });
  return b.bundle()
    .pipe(source(config.output.vendor))
    .pipe(gulp.dest(config.output.folder))
    .pipe(reload({ stream: true }));
});

//complile system notify
gulp.task('notify', function() {
  var b = browserify({
    entries: config.entry.folder + config.entry.notify
  });
  libs.forEach(function(lib) {
    b.external(lib);
  });
  return b
    .transform(babelify)
    .transform(require('jadeify'))
    .bundle()
    .on('error', function(err) { console.log('Error: ' + err); })
    .pipe(source(config.output.notify))
    .pipe(gulp.dest(config.output.folder))
    .pipe(reload({ stream: true }));
});

//complile system notify
gulp.task('app', function() {
  var b = browserify({
    entries: config.entry.folder + config.entry.app
  });
  libs.forEach(function(lib) {
    b.external(lib);
  });
  return b
    .transform(babelify)
    .transform(require('jadeify'))
    .bundle()
    .on('error', function(err) { console.log('Error: ' + err); })
    .pipe(source(config.output.app))
    .pipe(gulp.dest(config.output.folder))
    .pipe(reload({ stream: true }));
});

//watch task
gulp.task('watch', function() {
  //run browsersync
  browserSync({
    server: {
      baseDir: './'
    }
  });

  //watch to different folders
  var app  = gulp.watch('src/**/{*.js,*.jade}');
  var vendor  = gulp.watch(config.entry.vendor);

  app.on('change', function(event) {
    console.log('-- APP has been changed --');
    gulp.start(['remove-notify', 'app']);
    console.log('-- APP has been compiled --');
  });
  vendor.on('change', function(event) {
    console.log('-- VENDOR has been changed --');
    gulp.start(['remove-vendor', 'vendor']);
    console.log('-- VENDOR has been compiled --');
  });
});
