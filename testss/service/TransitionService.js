
let LoginPage = require("../../pages/LoginPage.js");
let loginPage;


// webdriver = require('selenium-webdriver');
// chromeDriver = require('selenium-webdriver/chrome');
// By = require('selenium-webdriver').By;
// until = require('selenium-webdriver').until;
// path = require('chromedriver').path;
// options = new chromeDriver.Options();
// options.addArguments('start-maximized');
// options.addArguments('incognito');
let driver = require("../../model/driver.js");

class TransitionService {



    openBrowser() {

        // driver = new webdriver.Builder()
        //     .withCapabilities(webdriver.Capabilities.chrome())
        //     .forBrowser('chrome')
        //     .setChromeOptions(options)
        //     .build();
        driver.manage().setTimeouts({ implicit: 10000 });
        driver.get("https://passport.yandex.ru/auth/welcome");
        loginPage = new LoginPage(driver);
        driver.sleep(10000);

    }

    getHeadingTextLoginPageService() {
        return loginPage.getHeadingText();
    }


}

module.exports = TransitionService;
