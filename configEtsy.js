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

    params:{
        url: 'https://www.Etsy.com'
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ["C:/Users/Carina/udemy-protractor/*etsy.spec.js"],
    capabilities: {
        browserName: 'chrome',
        'chromeOptions': {
            args: ['--test-type']
        }
    },
    onPrepare: function () {
        browser.ignoreSynchronization = true; //Don´t wait for Angular
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            },
            summary: {
                displayDuration: false
            }
            
        })

        )
    }
};

