var helper = require('C:/Users/Carina/udemy-protractor/helper.js')
var faker = require('faker')
var util = require('util')
describe("Ëtsy MainPaige Register, Sign in", function () {

    beforeEach(function () {
        browser.get(browser.params.url);

    });

    afterEach(function () {
        browser.manage().deleteAllCookies();
    })

    var randomFirstName = faker.name.firstName();
    var randomLastName = faker.name.lastName();
    var email = faker.internet.email();
    var password = faker.internet.password();
    it('1. Should find the title on the Page', function () {
        var title = 'Etsy.com | Shop for anything from creative people everywhere';
        expect(browser.getTitle()).toEqual(title);
    })
    it('2. Should register a new useraccount', function () {
        //var firstname = randomFirstName;
        //var surname = randomLastName;
        //var email = email;
        //var pw = password;
        //var succeedReg;

        var firstnameField = element(by.id('first-name'));
        var surnameField = element(by.id('last-name'));
        var emailField = element(by.id('email'));
        var passwordField = element(by.id('password'));
        var confirmPwField = element(by.id('password-repeat'));

        element(by.id('register')).click();
        helper.waitUntilReady(firstnameField);
        firstnameField.sendKeys(randomFirstName);
        surnameField.sendKeys(randomLastName);
        emailField.sendKeys(email);
        passwordField.sendKeys(password);
        confirmPwField.sendKeys(password);
        /* Test does not register a real account
    //    element(by.id('register_button')).click();
    //    helper.waitUntilReady(succeedReg);
    //    succeedReg = element(by.css('body > div.confirm-your-email > div'));
    //    expect(succeedReg).isPresent;
    */
    });

    it('3. Should not sign in to account', function () {

        var usernameField = element(by.id('username-existing'));//find element and assign
        var userPasswordField = element(by.id('password-existing'));//find element and assign
        var errorMessage;// = element(by.id('password-existing-error')); //find element and assign

        element(by.id('sign-in')).click(); // press signIn on startpage 
        helper.waitUntilReady(usernameField);
        usernameField.sendKeys('Test@test.com'); //send input data to usernameField
        userPasswordField.sendKeys('Password12');//send input data to userPasswordField
        element(by.id('signin-button')).click(); //click sign in-button to submit
        errorMessage = element(by.id('password-existing-error')); //find element and assign
        errorMessage = errorMessage.getText();
        expect(errorMessage.getText()).toBe('Password was incorrect.');
    }

            );

});