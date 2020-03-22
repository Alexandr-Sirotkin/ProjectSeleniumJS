
let User = require("./model/User.js");
let user = new User();
console.log(user.correctLogin);


// const { Builder } = require("selenium-webdriver");
// const path = require('chromedriver').path;
// const driver = new Builder().forBrowser("chrome").build();
// driver.get('http://en.wikipedia.org/wiki/Wiki');

var webdriver = require('selenium-webdriver'),
    chromeDriver = require('selenium-webdriver/chrome'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

const path = require('chromedriver').path;

var options = new chromeDriver.Options();
options.addArguments('start-maximized');
options.addArguments('incognito');
options.setUserPreferences({ 'download.default_directory': '/path/to/your/download/directory' });

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

driver.get('http://en.wikipedia.org/wiki/Wiki');