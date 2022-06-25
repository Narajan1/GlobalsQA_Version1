const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require('../pageobjects/login.page');

Given(/^I am on the login page$/, async () => {
    await loginPage.open();
});

When(/^I clicked on manager button$/, async () => {
    await loginPage.clickOnBankManagerLoginBtn();
});

Then(/^I should see manager page opened$/, async () => {
    await expect(browser).toHaveUrlContaining('manager');
});

