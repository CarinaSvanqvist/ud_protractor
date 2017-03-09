var commonObj = require('../udemy-protractor/pages/common/ common.PaO.js')
var cartPage = require('..udemy-protractor/pages/cart/cart.PaO.js')
var helper = require('C:/Users/Carina/udemy-protractor/helper.js')

var commonObj = new commonObj();
var cartPage = new cartPage();
describe('Test Cart on Etsy.com', function () {
    beforeEach(function () {
        browser.get(browser.params.url);
    });

    afterEach(function () {
        browser.manage().deleteAllCookies();
    });

    it("Should click on cart and see that it is emty", function () {
       
        commonObj.cartIcon.click();
        //element(by.css('[title="Cart"]')).click(); //Moved this to common, cause cart-icon is on many pages
        //var message = element(by.xpath('//*[@id="newempty"]/div/h2')); //moved this to cartPage, cause it is carPage-uniqe
        expect(cartPage.errorMessage.getText()).toEqual("Your cart is empty.")
    });
});
