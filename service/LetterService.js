"use strict";
let webdriver = require('selenium-webdriver');
let Key = require('selenium-webdriver').Key;
let driver = require("../model/driver.js");
let user = require("../model/user.js");
let letter = require("../model/letter.js");
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

    async openBrowserDraftsPage() {
        await this.openBrowserLetterPage();
        await this.writeRecipientService(user.emailAddress);
        await this.writeTopicService(letter.topicTestLetter);
        await this.writeBodyService(letter.bodyTestLetter);
        await this.clickDraftsFolderService();
    }

    async openBrowserDeletedLettersPage() {
        await this.openBrowserDraftsPage();
        await this.refreshDraftsPage(letter.topicTestLetter);
        await this.deleteDraftLetter();
        await this.clickDeletedLettersFolderService();
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

    getHeadingTextDraftsPage() {
        return draft.getHeadingText();
    }

    getHeadingTextDeletedLettersPage() {
        return deletedLetters.getHeadingText();
    }

    async clickSendLettersFolderService() {
        await letterPage.clickSendLettersFolder();
        return sentPage = new SentEmailsPage(driver);
    }

    async clickInboxLettersFolderService() {
        await letterPage.clickInboxLettersFolder();
        return inboxPage = new IncomingEmailsPage(driver);
    }

    async clickDraftsFolderService() {
        await letterPage.clickDraftsFolder();
        await letterPage.findWindow();
        return draft = new DraftsPage(driver);
    }

    async clickDeletedLettersFolderService() {
        await draft.clickDeletedLettersFolder();
        return deletedLetters = new DeletedLettersPage(driver);
    }

    async getTopicSentLetterService() {
        return await sentPage.getTopicLetter();
    }

    async getTopicIncomingLetterService() {
        return await inboxPage.getTopicLetter();
    }

    async getTopicLetterDraftService() {
        return await draft.getTopicLetter();
    }

    async getTopicLetterDeletedLettersService() {
        return await deletedLetters.getTopicLetter();
    }

    async getTopicLetterLocator() {
        return await inboxPage.getTopicLetterLocator();
    }

    async refreshInboxPage(element) {
        await inboxPage.refresh("//span[@title=\'" + element + "\']");
    }

    async refreshDraftsPage(element) {
        await draft.refresh("//span[@title=\'" + element + "\']");
    }

    async refreshDeletedLettersPage(element) {
        await deletedLetters.refresh("//span[@title=\'" + element + "\']");
    }

    async writeLetterFromInbox() {
        await inboxPage.writeLetter();
        return letterPage = new LetterPage(driver);
    }

    getErrorAddressTextService() {
        return letterPage.getErrorAddressText();
    }

    async deleteDraftLetter() {
        await draft.markLetter();
        await draft.clickDeleteButton();
        await draft.sleep(1000);
    }

    async deleteDeletedLetter() {
        await deletedLetters.markLetter();
        await deletedLetters.clickDeleteButton();
        await deletedLetters.sleep(1000);
    }

    async findTopicDraftLetterService() {
        return await draft.findTopicLetter();
    }

    async findTopicDeletedLetterService() {
        return await deletedLetters.findTopicLetter();
    }

}
module.exports = Page;