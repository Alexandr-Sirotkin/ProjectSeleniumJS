"use strict";
let BasePage = require("./BasePage.js");

const WRITE_BUTTON_LOCATOR = "//a[@title='Написать (w, c)']",
    HEADING_LOCATOR = "//a[@data-title='Входящие']/span";


let Page = class MailPage extends BasePage {

    async getHeadingText() {
        return await this.find(HEADING_LOCATOR).getText();
    }

    writeLetter() {
        return this.find(WRITE_BUTTON_LOCATOR).click();
    }

    clickMailButton() {
        return this.find(MAIL_BUTTON_LOCATOR).click();
    }

};

module.exports = Page;
