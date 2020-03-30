"use strict";

let driver = require("../model/driver.js");
let By = require('selenium-webdriver').By;
let user = require("../model/user.js");
let letter = require("../model/letter.js");
let servicePage = require("./TransitionService.js");
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
let LINK_TO_SENT_LOCATOR = "//a[contains(@title,'Отправленные')]",
    LINK_TO_INBOX_LOCATOR = "//a[contains(@title,'Входящие')]",
    LINK_TO_DRAFTS_LOCATOR = "//a[contains(@title,'Черновики')]",
    LINK_TO_DELETED_LOCATOR = "//a[contains(@title,'Удалённые')]",
    FLAG_LOCATOR = "//div[contains(@class,'ns-view-messages-item-wrap')]//span[@class='_nb-checkbox-flag _nb-checkbox-normal-flag']",
    DELETE_BUTTON = "//div[@title='Удалить (Delete)']";

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

    async clearService() {
        await driver.findElement(By.xpath(LINK_TO_INBOX_LOCATOR)).click();
        let elementInbox = await driver.findElements(By.xpath(FLAG_LOCATOR));
        for (let i = 1; i < (elementInbox.length + 1); i++) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            let elementLocator = By.xpath(
                "//div[contains(@class,'ns-view-messages-item-wrap')]" + "[" + i + "]"
                + "//span[@class='_nb-checkbox-flag _nb-checkbox-normal-flag']");
            await driver.findElement(elementLocator).click();
        }
        await driver.findElement(By.xpath(DELETE_BUTTON)).click();

        await driver.findElement(By.xpath(LINK_TO_SENT_LOCATOR)).click();
        let elementSent = await driver.findElements(By.xpath(FLAG_LOCATOR));
        for (let i = 1; i < (elementSent.length + 1); i++) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            let elementLocator = By.xpath(
                "//div[contains(@class,'ns-view-messages-item-wrap')]" + "[" + i + "]"
                + "//span[@class='_nb-checkbox-flag _nb-checkbox-normal-flag']");
            await driver.findElement(elementLocator).click();
        }
        await driver.findElement(By.xpath(DELETE_BUTTON)).click();

        await driver.findElement(By.xpath(LINK_TO_DRAFTS_LOCATOR)).click();
        let elementDrafts = await driver.findElements(By.xpath(FLAG_LOCATOR));
        for (let i = 1; i < (elementDrafts.length + 1); i++) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            let elementLocator = By.xpath(
                "//div[contains(@class,'ns-view-messages-item-wrap')]" + "[" + i + "]"
                + "//span[@class='_nb-checkbox-flag _nb-checkbox-normal-flag']");
            await driver.findElement(elementLocator).click();
        }
        await driver.findElement(By.xpath(DELETE_BUTTON)).click();

        await driver.findElement(By.xpath(LINK_TO_DELETED_LOCATOR)).click();
        let elementDeleted = await driver.findElements(By.xpath(FLAG_LOCATOR));
        for (let i = 1; i < (elementDeleted.length + 1); i++) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            let elementLocator = By.xpath(
                "//div[contains(@class,'ns-view-messages-item-wrap')]" + "[" + i + "]"
                + "//span[@class='_nb-checkbox-flag _nb-checkbox-normal-flag']");
            await driver.findElement(elementLocator).click();
        }
        await driver.findElement(By.xpath(DELETE_BUTTON)).click();

    }

}
module.exports = Page;