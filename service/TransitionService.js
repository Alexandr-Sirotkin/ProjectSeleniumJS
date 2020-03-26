
let logPage = require("../pages/LoginPage.js");
let loginPage = new logPage();





let servicePage = function () {

    this.findLoginField = function () {
        return loginPage.findLoginField();
    }


    this.clickLogInButton = function () {
        return loginPage.clickLogInButton();
    }

    this.getErrorTextLogin = function () {
        return loginPage.getErrorTextLogin();
    }

    this.getHeadingText = function () {
        return loginPage.getHeadingText();
    }

    this.visit = function (url) {
        return loginPage.visit(url);
    }

    this.quit = function () {
        return loginPage.quit();
    }

    this.typeUserLogin = async function (userLogin) {
        console.log("00000000000000000000");
        let loginField = await loginPage.findLoginField();
        console.log("11111111111111111111");
        await loginField.clear();
        console.log("222222222222222222222222");
        await loginField.sendKeys("userLogin");
        console.log("333333333333333333333333");
    }

    this.logInEmptyLogin = async function (userLogin) {
        await this.typeUserLogin(userLogin);
        console.log("1111111111111111");
        loginPage.clickLogInButton;
        console.log("22222222222222222222");

    }


}

module.exports = servicePage;