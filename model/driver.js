"use strict";





let webdriver = require('selenium-webdriver'),
    chromeDriver = require('selenium-webdriver/chrome'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    path = require('chromedriver').path,
    options = new chromeDriver.Options();
options.addArguments('start-maximized');
options.addArguments('incognito');

let driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

driver.manage().setTimeouts({ implicit: 20000, pageLoad: 10000 });




module.exports = driver;