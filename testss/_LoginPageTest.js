
let Service = require("../service/TransitionService.js");
let srv;
let user = require("../model/user.js");

// let { describe, it, after, before } = require("selenium-webdriver/testing");
assert = require("assert");
let Page;
let page;

expectedHeadingLoginPage = "logo:yandex";
EXPECTED_HEADING_PASSWORD_PAGE = "Другой аккаунт";
EXPECTED_ERROR_TEXT_EMPTY_LOGIN = "Логин не указан";
EXPECTED_ERROR_TEXT_LOGIN = "Такой логин не подойдет";

describe("LoginPage page tests", function () {

    this.timeout(10000);

    before(function () {
        srv = new Service();
        srv.openBrowser();
    });

    it("log in test", function () {
        heading = srv.getHeadingTextLoginPageService();
        console.log(heading);
        assert.equal(heading, expectedHeadingLoginPage, "The expected PasswordPage page title does not match the current one.")

    });


    after(function () {
        srv = new Service();
    });





});