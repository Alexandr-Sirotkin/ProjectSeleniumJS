"use strict";
let BasePage = require("./BasePage.js");

const HEADING_LOCATOR = "//div[@class='mail-Done-Title js-title-info']";

let Page = class SentMessageWindowPage extends BasePage {

    async getHeadingText() {
        return await this.find(HEADING_LOCATOR).getText();
    }

};

module.exports = Page;
