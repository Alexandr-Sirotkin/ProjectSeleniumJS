"use strict";
let user = require("../model/user.js");
let letter = require("../model/letter.js");
let servicePage = require("../service/TransitionService.js");
let service = new servicePage();
let assert = require("assert");

const EXPECTED_HEADING_LETTER_PAGE = "Отправить",
    EXPECTED_HEADING_SENT_MESSAGE_WINDOW_PAGE = "Письмо отправлено.",
    EXPECTED_ADDRESS_SENT_LETTER = user.emailAddress,
    EXPECTED_USER_INCOMING_LETTER = user.userName,
    EXPECTED_TOPIC_SENT_LETTER = letter.topicCorrectRecipient,
    EXPECTED_TOPIC_INCOMING_LETTER = letter.topicCorrectRecipient,
    EXPECTED_ERROR_ADDRESS_TEXT = "Некорректные адреса: " + letter.invalidRecipient;

describe("LoginPage page tests", function () {
    this.timeout(15000);

    before(function () {
        service.openBrowserForLoginPage();
    });

    after(function () {
        service.quit();
    });

    it("Page check", async function () {
        let heading = await service.getHeadingTextLoginPage();
        assert.equal(heading, EXPECTED_HEADING_LOGIN_PAGE, "The expected LoginPage page title does not match the current one.");
    });

    it("Test with an empty login", async function () {
        service.invalidLoginCreation("");
        let errorEmptyLogin = await service.getErrorTextLogin();
        assert.equal(errorEmptyLogin, EXPECTED_ERROR_TEXT_EMPTY_LOGIN, "Test with an empty login behaves incorrectly.");
    });

    it("Test with an invalid login", async function () {
        service.invalidLoginCreation(user.invalidLogin);
        let errorLogin = await service.getErrorTextLogin();
        assert.equal(errorLogin, EXPECTED_ERROR_TEXT_LOGIN, "A test with an incorrect login behaves incorrectly.");
    });

    it("Correct Login Test", async function () {
        await service.logIn(user.correctLogin);
        let heading = await service.getHeadingTextPasswordPage();
        assert.equal(heading, EXPECTED_HEADING_PASSWORD_PAGE, "A test with a correct login behaves incorrectly.");
    });

});