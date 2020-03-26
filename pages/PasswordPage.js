"use strict";
let passwordPage = require("./BasePage.js");

let webdriver = require('selenium-webdriver'),
    chromeDriver = require('selenium-webdriver/chrome'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;


// const LOG_IN_BUTTON_LOCATOR = "//button[@type='submit']",
//     PASSWORD_FIELD_LOCATOR = "//input[@id='passp-field-passwd']",
//     ERROR_PASSWORD_LOCATOR = "//div[@class='passp-form-field__error']",
let HEADING_LOCATOR = "//div[@class='passp-auth-header']/a[2]";


passwordPage.prototype.getHeadingText1 = async function (driver) {
    // console.log("message");
    // console.log("message");
    // let r = await driver.findElement(By.xpath("//h1['passp-title ']/span")).getText();
    // console.log(r);
    // this.sleep(15000);
    // let rt = await driver.findElement(By.xpath("//div[@class='passp-form-field__link']/a[@class='control link link_theme_normal']")).getText();
    // console.log(rt);
    // this.waitElement(HEADING_LOCATOR);

    return this.find(HEADING_LOCATOR).getText();
}


passwordPage.prototype.message = function () {
    console.log("message");
}





module.exports = passwordPage;
