var HomePage = require(pageObjectDir + "/homePage.js");
var ContactUsPage = require(pageObjectDir + "/contactUsPage.js")

var homePage = new HomePage();
var contactUsPage = new ContactUsPage();

/*var isLabelLongerThan = function(isLongerThan){
    return new Promise(function(resolve){
        browser.customerServiceLabel.getText().then(function(text){
            resolve(text.lenght > isLongerThan);
        })
    });
}*/
//isLabelLongerThan(1).then(console.log)

describe('ContactUs Page Test', function () {
    it('Open Page', function () {
        //browser.waitForAngularEnabled(false); 
        browser.get(homePage.URL);       
    });
    it("should click contactUsLink", function() {
        homePage.contactUsLink.click();
    });
    it("should have a title", function(){
        browser.get(contactUsPage.URL);
        expect(contactUsPage.customerService.getText()).toEqual('CUSTOMER SERVICE - CONTACT US');
    });
    it("should display Subject Heading Dropdown", function(){
        expect(contactUsPage.subjectHeading.isDisplayed()).toBe(true);
    });
    it("should display Send Button", function(){
        expect(contactUsPage.sendButton.isPresent()).toBe(true);
    });
});