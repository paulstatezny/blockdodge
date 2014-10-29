/* jshint node: true */
'use strict';

var gulp   = require('gulp');
var gutil  = require('gulp-util');
var rimraf = require('rimraf');
var _      = require('underscore');

// Require all our tasks
require('./gulp-tasks/browserify');
require('./gulp-tasks/concat');
require('./gulp-tasks/connect');
require('./gulp-tasks/media');
require('./gulp-tasks/preprocess');
require('./gulp-tasks/sass');
require('./node_modules/disyntegration/gulp-tasks/disyntegrate');

// Set default environment
if (gutil.env._[0] === 'disyntegrate' || gutil.env._[0] === 'disyntegrate:ci') {
    gutil.env.env = 'ci';
} else if ( ! gutil.env.env) {
    gutil.env.env = 'development';
}

gutil.log('Environment', gutil.colors.magenta(gutil.env.env));

if (gutil.env.backend) {
    gutil.log('Backend', gutil.colors.magenta(gutil.env.backend));
}

// Build app and run server but don't watch for changes
gulp.task('default', ['build', 'connect:app']);

// Build app and don't run server or watch for changes
gulp.task('build', ['preprocess:app', 'concat', 'media', 'sass', 'browserify:app']);

// Build app, run server, and watch for changes
gulp.task('watch', ['preprocess:app', 'concat', 'media', 'sass', 'watchify:app', 'connect:app', 'delta:app']);

// Build tests, run server, and watch for changes
gulp.task('test', ['preprocess:test', 'watchify:test', 'connect:test', 'delta:test']);

// Clean up the build directories
gulp.task('clean', ['clean:app', 'clean:test']);

// Watch definitions
gulp.task('delta:app', function() {
    gulp.watch(['./application/ui/scss/**/*.scss'], ['sass']);
    gulp.watch(['./application/**/*.html'], ['preprocess:app']);
    gulp.watch(['./media/**/*.*'], ['media']);
});

gulp.task('delta:test', function() {
    gulp.watch(['./tests/**/*.html'], ['preprocess:test']);
});

// Clean definitions
gulp.task('clean:app', function(cb) {
    rimraf('./build', cb);
});

gulp.task('clean:test', function(cb) {
    rimraf('./test', cb);
});
