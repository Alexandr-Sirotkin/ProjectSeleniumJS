
"use strict";
let Page = require("../../pages/LoginPage.js");
let assert = require("assert");
let page;
let expectedHeadingLoginPage = "logo:yandex";



describe("LoginPage page tests", function () {
    this.timeout(10000);

    before(async function () {
        page = new Page();
        await page.visit("https://passport.yandex.ru/auth/welcome");
    });

    after(function () {
        page.quit();

    });

    it("log in test", async function () {
        let heading = page.getHeadingText();
        console.log("Hello");
        console.log(heading);
        await assert.equal(heading, expectedHeadingLoginPage, "The expected LoginPage page title does not match the current one.");

    });

});