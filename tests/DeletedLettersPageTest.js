"use strict";

let ServicePage = require("../service/LetterService.js");
let service = new ServicePage();
let letter = require("../model/letter.js");
let assert = require("assert");

const EXPECTED_HEADING = "Удалённые",
    EXPECTED_COUNT_ELEMENTS = 0,
    EXPECTED_TOPIC_DELETE_LETTER = letter.topicTestLetter;

describe("DeletedLettersPage page tests", function () {
    this.timeout(35000);

    before(async function () {
        await service.openBrowserDeletedLettersPage();
        await service.refreshDeletedLettersPage(letter.topicTestLetter);
    });

    after(async function () {
        await service.clearService();
        service.quit();
    });

    it("Page check", async function () {
        let heading = await service.getHeadingTextDeletedLettersPage();
        assert.equal(heading, EXPECTED_HEADING, "You are on the wrong page.");
    });

    it("Checking messages in the trash", async function () {
        let heading = await service.getTopicLetterDeletedLettersService();
        assert.equal(heading, EXPECTED_TOPIC_DELETE_LETTER, "Email not found in trash.");
    });

    it("Test remove email from trash", async function () {
        await service.deleteDeletedLetter();
        let elements = await service.findTopicDeletedLetterService();
        assert.equal(elements.length, EXPECTED_COUNT_ELEMENTS, "Email found in trash folder.");
    });

});