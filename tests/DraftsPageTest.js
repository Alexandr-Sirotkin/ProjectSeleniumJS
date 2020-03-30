"use strict";

let ServicePage = require("../service/LetterService.js");
let service = new ServicePage();
let letter = require("../model/letter.js");
let assert = require("assert");

const EXPECTED_HEADING = "Черновики",
    EXPECTED_DRAFT_LETTER_TOPIC = letter.topicTestLetter;


describe("DraftsPage page tests", function () {
    this.timeout(25000);

    before(async function () {
        await service.openBrowserDraftsPage();
        await service.refreshDraftsPage(letter.topicTestLetter);
    });

    // after(function () {
    //     service.quit();
    // });

    it("Page check", async function () {
        let heading = await service.getHeadingTextDraftsPage();
        assert.equal(heading, EXPECTED_HEADING, "You are on the wrong page.");
    });

    it("Check the draft in the draft folder", async function () {
        let heading = await service.getTopicLetterDraftService();
        assert.equal(heading, EXPECTED_DRAFT_LETTER_TOPIC, "Email not found in draft folder.");
    });

});