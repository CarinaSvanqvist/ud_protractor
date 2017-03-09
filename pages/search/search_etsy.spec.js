var helper = require('C:/Users/Carina/udemy-protractor/helper.js')

describe("Search-function test on Etsy", function () {
    it("Should test seach function and verify that we got a result", function () {
        browser.get(browser.params.url);
        var searchfield = element(by.id("search-query"));
        searchfield.sendKeys("My little pony");
        element(by.linkText("Search")).click();
        var chosen = element(by.xpath('//*[@id="content"]/div/div/div[2]/div/div[1]/div/div[5]/div/div[1]/a/div[1]/div/img'))
        expect(chosen).toExist;
    });
});


