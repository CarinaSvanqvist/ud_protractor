var util = require ('util')
describe("Protractor Demo App", function(){
	
	beforeEach(function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
	});
	
	
	xit("Should have a title", function(){
		//browser.get("http://juliemr.github.io/protractor-demo/");
		expect(browser.getTitle()).toEqual("Super Calculator");
	});
	xit("Should be correct answer when multiplicate specific numbers", function(){
		element(by.model("first")).sendKeys(4);
		element(by.model("operator")).$('[value="MULTIPLICATION"]').click();
		element(by.model("second")).sendKeys(8);
		element(by.id("gobutton")).click();
		browser.driver.sleep(10);
		var result = element(by.css('h2.ng-binding')).getText();
		expect(result).toBe("32");

	 });
	 //C:\Users\Carina\udemy-protractor\pages
	 var calculator_page = require('C:/Users/Carina/udemy-protractor/pages/calculator.js');
	 it("Should be correct answer when multiplicate specific numbers 2", function(){
		 calculator_page.firstValue('5');
		 calculator_page.operator("MULTIPLICATION");
		 calculator_page.secondValue('3');
		 calculator_page.goButton();
		 var result = calculator_page.result();
		 console.log("This is result" + result);
		 expect(result).toBe('15');
		 
	 });
	 xit("Should be correct answer when dividing specific numbers", function(){
		 element(by.model("first")).sendKeys(10);
		 element(by.model("operator")).$('[value="DIVISION"]').click();
		 element(by.model("second")).sendKeys(2);
		 element(by.id("gobutton")).click();
		 browser.sleep(10);
		 var result = element(by.css('h2.ng-binding')).getText();
		 expect(result).toBe("5");
	 } );
	 xit("Should be correct answer when subtraction specific numbers", function(){
		 element(by.model("first")).sendKeys(32);
		 element(by.model("operator")).$('[value="SUBTRACTION"]').click();
		 element(by.model("second")).sendKeys(12);
		 element(by.id("gobutton")).click();
		 browser.sleep(10);
		 var result = element(by.css('h2.ng-binding')).getText();
		 expect(result).toBe("20");
	 });
	 
	 xit("Should be correct answer when addition apecific numbers", function(){
		element(by.model("first")).sendKeys(13);
		element(by.model("operator")).$('[value="ADDITION"]').click();
		element(by.model("second")).sendKeys(2);
		element(by.id("gobutton")).click();
		browser.sleep(10);
		var result = element(by.css('h2.ng-binding')).getText();
		expect(result).toBe("15");
	 });
	 
});