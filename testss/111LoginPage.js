let driver = require("../model/driver.js");
By = require('selenium-webdriver').By;
webdriver = require('selenium-webdriver');
let headingLocator = webdriver.By.xpath("//a[contains(@class,'logo logo_name')]");

class LoginPage {


    logInButtonLocator = By.xpath("//button[@type='submit']");
    loginFieldLocator = By.xpath("//input[@id='passp-field-login']");
    errorLoginLocator = By.xpath("//div[@class='passp-form-field__error']");
    headingLocator = webdriver.By.xpath("//a[contains(@class,'logo logo_name')]");



    constructor(driver) {
        this.driver = driver;
    }

    findLoginField() {
        return driver.findElement(loginFieldLocator);
    }

    clickLogInButton() {
        driver.findElement(logInButtonLocator).click();
    }

    getErrorTextLogin() {
        return driver.findElement(errorLoginLocator).getText();
    }

    getHeadingText() {
        return driver.findElement(headingLocator).getText();
    }

}

module.exports = LoginPage;