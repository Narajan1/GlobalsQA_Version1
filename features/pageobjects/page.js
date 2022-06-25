module.exports = class Page {
    open (path) {
        browser.url(`https://www.globalsqa.com/angularJs-protractor/BankingProject/#/${path}`);
        browser.maximizeWindow();
    };
};
