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


var data = {
    'dress1':{
        'cssSelector' : 'li:nth-child(1)  div.left-block a.product_img_link > img',
        'name' : 'Printed Dress',
        'actualName' : 'div.pb-center-column.col-xs-12.col-sm-4 > h1',
        'price' : '$26.00',
        'actualPrice' : '#our_price_display'
    },
    'dress2':{
        'cssSelector' : 'li:nth-child(2)  div.left-block a.product_img_link > img',
        'name' : 'Printed Dress',
        'actualName' : 'div.pb-center-column.col-xs-12.col-sm-4 > h1',
        'price' : '$50.99',
        'actualPrice' : '#our_price_display'
    },
    'dress3':{
        'cssSelector' : 'li:nth-child(3)  div.left-block a.product_img_link > img',
        'name' : 'Printed Summer Dress',
        'actualName' : 'div.pb-center-column.col-xs-12.col-sm-4 > h1',
        'price' : '$28.98',
        'actualPrice' : '#our_price_display'
    },
    'dress4':{
        'cssSelector' : 'li:nth-child(4)  div.left-block a.product_img_link > img',
        'name' : 'Printed Summer Dress',
        'actualName' : 'div.pb-center-column.col-xs-12.col-sm-4 > h1',
        'price' : '$30.50',
        'actualPrice' : '#our_price_display'
    },
    'dress5':{
        'cssSelector' : 'li:nth-child(5)  div.left-block a.product_img_link > img',
        'name' : 'Printed Chiffon Dress',
        'actualName' : 'div.pb-center-column.col-xs-12.col-sm-4 > h1',
        'price' : '$16.40',
        'actualPrice' : '#our_price_display'
    }}

    using(data, function (dress) {
        it('Click dress', function () {
+           womenPage[dress.cssSelector].click();
+           expect(womenPage[dress.actualName].getText()).toEqual(dress.name)
            expect(womenPage[dress.actualPrice].getText()).toEqual(dress.price)
        })
    });

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