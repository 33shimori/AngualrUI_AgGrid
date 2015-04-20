var chai = require('chai');
chai.use(require('chai-as-promised'));
var promised = chai.expect;


describe('hello world app', function (){
	it('should have a title', function (){
		browser.get('http://localhost:3000');
		promised(browser.getTitle()).to.eventually.equal('Angular UI - Grid')
	});
});

describe('name fields', function (){
	it ('should be filled out and editable', function () {
		browser.get('http://localhost:3000');
		var h1 = element.all(by.css('h1')).first();
		var fname = element.all(by.tagName('input')).first();
		var lname = element.all(by.tagName('input')).get(1);
		promised(h1.getText()).to.eventually.equal('Hello Jane Doe!');
		promised(fname.getAttribute('value')).to.eventually.equal("Jane");
		promised(lname.getAttribute('value')).to.eventually.equal("Doe");
		fname.clear().sendKeys("John");
		lname.clear().sendKeys('Smith');
		promised(fname.getAttribute('value')).to.eventually.equal("John");
		promised(lname.getAttribute('value')).to.eventually.equal("Smith");
	});
});