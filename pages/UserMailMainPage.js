"use strict";
let BasePage = require("./BasePage.js");

const USER_BUTTON_LOCATOR = "//a[contains(@class, 'user-account')]",
    MAIL_BUTTON_LOCATOR = "//a[@href='https://mail.yandex.ru']",
    HEADING_LOCATOR = "//div[@class='personal-info__last']";


let Page = class UserMailMainPage extends BasePage {

    async getHeadingText() {
        return await this.find(HEADING_LOCATOR).getText();
    }

    clickUserButton() {
        return this.find(USER_BUTTON_LOCATOR).click();
    }

    clickMailButton() {
        return this.find(MAIL_BUTTON_LOCATOR).click();
    }
};

module.exports = Page;
