const Page = require('./page');

class SearchAndDeleteCustomer extends Page {

    get customers () {
        return $("button[ng-click='showCust()']");
    }; 

    get searchField() {
        return $("input[ng-model='searchCustomer']");
    };

    get customersListTable() {
        return $("tbody");
    };
    
    get customersList() {
        return $$("tbody tr");
    };

    async openCustomers() {
        const elem = await this.customers;
        await elem.click();
    };

    async inputValueInSearchField(value) {
        const elem = await this.searchField;
        await elem.click();
        await elem.setValue(value);
    };

    async fNameFromTable(index) {
        return $(`tbody tr:nth-child(${index}) td:nth-child(1)`);
    };

    async lNameFromTable(index) {
        return $(`tbody tr:nth-child(${index}) td:nth-child(2)`);
    };

    async zipFromTable(index) {
        return $(`tbody tr:nth-child(${index}) td:nth-child(3)`);
    };

    async compareCustomerInfoAndDelete(name, surename, zip) {
        let i;
        const customersListArr = await this.customersList;
        for(i=0; i<customersListArr.length; i++) {
            const fName = await this.fNameFromTable(i+1);
            const lName = await this.lNameFromTable(i+1);
            const zipCode = await this.zipFromTable(i+1);
            if(fName===name && lName===surename && zipCode===zip) {
                break;
            };
        };
        await this.clickOnDeleteBtn(i);
        return true;
    };

    async verifyCustomerDeleted(name, surename, zip) {
        let i;
        const searchField = await this.searchField;
        searchField.clearValue();
        const customersListArr = await this.customersList;
        for(i=0; i<customersListArr.length; i++) {
            const fName = await this.fNameFromTable(i+1);
            const lName = await this.lNameFromTable(i+1);
            const zipCode = await this.zipFromTable(i+1);
            if(fName===name && lName===surename && zipCode===zip) {
                return false;
            };
        };
        return true;
    };

    //Can't do get because of index parameter
    async clickOnDeleteBtn(index) {
        const btn = await $(`tbody tr:nth-child(${index}) button`);
        await btn.click();
    };
};

module.exports = new SearchAndDeleteCustomer();
