"use strict";
let BasePage = require("./BasePage.js");
let letter = require("../model/letter.js");

const TOPIC_LETTER_LOCATOR = "//span[@title=\'" + letter.topicCorrectRecipient + "\']",
    ADDRESS_LETTER_LOCATOR = "//div[contains(@class,'ns-view-messages-item-wrap')][1]//span[@class='mail-MessageSnippet-FromText']";


let Page = class SentEmailsPage extends BasePage {

    getAddressLetterLocator() {
        return this.find(ADDRESS_LETTER_LOCATOR).getAttribute("title");
    }

    async getTopicLetter() {
        return await this.find(TOPIC_LETTER_LOCATOR).getText();
    }

};

module.exports = Page;