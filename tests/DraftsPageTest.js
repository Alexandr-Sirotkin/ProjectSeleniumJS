"use strict";

let ServicePage = require("../service/LetterService.js");
let service = new ServicePage();
let letter = require("../model/letter.js");
let assert = require("assert");

const EXPECTED_HEADING = "Черновики",
    EXPECTED_COUNT_ELEMENTS = 0,
    EXPECTED_DRAFT_LETTER_TOPIC = letter.topicTestLetter;


describe("DraftsPage page tests", function () {
    this.timeout(35000);

    before(async function () {
        await service.openBrowserDraftsPage();
        await service.refreshDraftsPage(letter.topicTestLetter);
    });

    after(function () {
        service.quit();
    });

    it("Page check", async function () {
        let heading = await service.getHeadingTextDraftsPage();
        assert.equal(heading, EXPECTED_HEADING, "You are on the wrong page.");
    });

    it("Check the draft in the draft folder", async function () {
        let heading = await service.getTopicLetterDraftService();
        assert.equal(heading, EXPECTED_DRAFT_LETTER_TOPIC, "Email not found in draft folder.");
    });

    it("Test delete a draft from a folder", async function () {
        await service.deleteDraftLetter();
        let elements = await service.findTopicDraftLetterService();
        assert.equal(elements.length, EXPECTED_COUNT_ELEMENTS, "Email found in drafts folder.");
    });

});