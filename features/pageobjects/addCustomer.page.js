const Page = require('./page');

class AddCustomer extends Page {
    get addCustomer () {
        return $("button[ng-click='addCust()']");
    };

    get firstName() {
        return $("input[ng-model='fName']");
    };

    get lastName() {
        return $("input[ng-model='lName']");
    };

    get postCode() {
        return $("input[ng-model='postCd']");
    };

    get addCustomerBtn() {
        return $("button[type='submit']");
    };

    async openAddCustomer() {
        const btn = await this.addCustomer;
        await btn.click();
    };

    async fillCustomerInfo(name, surename, pCode) {
        const fname = await this.firstName;
        await fname.click();
        await fname.setValue(name);
        const lname = await this.lastName;
        await lname.setValue(surename);
        await lname.click();
        const code = await this.postCode;
        await code.click();
        await code.setValue(pCode);
    };

    async clickOnAddCustomerBtn() {
        const btn = await this.addCustomerBtn;
        await btn.click();
    };
};

module.exports = new AddCustomer();
