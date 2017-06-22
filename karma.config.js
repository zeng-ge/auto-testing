// Karma configuration
// Generated on Fri Apr 21 2017 14:26:58 GMT+0800 (CST)

// var gulp = require('gulp');
// var through = require('through2');
//
// var filepaths = function(fn){
//   return through.obj(function (file, enc, cb) {
//     fn(file);
//     this.push(file);
//     cb();
//   })
// }
// var jsFiles = [], testJs = [], allFiles = [];
// gulp.src(['src/**/*.js', '!*.test.js']).pipe(filepaths(function(file){
//   jsFiles.push(path.relative(__dirname, file.path));
// }));
//
// gulp.src(['src/**/*.test.js']).pipe(filepaths(function(file){
//   testJs.push(path.relative(__dirname, file.path));
// }));
//
// allFiles = ['node_modules/vue/dist/vue.js'].concat(jsFiles).concat(testJs)

var path = require('path');
var glob = require('glob');
var jsFiles = [], testJs = [], allFiles = [];
jsFiles = glob.sync('src/**/*.js', { ignore: ['src/**/*.test.js'] });
testJs = glob.sync('src/**/*.test.js', {})

allFiles = ['node_modules/vue/dist/vue.js'].concat(jsFiles).concat(testJs)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: allFiles,


    // list of files to exclude
    exclude: [
    ],

    // customContextFile: 'index.html',
    // customDebugFile: 'index.html',


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'], //['Chrome', 'Firefox', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
