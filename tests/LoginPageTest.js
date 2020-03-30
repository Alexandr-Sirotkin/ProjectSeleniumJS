
"use strict";

let user = require("../model/user.js");
let ServicePage = require("../service/TransitionService.js");
let service = new ServicePage();

let assert = require("assert");

const EXPECTED_HEADING_LOGIN_PAGE = "logo:yandex",
    EXPECTED_ERROR_TEXT_EMPTY_LOGIN = "Логин не указан",
    EXPECTED_ERROR_TEXT_LOGIN = "Такой логин не подойдет",
    EXPECTED_HEADING_PASSWORD_PAGE = "Другой аккаунт";

describe("LoginPage page tests", function () {
    this.timeout(15000);

    before(function () {
        service.openBrowserForLoginPage();
    });

    after(async function () {
        await service.quit();
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