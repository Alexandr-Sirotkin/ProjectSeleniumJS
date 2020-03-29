"use strict";
let BasePage = require("./BasePage.js");
let letter = require("../model/letter.js");

const TOPIC_LETTER_LOCATOR = "//span[@title=\'" + letter.topicCorrectRecipient + "\']",
    WRITE_BUTTON_LOCATOR = "//a[@title='Написать (w, c)']",
    USER_LETTER_LOCATOR = "//div[contains(@class,'ns-view-messages-item-wrap')][1]//span[@title='aleksandarsirotk1n@yandex.by']";


let Page = class IncomingEmailsPage extends BasePage {

    getUserLetter() {
        return this.find(USER_LETTER_LOCATOR).getText();
    }

    getTopicLetter() {
        return this.find(TOPIC_LETTER_LOCATOR).getText();
    }

    getTopicLetterLocator() {
        return TOPIC_LETTER_LOCATOR;
    }

    async writeLetter() {
        await this.find(WRITE_BUTTON_LOCATOR).click();
    }

};

module.exports = Page;