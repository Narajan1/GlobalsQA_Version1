const { Given, When, Then } = require('@wdio/cucumber-framework');
const searchDelPage = require("../pageobjects/searchDeleteCustomer.page");
const expectChai = require("chai").expect;
const helper = require("../Helper/helper");

const customerName = helper.firstName;
const customerSurename = helper.lastName;
const zipCode = helper.postCode;

Given(/^I am on the search-delete customer page$/, async () => {
    await searchDelPage.openCustomers();
    const table = await searchDelPage.customersListTable;
    await expect(table).toBeDisplayed();
});

When(/^I input search text in search field$/, async () => {
    await searchDelPage.inputValueInSearchField(customerName);
});

When(/^I assert that customer is added with correct info and delete that customer$/, async () => {
    const result = await searchDelPage.compareCustomerInfoAndDelete(customerName, customerSurename, zipCode);
    expectChai(result).to.be.equal(true);
});

Then(/^I should verify that customer is deleted$/, async () => {
    const result = await searchDelPage.verifyCustomerDeleted(customerName, customerSurename, zipCode);
    expectChai(result).to.be.equal(true);
});