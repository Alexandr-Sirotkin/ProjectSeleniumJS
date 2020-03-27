
"use strict";
let webdriver = require('selenium-webdriver');
let Key = require('selenium-webdriver').Key;
let By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    path = require('chromedriver').path;
let driver = require("../model/driver.js");
let logPage = require("../pages/LoginPage.js");
let loginPage;
let pasPage = require("../pages/PasswordPage.js");
let passwordPage;


let servicePage = function () {


    this.openBrowserForLoginPage = function () {
        loginPage = new logPage(driver);
        loginPage.visit("https://passport.yandex.ru/auth/welcome");
    }

    this.getHeadingTextLoginPage = function () {
        return loginPage.getHeadingText();
    }

    this.invalidLoginCreation = function (text) {
        let field = loginPage.findLoginField();
        field.sendKeys(webdriver.Key.CONTROL, Key.HOME);
        field.sendKeys(webdriver.Key.CONTROL, Key.SHIFT, Key.END);
        field.sendKeys(text);
        loginPage.clickLogInButton();
    }

    this.getErrorTextLogin = async function () {
        await loginPage.sleep(1000);
        return loginPage.getErrorTextLogin();
    }

    this.logIn = async function (text) {
        let field = loginPage.findLoginField();
        field.sendKeys(webdriver.Key.CONTROL, Key.HOME);
        field.sendKeys(webdriver.Key.CONTROL, Key.SHIFT, Key.END);
        field.sendKeys(text);
        loginPage.clickLogInButton();
        await loginPage.sleep(1000);
        return passwordPage = new pasPage(driver);
    }

    this.getHeadingTextPasswordPage = function () {
        return passwordPage.getHeadingText1();
    }


    // this.findLoginField = function () {
    //     return loginPage.findLoginField();
    // }


    // this.clickLogInButton = function () {
    //     return loginPage.clickLogInButton();
    // }

    // this.getErrorTextLogin = function () {
    //     return loginPage.getErrorTextLogin();
    // }

    // this.getHeadingText = function () {
    //     return loginPage.getHeadingText();
    // }

    // this.visit = function (url) {
    //     return loginPage.visit(url);
    // }

    this.quit = function () {
        return driver.quit();;
    }

    // this.typeUserLogin = async function (userLogin) {
    //     console.log("00000000000000000000");
    //     let loginField = await loginPage.findLoginField();
    //     console.log("11111111111111111111");
    //     await loginField.clear();
    //     console.log("222222222222222222222222");
    //     await loginField.sendKeys("userLogin");
    //     console.log("333333333333333333333333");
    // }

    // this.logInEmptyLogin = async function (userLogin) {
    //     await this.typeUserLogin(userLogin);
    //     console.log("1111111111111111");
    //     loginPage.clickLogInButton;
    //     console.log("22222222222222222222");

    // }


}

module.exports = servicePage;