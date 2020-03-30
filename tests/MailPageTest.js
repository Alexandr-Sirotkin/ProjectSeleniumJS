"use strict";

let ServicePage = require("../service/TransitionService.js");
let service = new ServicePage();
let assert = require("assert");

const EXPECTED_HEADING_LETTER_PAGE = "Отправить",
    EXPECTED_HEADING_MAIL_PAGE = "Входящие";


describe("MailPage page tests", function () {
    this.timeout(15000);

    before(async function () {
        await service.openBrowserForMailPage();
    });

    after(function () {
        service.quit();
    });

    it("Page check", async function () {
        let heading = await service.getHeadingTextMailPage();
        assert.equal(heading, EXPECTED_HEADING_MAIL_PAGE, "The expected page title does not match the current one.");
    });

    it("Write a letter Test", async function () {
        await service.writeLetter();
        let heading = await service.getHeadingTextLetterPage();
        assert.equal(heading, EXPECTED_HEADING_LETTER_PAGE, "The expected page title does not match the current one.");
    });

});