/* jshint node: true */
'use strict';

var gulp         = require('gulp');
var gutil        = require('gulp-util');
var path         = require('path');
var sass         = require('gulp-sass');
var minifyCss    = require('gulp-minify-css');
var connect      = require('gulp-connect');
var autoPrefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    var isProduction;

    isProduction = gutil.env.env === 'production';

    return gulp.src('./application/ui/scss/*.scss')
        .on('data', function(file) {
            if (process.platform === 'win32') {
                file.path = path.relative('.', file.path);
                file.path = file.path.replace(/\\/g, '/');
            }
        })
        .pipe(sass({
            errLogToConsole : true,
            sourceComments : isProduction ? 'none' : 'none',
            sourceMap      : 'sass',
            outputStyle    : 'compressed',
            includePaths   : [
                // Add additional files to be included here
            ]
        }))
        .pipe(autoPrefixer({
            cascade : true,
            to      : 'app.css',
            from    : './application/ui/scss'
        }))
        .pipe(autoPrefixer({
            cascade : true,
            to      : 'style-guide.css',
            from    : './application/ui/scss'
        }))
        // production only because it breaks source maps
        .pipe(isProduction ? minifyCss({keepSpecialComments : '*'}) : gutil.noop())
        .pipe(gulp.dest('./build/css'))
        .pipe(connect.reload());
});
