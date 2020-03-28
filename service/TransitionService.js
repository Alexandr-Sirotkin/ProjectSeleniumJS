
"use strict";
let webdriver = require('selenium-webdriver');
let Key = require('selenium-webdriver').Key;
let driver = require("../model/driver.js");
let user = require("../model/user.js");
let LogPage = require("../pages/LoginPage.js");
let loginPage;
let PasPage = require("../pages/PasswordPage.js");
let passwordPage;
let UmmPage = require("../pages/UserMailMainPage.js");
let ummPage;

let Page = class ServicePage {

    openBrowserForLoginPage() {
        loginPage = new LogPage(driver);
        loginPage.visit("https://passport.yandex.ru/auth/welcome");
    }

    async openBrowserForPasswordPage() {
        this.openBrowserForLoginPage();
        await this.logIn(user.correctLogin);
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

    invalidPasswordCreation(text) {
        let field = passwordPage.findPasswordField();
        field.sendKeys(webdriver.Key.CONTROL, Key.HOME);
        field.sendKeys(webdriver.Key.CONTROL, Key.SHIFT, Key.END);
        field.sendKeys(text);
        loginPage.clickLogInButton();
    }

    async getErrorTextLogin() {
        await loginPage.sleep(1000);
        return loginPage.getErrorTextLogin();
    }

    async getErrorTextPassword() {
        await passwordPage.sleep(1000);
        return passwordPage.getErrorTextPassword();
    }

    async logIn(text) {
        let field = loginPage.findLoginField();
        field.sendKeys(webdriver.Key.CONTROL, Key.HOME);
        field.sendKeys(webdriver.Key.CONTROL, Key.SHIFT, Key.END);
        field.sendKeys(text);
        await loginPage.clickLogInButton();
        await loginPage.sleep(1000);
        return passwordPage = new PasPage(driver);
    }

    async logInWithPassword(text) {
        let field = passwordPage.findPasswordField();
        field.sendKeys(webdriver.Key.CONTROL, Key.HOME);
        field.sendKeys(webdriver.Key.CONTROL, Key.SHIFT, Key.END);
        field.sendKeys(text);
        await passwordPage.clickLogInButton();
        await loginPage.sleep(1000);
        return ummPage = new UmmPage(driver);
    }

    async getHeadingTextPasswordPage() {
        return await passwordPage.getHeadingText();
    }

    async getHeadingTextUmmPage() {
        return await ummPage.getHeadingText();
    }

    quit() {
        return driver.quit();;
    }

};

module.exports = Page;