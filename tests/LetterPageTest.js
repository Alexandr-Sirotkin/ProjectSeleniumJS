"use strict";
let user = require("../model/user.js");
let letter = require("../model/letter.js");
let ServicePage = require("../service/LetterService.js");
let service = new ServicePage();
let assert = require("assert");

const EXPECTED_HEADING_LETTER_PAGE = "Отправить",
    EXPECTED_HEADING_SENT_MESSAGE_WINDOW_PAGE = "Письмо отправлено.",
    EXPECTED_ADDRESS_SENT_LETTER = user.emailAddress,
    EXPECTED_USER_INCOMING_LETTER = user.userName,
    EXPECTED_TOPIC_SENT_LETTER = letter.topicCorrectRecipient,
    EXPECTED_TOPIC_INCOMING_LETTER = letter.topicCorrectRecipient,
    EXPECTED_ERROR_ADDRESS_TEXT = "Некорректные адреса: " + letter.invalidRecipient;

describe("LoginPage page tests", function () {
    this.timeout(20000);

    before(async function () {
        await service.openBrowserLetterPage();
    });

    after(function () {
        service.quit();
    });

    it("Page check", async function () {
        let heading = await service.getHeadingTextLetterPage();
        assert.equal(heading, EXPECTED_HEADING_LETTER_PAGE, "The expected page title does not match the current one.");
    });

    it("Checking sent email", async function () {
        await service.sendLetterService(user.emailAddress, letter.topicCorrectRecipient, letter.bodyCorrectRecipient);
        let heading = await service.getHeadingTextSentMessageWindowPage();
        assert.equal(heading, EXPECTED_HEADING_SENT_MESSAGE_WINDOW_PAGE, "The expected page title does not match the current one.");
    });



    it("Check Sent emails", async function () {
        await service.clickSendLettersFolderService();
        let topic = await service.getTopicSentLetterService();
        assert.equal(topic, EXPECTED_TOPIC_SENT_LETTER, "The expected page title does not match the current one.");
    });

    // it("Correct Login Test", async function () {
    //     await service.logIn(user.correctLogin);
    //     let heading = await service.getHeadingTextPasswordPage();
    //     assert.equal(heading, EXPECTED_HEADING_PASSWORD_PAGE, "A test with a correct login behaves incorrectly.");
    // });

});