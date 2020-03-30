"use strict";
let BasePage = require("./BasePage.js");
let letter = require("../model/letter.js");

const HEADING_LOCATOR = "//a[contains(@title,'Черновики')]/span",
    FLAG_LOCATOR = "//div[contains(@class,'ns-view-messages-item-wrap')][1]//span[@class='_nb-checkbox-flag _nb-checkbox-normal-flag']",
    DELETE_BUTTON = "//div[@title='Удалить (Delete)']",
    TOPIC_LETTER_LOCATOR = "//span[@title=\'" + letter.topicTestLetter + "\']",
    LINK_TO_DELETED_LOCATOR = "//a[contains(@title,'Удалённые')]";


let Page = class DraftsPage extends BasePage {

    async markLetter() {
        return await this.find(FLAG_LOCATOR).click();
    }

    clickDeleteButton() {
        return this.find(DELETE_BUTTON).click();
    }

    findTopicLetter() {
        return this.findAll(TOPIC_LETTER_LOCATOR);
    }

    clickDeletedLettersFolder() {
        return this.find(LINK_TO_DELETED_LOCATOR).click();
    }

    getHeadingText() {
        return this.find(HEADING_LOCATOR).getText();
    }

    getTopicLetter() {
        return this.find(TOPIC_LETTER_LOCATOR).getText();
    }
};

module.exports = Page;