var helper = require('C:/Users/Carina/udemy-protractor/helper.js')

describe('Test Cart on Etsy.com', function () {

    it("Should click on cart and see that it is emty", function () {
        browser.get(browser.params.url);
        element(by.css('[title="Cart"]')).click();
        var message = element(by.xpath('//*[@id="newempty"]/div/h2'));
        //console.log(message.getText());
        
       expect(message.getText()).toEqual("Your cart is empty.")
    });
});
