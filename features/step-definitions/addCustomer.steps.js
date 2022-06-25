const { Given, When, Then } = require('@wdio/cucumber-framework');
const addCustomerPage = require("../pageobjects/addCustomer.page");
const helper = require("../Helper/helper");

const customerName = helper.firstName;
const customerSurename = helper.lastName;
const zipCode = helper.postCode;

Given(/^I am on the manager-add customer page$/, async () => {
    const elem = await addCustomerPage.addCustomer;
    await expect(elem).toBeDisplayed();
});

When(/^I click on Add customer$/, async () => {
    await addCustomerPage.openAddCustomer();
});

When(/^I fill customer information$/, async () => {
    await addCustomerPage.fillCustomerInfo(customerName, customerSurename, zipCode);
});

When(/^I click on the add button$/, async () => {
    await addCustomerPage.clickOnAddCustomerBtn();
    await browser.pause(2000);
});

Then(/^I should accept appeared popup$/, async () => {
    browser.acceptAlert();
});