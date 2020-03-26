"use strict";
let Page = require("./BasePage.js");
let pasPage = require("../pages/PasswordPage.js");
// let passwordPage;



const LOG_IN_BUTTON_LOCATOR = "//button[@type='submit']",
    LOGIN_FIELD_LOCATOR = "//input[@id='passp-field-login']",
    ERROR_LOGIN_LOCATOR = "//div[@class='passp-form-field__error']",
    HEADING_LOCATOR = "//a[contains(@class,'logo logo_name')]";

Page.prototype.findLoginField = function () {
    return this.find(LOGIN_FIELD_LOCATOR);
}

Page.prototype.clickLogInButton = function () {
    return this.find(LOG_IN_BUTTON_LOCATOR).click();
}

Page.prototype.getErrorTextLogin = async function () {
    await this.sleep(1000);
    return this.find(ERROR_LOGIN_LOCATOR).getText();
}

Page.prototype.getHeadingText = function () {
    return this.find(HEADING_LOCATOR).getText();
}


Page.prototype.invalidLoginCreation = function (text) {
    this.write(LOGIN_FIELD_LOCATOR, text);
    this.clickLogInButton();
}

Page.prototype.logIn = async function (text, driver) {
    this.write(LOGIN_FIELD_LOCATOR, text);
    this.clickLogInButton();
    await this.sleep(1000);
    return new pasPage(driver);
}

// this.typeUserLogin = async function (userLogin) {
//     console.log("00000000000000000000");
//     let loginField = await loginPage.findLoginField();
//     console.log("11111111111111111111");
//     await loginField.clear;
//     console.log("222222222222222222222222");
//     await loginField.sendKeys("userLogin");
//     console.log("333333333333333333333333");
// }

// this.logInEmptyLogin = async function (element, text) {
//     await this.write(element, text);
//     console.log("1111111111111111");
//     loginPage.clickLogInButton;
//     console.log("22222222222222222222");

// }





module.exports = Page;