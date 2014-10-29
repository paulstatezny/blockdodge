'use strict';

var gulp       = require('gulp');
var gutil      = require('gulp-util');
var connect    = require('gulp-connect');
var fallback   = require('connect-history-api-fallback');

gulp.task('connect:app', function() {
    return connect.server({
        root       : 'build',
        port       : 9000,
        livereload : gutil.env.env === 'development',
        middleware : function (connect, options) {
            return [fallback];
        }
    });
});

gulp.task('connect:test', function() {
    return connect.server({
        root       : 'test',
        port       : 9001,
        livereload : true,
        middleware : function (connect, options) {
            return [fallback];
        }
    });
});
