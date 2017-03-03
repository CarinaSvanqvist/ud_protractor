var calculator_page = function(){
	this.firstValue = function (value){
		element(by.model("first")).sendKeys(value);
	};
	this.operator = function(chosen){
	   element(by.model("operator")).$('[value="' +chosen+ '"]').click();
	   //element(by.tagName("option")).$('[value="'+chosen+'"]').click();
	  //element(by.cssContainingText('option',chosen)).click();
	};
	this.secondValue = function (value){
		element(by.model("second")).sendKeys(value);
	};
	this.goButton = function(){
        element(by.id("gobutton")).click();	
	};
	this.result = function(){
		//return element(by.css('h2.ng-binding')).getText());
		 var answertest = element(by.css('td.ng-binding')).getText();
		 console.log("Kollar vad det blir i resultatlistan" + answertest);
		 
		 var answer = element(by.css('h2.ng-binding')).getText();
		 console.log("calculator_page säger att resultatet är:" + answer);

		 return answer;
	};
};

module.exports = new calculator_page();



