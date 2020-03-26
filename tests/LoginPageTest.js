
"use strict";
let driver = require("../model/driver.js");
let Page = require("../pages/LoginPage.js");
let pasPage = require("../pages/PasswordPage.js");


let user = require("../model/user.js");
// let Service = require("../service/TransitionService.js");
let assert = require("assert");
let page;
// let passwordPage;
// let service;
const EXPECTED_HEADING_LOGIN_PAGE = "logo:yandex";
const EXPECTED_ERROR_TEXT_EMPTY_LOGIN = "Логин не указан";
const EXPECTED_ERROR_TEXT_LOGIN = "Такой логин не подойдет";
const EXPECTED_HEADING_PASSWORD_PAGE = "Другой аккаунт";




describe("LoginPage page tests", function () {
    this.timeout(15000);

    before(function () {
        page = new Page(driver);
        // service = new Service();
        page.visit("https://passport.yandex.ru/auth/welcome");
    });

    //after( function () {
    //     page.quit();

    //});

    it("Page check", async function () {
        let heading = await page.getHeadingText();
        assert.equal(heading, EXPECTED_HEADING_LOGIN_PAGE, "The expected LoginPage page title does not match the current one.");
    });

    it("Test with an empty login", async function () {
        page.invalidLoginCreation("");
        let errorEmptyLogin = await page.getErrorTextLogin();
        assert.equal(errorEmptyLogin, EXPECTED_ERROR_TEXT_EMPTY_LOGIN, "Test with an empty login behaves incorrectly.");
    });

    it("Test with an invalid login", async function () {
        page.invalidLoginCreation(user.invalidLogin);
        let errorLogin = await page.getErrorTextLogin();
        assert.equal(errorLogin, EXPECTED_ERROR_TEXT_LOGIN, "A test with an incorrect login behaves incorrectly.");
    });

    it("Correct Login Test", async function () {
        let passwordPage = await page.logIn(user.correctLogin, driver);
        let heading = await passwordPage.getHeadingText1(driver);
        console.log(heading);
        assert.equal(heading, EXPECTED_HEADING_PASSWORD_PAGE, "A test with an incorrect login behaves incorrectly.");
    });














    // public void logInTest() throws InterruptedException {
    // service.logIn(user.getCORRECT_LOGIN());
    // service.waitOfElement(5);
    // String heading = service.getHeadingTextPasswordPageService();
    // Assert.assertEquals(heading, EXPECTED_HEADING_PASSWORD_PAGE, "The expected PasswordPage page title does not match the current one.");
}





);