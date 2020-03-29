"use strict";
let BasePage = require("./BasePage.js");
let letter = require("../model/letter.js");

const HEADING_LOCATOR = "//a[contains(@title,'Удалённые')]/span",
    FLAG_LOCATOR = "//div[contains(@class,'ns-view-messages-item-wrap')][1]//span[@class='_nb-checkbox-flag _nb-checkbox-normal-flag']",
    DELETE_BUTTON = "//div[@title='Удалить (Delete)']",
    TOPIC_LETTER_LOCATOR = "//span[@title=\'" + letter.topicTestLetter + "\']";


let Page = class DeletedLettersPage extends BasePage {

    markLetter() {
        return this.find(FLAG_LOCATOR).click();
    }

    clickDeleteButton() {
        return this.find(DELETE_BUTTON).click();
    }

    getTopicLetter() {
        return this.find(TOPIC_LETTER_LOCATOR).getText();
    }

    findTopicLetter() {
        return this.findAll(TOPIC_LETTER_LOCATOR);
    }

    getHeadingText() {
        return this.find(HEADING_LOCATOR).getText();
    }

};

module.exports = Page;