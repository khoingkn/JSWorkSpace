// Use the external Chai As Promised to deal with resolving promises in
// expectations.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

// Chai expect().to.exist syntax makes default jshint unhappy.
// jshint expr:true

module.exports = function() {


    this.Given(/^I run Cucumber with Protractor$/, function(next) {
        next();
    });

    this.Given(/^I go on choiceEDGE channel manager$/, function(next) {
        browser.ignoreSynchronization = true
        browser.get('#/');
        var title = browser.getTitle();
        //log.console(title);
        next();
    });

    this.Then(/^it should still do normal tests$/, function(next) {
        expect(true).to.equal(true);
        next();
    });

    this.Then(/^it should expose the correct global variables$/, function(next) {
        expect(protractor).to.exist;
        expect(browser).to.exist;
        expect(by).to.exist;
        expect(element).to.exist;
        expect($).to.exist;
        next();
    });

    this.Then(/the title should equal "([^"]*)"$/, function(text, next) {
        //expect(browser.getTitle()).to.eventually.equal(text).and.notify(next);
        var username = browser.driver.findElement(by.id('accountName'));
        username.sendKeys('bestasura@gmail.com');

        var password = browser.driver.findElement(by.id('password'));
        password.sendKeys('Bithong12#');

        var signIn = browser.driver.findElement(by.id('submit'));
        signIn.click();
    });

};