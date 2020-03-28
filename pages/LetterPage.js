"use strict";
let BasePage = require("./BasePage.js");

const RECIPIENT_FIELD_LOCATOR = "//div[@class='mail-Compose-Field-Input']/div[@name='to']",
    TOPIC_FIELD_LOCATOR = "//div[@class='mail-Compose-Field-Input']/input[@type='text']",
    BODY_FIELD_LOCATOR = "//div[@class='cke_contents cke_reset']/div",
    ERROR_ADRESS_FIELD_LOCATOR = "//div[@data-key='view=compose-field-to-error']",
    SEND_BUTTON_LOCATOR = "//span[@data-key='view=compose-send-link']/button[@title='Отправить письмо (Ctrl + Enter)']",
    LINK_TO_SENT_LOCATOR = "//a[contains(@title,'Отправленные')]",
    LINK_TO_INBOX_LOCATOR = "//a[contains(@title,'Входящие')]",
    LINK_TO_DRAFTS_LOCATOR = "//a[contains(@title,'Черновики')]",
    WRITE_BUTTON_LOCATOR = "//a[@title='Написать (w, c)']",
    SAVE_AND_GO_BUTTON_LOCATOR = "//button[contains(@class,' nb-button _nb-small-action-button')]",
    HEADING_LOCATOR = "//div[@class='ComposeSendButton-Text']/span";


let Page = class LetterPage extends BasePage {

    getHeadingText() {
        return this.find(HEADING_LOCATOR).getText();
    }

    findRecipientField() {
        return this.find(RECIPIENT_FIELD_LOCATOR);
    }

    findTopicField() {
        return this.find(TOPIC_FIELD_LOCATOR);
    }

    findBodyField() {
        return this.find(BODY_FIELD_LOCATOR);
    }

    clickSendButton() {
        return this.find(SEND_BUTTON_LOCATOR).click();
    }

    clickSendLettersFolder() {
        return this.find(LINK_TO_SENT_LOCATOR).click();
    }

    clickInboxLettersFolder() {
        return this.find(LINK_TO_INBOX_LOCATOR).click();
    }

    clickDraftsFolder() {
        return this.find(LINK_TO_DRAFTS_LOCATOR).click();
    }

    getErrorAddressText() {
        return this.find(ERROR_ADRESS_FIELD_LOCATOR).getText();
    }

    writeLetter() {
        this.find(WRITE_BUTTON_LOCATOR).click();
    }

};

module.exports = Page;