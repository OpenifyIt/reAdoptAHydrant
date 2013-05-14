// Karma configuration
// Generated on Tue May 14 2013 21:01:49 GMT+0200 (CEST)


// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
  MOCHA,
  MOCHA_ADAPTER,
  {pattern: 'tests/unit/no_deps_bullshit.js', included: true, watched: false, served: true},
  {pattern: 'vendors/closure-library/closure/goog/base.js', included: true, watched: false, served: true},
  {pattern: 'vendors/closure-library/closure/**/*.js', included: false, watched: false, served: true},
  {pattern: 'tests/unit/deps.js', include: true, watched: true, served: true},
  {pattern: 'public/javascripts/**/*.js', include: false, watched: true, served: true},
  {pattern: 'tests/unit/*.test.js'},
  {pattern: 'node_modules/chai/chai.js'}
];


// list of files to exclude
exclude = [
  
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
