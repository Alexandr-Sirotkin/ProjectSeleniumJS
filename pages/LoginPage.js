"use strict";
// let loginPage = require("./BasePage.js");
let BasePage = require("./BasePage.js");


const LOG_IN_BUTTON_LOCATOR = "//button[@type='submit']",
    LOGIN_FIELD_LOCATOR = "//input[@id='passp-field-login']",
    ERROR_LOGIN_LOCATOR = "//div[@class='passp-form-field__error']",
    HEADING_LOCATOR = "//a[contains(@class,'logo logo_name')]";


let Page = class LoginPage extends BasePage {

    getLoginField() {
        return LOGIN_FIELD_LOCATOR;
    }

    findLoginField() {
        return this.find(LOGIN_FIELD_LOCATOR);
    }

    clickLogInButton() {
        return this.find(LOG_IN_BUTTON_LOCATOR).click();
    }

    getErrorTextLogin() {
        return this.find(ERROR_LOGIN_LOCATOR).getText();
    }

    getHeadingText() {
        return this.find(HEADING_LOCATOR).getText();
    }

};

module.exports = Page;

