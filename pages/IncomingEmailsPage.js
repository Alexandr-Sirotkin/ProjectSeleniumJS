"use strict";
let BasePage = require("./BasePage.js");
let letter = require("../model/letter.js");

const TOPIC_LETTER_LOCATOR = "//span[@title=\'" + letter.topicCorrectRecipient + "\']",
    USER_LETTER_LOCATOR = "//div[contains(@class,'ns-view-messages-item-wrap')][1]//span[@title='aleksandarsirotk1n@yandex.by']";


let Page = class IncomingEmailsPage extends BasePage {

    getUserLetter() {
        return this.find(USER_LETTER_LOCATOR).getText();
    }

    getTopicLetter() {
        return this.find(TOPIC_LETTER_LOCATOR).getText();
    }

};

module.exports = Page;