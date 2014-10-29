'use strict';

var gulp    = require('gulp');
var concat  = require('gulp-concat');
var connect = require('gulp-connect');

gulp.task('concat', ['concat:ci']);

gulp.task('concat:ci', function() {
    return gulp.src([
            './node_modules/disyntegration/phantom-shims/click.js',
            './node_modules/es5-shim/es5-shim.js'
        ])
        .pipe(concat('ci-shims.js'))
        .pipe(gulp.dest('./build/js'));
});
