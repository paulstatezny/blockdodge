'use strict';

var gulp     = require('gulp');
var connect  = require('gulp-connect');

gulp.task('media', function() {
    return gulp.src('./media/**/*.*')
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload());
});
