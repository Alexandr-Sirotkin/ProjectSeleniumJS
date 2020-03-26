
"use strict";
let Page = require("./pages/LoginPage.js");
//let assert = require("assert");
let page;
//let expectedHeadingLoginPage = "logo:yandex";



async function f() {
    page = new Page();
    console.log("Hello1");
    await page.visit("https://passport.yandex.ru/auth/welcome");
    console.log("Hello2");
    let heading = await page.getHeadingText();
    console.log("Hello");
    console.log(heading);
};

f();

    // it("log in test", async function () {

    //     await driver.get("https://passport.yandex.ru/auth/welcome");
    //     let headingLocator = await By.xpath("//a[contains(@class,'logo logo_name')]");
    //     let heading = await driver.findElement(By.xpath(headingLocator));
    //      let heading = await driver.findElement(webdriver.By.xpath("//a[contains(@class,'logo logo_name')]")).getText();
    //      console.log("Hello");
    //      console.log(heading);
    //       assert.equal(heading, expectedHeadingLoginPage, "The expected LoginPage page title does not match the current one.");
    //  });

