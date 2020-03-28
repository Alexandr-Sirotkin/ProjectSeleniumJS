"use strict";
let BasePage = require("./BasePage.js");

const LOG_IN_BUTTON_LOCATOR = "//button[@type='submit']",
    PASSWORD_FIELD_LOCATOR = "//input[@id='passp-field-passwd']",
    ERROR_PASSWORD_LOCATOR = "//div[@class='passp-form-field__error']",
    HEADING_LOCATOR = "//div[@class='passp-auth-header']/a[2]";


let Page = class PasswordPage extends BasePage {

    async getHeadingText() {
        return await this.find(HEADING_LOCATOR).getText();
    }

    getPasswordField() {
        return PASSWORD_FIELD_LOCATOR;
    }

    findPasswordField() {
        return this.find(PASSWORD_FIELD_LOCATOR);
    }

    clickLogInButton() {
        return this.find(LOG_IN_BUTTON_LOCATOR).click();
    }

    getErrorTextPassword() {
        return this.find(ERROR_PASSWORD_LOCATOR).getText();
    }

};

module.exports = Page;

