"use strict";


let By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

let Page = class BasePage {

    constructor(driver) {
        this.driver = driver;
    }

    visit(url) {
        return this.driver.get(url);
    }

    quit() {
        return this.driver.quit();
    }

    find(element) {
        this.driver.wait(until.elementLocated(By.xpath(element)), 1000);
        return this.driver.findElement(By.xpath(element));
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    findAll(element) {
        return this.driver.findElements(By.xpath(element));
    }

    write(element, text) {
        this.find(element).clear();
        return this.find(element).sendKeys(text);
    }

    async refresh(element) {
        let displayed = false;
        let count = 0;
        do {
            try {
                displayed = await this.driver.findElement(By.xpath(element));
            } catch (err) {
                await this.driver.navigate().refresh();
                if (count > 6) {
                    displayed = true;
                }
                count++;
            }
        } while (!displayed);
    }

};

module.exports = Page;

