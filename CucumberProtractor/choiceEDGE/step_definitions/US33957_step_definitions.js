// Use the external Chai As Promised to deal with resolving promises in
// expectations.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

// Chai expect().to.exist syntax makes default jshint unhappy.
// jshint expr:true



module.exports = function() {
    

    this.Given(/^I navigate to choiceEDGE channel manager site$/, function(next) {
        browser.get('http://cukes.info');
        //var signIn = element(by.id('btn-sign-in'));
        //expect(signIn.isPresent());
        //expect(element(by.id('btn-sign-in'))).to.exist;
        var title = browser.getTitle();
        //log.console(title);
        next();
    });

    this.When(/^I log in as admin with my username and password$/, function(next){
        /*var username = element(by.name('email'));
        username.sendKeys('khoi_nguyen@choicehotels.com');

        var password = element(by.name('password'));
        password.sendKeys('Choice123');

        var signIn = element(by.id('btn-sign-in'));
        signIn.click();*/

        next();
    });

    this.When(/^I select Manage tab$/, function (next) {
      // Write code here that turns the phrase above into concrete actions
        next();
    });

    this.When(/^I select Rate Plans$/, function (next) {
      // Write code here that turns the phrase above into concrete actions
        next();
    });

    this.Then(/^There should be no table tag$/, function (next) {
      // Write code here that turns the phrase above into concrete actions
        next();
    });









    this.Given(/^I go on "([^"]*)"$/, function(url, next) {
        browser.get(url);
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
        expect(browser.getTitle()).to.eventually.equal(text).and.notify(next);
    });

};