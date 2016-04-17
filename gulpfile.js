'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');
var browserify = require('browserify');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var SRC = '.assets/js/*.js';
var DEST = 'dist'

//     require('require-dir')('./gulp');

// gulp.task('js',function(){
//     return browserify('./buld/main')
//                     .bundle({debug: true})
//                     .pipe(source('bundle.js'))
//                     .pipe(gulp.set('.'))
// });


gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });
     gulp.watch('./assets/js/libs/**/*.js').on('change',reload);
     gulp.watch('./assets/js/*.js').on('change',reload);
     gulp.watch('.assets/scripts/*.js').on('change',reload);
     gulp.watch('./assets/css/*.css').on('change',reload);
     gulp.watch('index.html').on('change',reload);
});


// plugins.livereload.listen();
//     gulp.watch('assets/js/libs/**/*.js', ['squish-jquery']);
//     gulp.watch('assets/js/*.js', ['build-js']);
//     gulp.watch('assets/scripts/*.js', ['build-js']);
//     gulp.watch('assets/css/*.css', ['build-css']);
//     //gulp.watch('assets/less/**/*.less', ['build-css']);

// gulp.task('default', ['clean'], function () {
//     gulp.start('build');
// });
