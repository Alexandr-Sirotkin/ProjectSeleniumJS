"use strict";
let BasePage = require("./BasePage.js");

// const LOG_IN_BUTTON_LOCATOR = "//button[@type='submit']",
//     PASSWORD_FIELD_LOCATOR = "//input[@id='passp-field-passwd']",
//     ERROR_PASSWORD_LOCATOR = "//div[@class='passp-form-field__error']",
const HEADING_LOCATOR = "//div[@class='passp-auth-header']/a[2]";


let Page = class PasswordPage extends BasePage {

    getHeadingText() {
        return this.find(HEADING_LOCATOR).getText();
    }

};

module.exports = Page;

