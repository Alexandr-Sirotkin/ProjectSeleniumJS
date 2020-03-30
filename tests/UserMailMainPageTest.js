"use strict";

let ServicePage = require("../service/TransitionService.js");
let service = new ServicePage();
let assert = require("assert");

const EXPECTED_HEADING_USER_MAIL_MAIN_PAGE = "Сироткин",
    EXPECTED_HEADING_MAIL_PAGE = "Входящие";


describe("UserMailMainPage page tests", function () {
    this.timeout(15000);

    before(async function () {
        await service.openBrowserForUserMailMainPage();
    });

    after(function () {
        service.quit();
    });

    it("Page check", async function () {
        let heading = await service.getHeadingTextUmmPage();
        assert.equal(heading, EXPECTED_HEADING_USER_MAIL_MAIN_PAGE, "The expected UserMailMainPage page title does not match the current one.");
    });

    it("Go to mail Test", async function () {
        await service.goToMail();
        let heading = await service.getHeadingTextMailPage();
        assert.equal(heading, EXPECTED_HEADING_MAIL_PAGE, "The expected page title does not match the current one.");
    });

});