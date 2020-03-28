
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
let MailPage = require("../pages/MailPage.js");
let mailPage;
let LetterPage = require("../pages/LetterPage.js");
let letterPage;


let Page = class ServicePage {

    openBrowserForLoginPage() {
        loginPage = new LogPage(driver);
        loginPage.visit("https://passport.yandex.ru/auth/welcome");
    }

    async openBrowserForPasswordPage() {
        this.openBrowserForLoginPage();
        await this.logIn(user.correctLogin);
    }

    async openBrowserForUserMailMainPage() {
        await this.openBrowserForPasswordPage();
        await this.logInWithPassword(user.correctPassword);
    }

    async openBrowserForMailPage() {
        await this.openBrowserForUserMailMainPage();
        await this.goToMail();
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
        let field = await passwordPage.findPasswordField();
        field.sendKeys(webdriver.Key.CONTROL, Key.HOME);
        field.sendKeys(webdriver.Key.CONTROL, Key.SHIFT, Key.END);
        field.sendKeys(text);
        await passwordPage.clickLogInButton();
        await loginPage.sleep(1000);
        return ummPage = new UmmPage(driver);
    }

    async goToMail() {
        await ummPage.clickUserButton();
        await ummPage.clickMailButton();
        return mailPage = new MailPage(driver);
    }

    async writeLetter() {
        await mailPage.writeLetter();
        return letterPage = new LetterPage(driver);
    }

    async getHeadingTextPasswordPage() {
        return await passwordPage.getHeadingText();
    }

    async getHeadingTextUmmPage() {
        return await ummPage.getHeadingText();
    }

    async getHeadingTextMailPage() {
        return await mailPage.getHeadingText();
    }

    getHeadingTextLetterPage() {
        return letterPage.getHeadingText();
    }

    quit() {
        return driver.quit();;
    }

};

module.exports = Page;