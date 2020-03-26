"use strict";



let webdriver = require('selenium-webdriver'),
    chromeDriver = require('selenium-webdriver/chrome'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    Key = require('selenium-webdriver').Key,
    path = require('chromedriver').path;
//     options = new chromeDriver.Options();
// options.addArguments('start-maximized');
// options.addArguments('incognito');




let BasePage = function (driver) {



    this.driver = driver;

    // let driver = new webdriver.Builder()
    //     .withCapabilities(webdriver.Capabilities.chrome())
    //     .forBrowser('chrome')
    //     .setChromeOptions(options)
    //     .build();






    this.visit = function (url) {
        return driver.get(url);
    }

    this.quit = function () {
        return driver.quit();
    }

    this.find = function (element) {
        driver.wait(until.elementLocated(By.xpath(element)), 5000);
        return driver.findElement(By.xpath(element));
    }

    this.finda = async function (element) {
        let elem = await driver.wait(until.elementLocated(By.xpath(element)), 55000);
        return elem;
    }


    // this.waitElement = async function (element) {
    //     let displayed = false;
    //     let count = 0;
    //     do {
    //         try {
    //             displayed = driver.findElement(element).isDisplayed();
    //         } catch (err) {
    //             if (count > 20000) {
    //                 displayed = true;
    //             }
    //             count++;
    //             console.log(count);
    //         }
    //     } while (!displayed);
    // }




    this.sleep = function (ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }







    this.findAll = function (element) {
        driver.wait(until.elementLocated(By.xpath(element)), 5000);
        return driver.findElements(By.xpath(element));
    }

    this.write = function (element, text) {
        // this.find(element).clear();
        this.find(element).sendKeys(webdriver.Key.CONTROL, Key.HOME);
        this.find(element).sendKeys(webdriver.Key.CONTROL, Key.SHIFT, Key.END);
        return this.find(element).sendKeys(text);
    }




}

module.exports = BasePage;