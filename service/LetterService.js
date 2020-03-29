"use strict";
let webdriver = require('selenium-webdriver');
let Key = require('selenium-webdriver').Key;
let driver = require("../model/driver.js");
let user = require("../model/user.js");
let servicePage = require("./TransitionService.js");
let service = new servicePage();
let LogPage = require("../pages/LoginPage.js");
let loginPage;
let PasPage = require("../pages/PasswordPage.js");
let passwordPage;
let UmmPage = require("../pages/UserMailMainPage.js");
let ummPage;
let MailPage = require("../pages/MailPage.js");
let mailPage;
let LetterPage = require("../pages/LetterPage.js");
let letterPage;
let SentMessageWindowPage = require("../pages/SentMessageWindowPage.js");
let smwPage;
let SentEmailsPage = require("../pages/SentEmailsPage.js");
let sentPage;
let IncomingEmailsPage = require("../pages/IncomingEmailsPage.js");
let inboxPage;
let DeletedLettersPage = require("../pages/DeletedLettersPage.js");
let deletedLetters;
let DraftsPage = require("../pages/DraftsPage.js");
let draft;





let Page = class LetterService extends servicePage {

    async openBrowserLetterPage() {
        await this.openBrowserForMailPage();
        letterPage = await this.writeLetter();
    }

    async writeRecipientService(recipient) {
        let recipientField = await letterPage.findRecipientField();
        recipientField.clear();
        await recipientField.sendKeys(recipient);
    }

    async writeTopicService(topic) {
        let topicField = await letterPage.findTopicField();
        topicField.clear();
        await topicField.sendKeys(topic);
    }

    async writeBodyService(body) {
        let bodyField = await letterPage.findBodyField();
        bodyField.clear();
        await bodyField.sendKeys(body);
    }

    async sendLetterService(recipient, topic, body) {
        await this.writeRecipientService(recipient);
        await this.writeTopicService(topic);
        await this.writeBodyService(body);
        await letterPage.clickSendButton();
        return smwPage = new SentMessageWindowPage(driver);
    }

    async sendLetterWithInvalidAddressService(recipient, topic, body) {
        await this.writeRecipientService(recipient);
        await this.writeTopicService(topic);
        await this.writeBodyService(body);
        await letterPage.clickSendButton();
    }

    getHeadingTextSentMessageWindowPage() {
        return smwPage.getHeadingText();
    }

    async clickSendLettersFolderService() {
        await letterPage.clickSendLettersFolder();
        return sentPage = new SentEmailsPage(driver);
    }

    async clickInboxLettersFolderService() {
        await letterPage.clickInboxLettersFolder();
        return inboxPage = new IncomingEmailsPage(driver);
    }

    clickDraftsFolderService() {
        letterPage.clickDraftsFolder();
        return draft = new DraftsPage(driver);
    }

    clickDeletedLettersFolderService() {
        draft.clickDeletedLettersFolder();
        return deletedLetters = new DeletedLettersPage(driver);
    }

    async getTopicSentLetterService() {
        return await sentPage.getTopicLetter();
    }

    async getTopicIncomingLetterService() {
        return await inboxPage.getTopicLetter();
    }

    async getTopicLetterLocator() {
        return await inboxPage.getTopicLetterLocator();
    }

    async refreshInboxPage(element) {
        await inboxPage.refresh("//span[@title=\'" + element + "\']");
    }

    async writeLetterFromInbox() {
        await inboxPage.writeLetter();
        return letterPage = new LetterPage(driver);
    }

    getErrorAddressTextService() {
        return letterPage.getErrorAddressText();
    }

}
module.exports = Page;