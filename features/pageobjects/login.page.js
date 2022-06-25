const Page = require("./page");
const helper = require("../Helper/helper");

class LoginPage extends Page {

    get bankManagerLoginBtn () {
        return $("button[ng-click='manager()']");
    };

    async clickOnBankManagerLoginBtn () {
        const btn = await this.bankManagerLoginBtn;
        await btn.click();
    };

    open () {
        return super.open("login");
    };
};

module.exports = new LoginPage();
