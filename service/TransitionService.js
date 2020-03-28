
"use strict";
let webdriver = require('selenium-webdriver');
let Key = require('selenium-webdriver').Key;
let driver = require("../model/driver.js");
let LogPage = require("../pages/LoginPage.js");
let loginPage;
let PasPage = require("../pages/PasswordPage.js");
let passwordPage;

let Page = class ServicePage {

    openBrowserForLoginPage() {
        loginPage = new LogPage(driver);
        loginPage.visit("https://passport.yandex.ru/auth/welcome");
    }

    getHeadingTextLoginPage() {
        return loginPage.getHeadingText();
    }

    invalidLoginCreation(text) {
        let field = loginPage.findLoginField();
        field.clear();
        // field.sendKeys(webdriver.Key.CONTROL, Key.HOME);
        // field.sendKeys(webdriver.Key.CONTROL, Key.SHIFT, Key.END);
        field.sendKeys(text);
        loginPage.clickLogInButton();
    }

    async getErrorTextLogin() {
        await loginPage.sleep(1000);
        return loginPage.getErrorTextLogin();
    }

    async logIn(text) {
        let field = loginPage.findLoginField();
        field.sendKeys(webdriver.Key.CONTROL, Key.HOME);
        field.sendKeys(webdriver.Key.CONTROL, Key.SHIFT, Key.END);
        field.sendKeys(text);
        loginPage.clickLogInButton();
        await loginPage.sleep(1000);
        return passwordPage = new PasPage(driver);
    }

    getHeadingTextPasswordPage() {
        return passwordPage.getHeadingText();
    }

    quit() {
        return driver.quit();;
    }

};

module.exports = Page;