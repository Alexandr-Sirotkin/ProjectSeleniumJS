"use strict";

let user = require("../model/user.js");
let servicePage = require("../service/TransitionService.js");
let service = new servicePage();
let assert = require("assert");

const EXPECTED_HEADING_USER_MAIL_MAIN_PAGE = "Сироткин",
    EXPECTED_HEADING_PASSWORD_PAGE = "Другой аккаунт",
    EXPECTED_ERROR_EMPTY_PASSWORD = "Пароль не указан",
    EXPECTED_ERROR_TEXT_PASSWORD = "Неверный пароль";

describe("PasswordPage page tests", function () {
    this.timeout(15000);

    before(async function () {
        await service.openBrowserForPasswordPage();
    });

    after(function () {
        service.quit();
    });

    it("Page check", async function () {
        let heading = await service.getHeadingTextPasswordPage();
        assert.equal(heading, EXPECTED_HEADING_PASSWORD_PAGE, "The expected PasswordPage page title does not match the current one.");
    });

    it("Test with an empty password", async function () {
        service.invalidPasswordCreation("");
        let errorEmptyPassword = await service.getErrorTextPassword();
        assert.equal(errorEmptyPassword, EXPECTED_ERROR_EMPTY_PASSWORD, "Test with an empty password behaves incorrectly.");
    });

    it("Test with an invalid password", async function () {
        service.invalidPasswordCreation(user.invalidLogin);
        let errorPassword = await service.getErrorTextPassword();
        assert.equal(errorPassword, EXPECTED_ERROR_TEXT_PASSWORD, "A test with an incorrect password behaves incorrectly.");
    });

    it("Correct log in Test", async function () {
        await service.logInWithPassword(user.correctPassword);
        let heading = await service.getHeadingTextUmmPage();
        assert.equal(heading, EXPECTED_HEADING_USER_MAIL_MAIN_PAGE, "A test with a correct password behaves incorrectly.");
    });

}

);