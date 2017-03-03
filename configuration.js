/* exports.config = {
	framework: "jasmine",
 //	seleniumAddress: 'http://localhost:4444/wd/hub',
//	specs: ["spec.js"]
//}
 */
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
// https://github.com/angular/protractor/issues/1451
require('C:/Users/Carina/Appdata/Roaming/npm/node_modules/protractor/built/logger').Logger.logLevel = 1;

exports.config = {
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    silent: true,
    defaultTimeoutInterval: 360000,
    print: function () {
    }
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ["spec.js"],
  capabilities: {
    browserName: 'chrome',
    'chromeOptions': {
      args: ['--test-type']
    }
  },
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      },
      summary: {
        displayDuration: false
      }
    }));
  }
};