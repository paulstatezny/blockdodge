'use strict';

var connect    = require('gulp-connect');
var gulp       = require('gulp');
var gutil      = require('gulp-util');
var preprocess = require('gulp-preprocess');

gulp.task('preprocess:app', function() {
    return gulp.src([
            './application/index.html',
            './application/.htaccess'
        ])
        .pipe(preprocess({context : {ENVIRONMENT : gutil.env.env}}))
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload());
});

gulp.task('preprocess:test', function() {
    return gulp.src([
            './__tests__/index.html',
            './__tests__/favicon.png',
            './node_modules/mocha/mocha.css',
            './node_modules/mocha/mocha.js'
        ])
        .pipe(gulp.dest('./test'))
        .pipe(connect.reload());
});
