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

Page.prototype.getErrorTextLogin = function () {
    return this.find(ERROR_LOGIN_LOCATOR).getText();
}



Page.prototype.getHeadingText = function () {
    return this.find(HEADING_LOCATOR).getText();
}

module.exports = Page;