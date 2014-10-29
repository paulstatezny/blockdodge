module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath : '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks : [ 'mocha', 'browserify' ],

        // list of files / patterns to load in the browser
        files : [
            './node_modules/es5-shim/es5-shim.js',
            // This file needs to be available first or browserification will fail
            './__tests__/globals.js',
            './__tests__/**/*.js*'
        ],

        // list of files to exclude
        exclude : [ 'index.html' ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors : {
            './__tests__/**/*.js*' : [ 'browserify' ]
        },

        browserify : {
            debug      : true,
            extensions : [ '.js', '.jsx' ],
            plugin     : [ 'proxyquireify/plugin' ],
            transform  : [ 'reactify' ],
            watch      : true
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters : [ 'progress' ],

        // web server port
        port : 9876,

        // enable / disable colors in the output (reporters and logs)
        colors : true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel : config.LOG_DEBUG,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch : true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //browsers: ['Chrome', 'Firefox', 'PhantomJS'],
        browsers : [ 'Chrome', 'Firefox' ],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun : false
    });
};
